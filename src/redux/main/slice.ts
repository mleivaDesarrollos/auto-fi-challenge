import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comments, PaginationNumber, Posts } from "defaults/types";

type State = {
  posts: Posts[];
  search: string;
  pagination: PaginationNumber;
};

type AddCommentPayload = {
  postId: number;
  comment: string;
};

const initialState: State = {
  posts: [],
  search: "",
  pagination: {
    page: 1,
    size: 10,
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    fetch: () => {},
    success: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload;
    },
    failure: () => {},
    fetchComments: (state, action: PayloadAction<number>) => {},
    fetchCommentsSuccess: (state, action: PayloadAction<Comments[]>) => {
      state.posts = state.posts.map((post) => {
        if (post.id !== action.payload[0].postId) {
          return post;
        }
        return {
          ...post,
          comments: action.payload,
        };
      });
    },
    fetchCommentsFailure: () => {},
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationNumber>) => {
      state.pagination.page = action.payload.page;
      state.pagination.size = action.payload.size;
    },
    addComment: (state, action: PayloadAction<AddCommentPayload>) => {
      state.posts = state.posts.map((post) => {
        if (post.id !== action.payload.postId) {
          return post;
        }
        const comment: Comments = {
          postId: action.payload.postId,
          id: 100,
          name: "Anonymous",
          email: "anon@gmai.com",
          body: action.payload.comment,
        };
        post.comments?.push(comment);
        return post;
      });
    },
  },
});

export const { reducer, name, actions } = mainSlice;
