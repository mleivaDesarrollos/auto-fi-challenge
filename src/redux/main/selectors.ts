import { RootState } from "redux/reducers";

export const postsSelectors = (state: RootState) => state.main.posts;
