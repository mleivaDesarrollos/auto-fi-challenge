import { actions } from "./slice";
import HttpClient from "util/httpClient";
import { API } from "defaults/constants";
import { call, put, StrictEffect, takeLatest, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchSaga(): Generator<StrictEffect, void, unknown> {
  try {
    const posts = yield call(HttpClient.get, API.posts);
    yield put({ type: actions.success.type, payload: posts });
  } catch (error) {
    yield put({ type: actions.failure.type });
  }
}

function* fetchCommentsSaga(
  action: PayloadAction<number>
): Generator<StrictEffect, void, unknown> {
  const postId = action.payload;
  try {
    const comments = yield call(
      HttpClient.get,
      `${API.comments}?postId=${postId}`
    );
    yield put({ type: actions.fetchCommentsSuccess.type, payload: comments });
  } catch (error) {}
}

export default function* rootSaga(): Generator<StrictEffect, void, null> {
  yield all([
    takeLatest(actions.fetch.type, fetchSaga),
    takeLatest(actions.fetchComments.type, fetchCommentsSaga),
  ]);
}
