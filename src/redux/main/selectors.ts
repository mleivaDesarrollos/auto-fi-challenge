import { RootState } from "redux/reducers";
import { createSelector } from "reselect";

export const postsSelectors = (state: RootState) => state.main.posts;

export const postsSearchSelector = (state: RootState) => state.main.search;

export const postsPaginationSelector = (state: RootState) =>
  state.main.pagination;

export const postsFilteredSelector = createSelector(
  postsSelectors,
  postsSearchSelector,
  (posts, search) => {
    let filteredPosts = posts;
    if (search && search !== "") {
      filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredPosts;
  }
);

export const postsCountSelector = createSelector(
  postsFilteredSelector,
  (posts) => {
    return posts.length;
  }
);

export const postsPaginatedSelector = createSelector(
  postsFilteredSelector,
  postsPaginationSelector,
  (filteredPosts, pagination) => {
    const start = pagination.page * pagination.size;
    const end = pagination.page * pagination.size + pagination.size;
    filteredPosts = filteredPosts.slice(start, end);
    return filteredPosts;
  }
);
