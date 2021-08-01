import { PaginationNumber } from "defaults/types";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postsCountSelector,
  postsPaginatedSelector,
} from "redux/main/selectors";
import { actions } from "redux/main/slice";
import { useDebounce } from "util/hooks";

const WAIT_SEARCH_DELAY = 400;

export const useApp = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsPaginatedSelector);
  const totalPosts = useSelector(postsCountSelector);
  const mounted = useRef(false);
  const [searchPost, setSearchPost] = useState<string>("");
  const debouncedSearch = useDebounce(searchPost, WAIT_SEARCH_DELAY);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(actions.setSearch(debouncedSearch));
    }
  }, [dispatch, debouncedSearch]);
  useEffect(() => {
    dispatch(actions.fetch());
  }, [dispatch]);
  const handleSearchPosts = (e: FormEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    setSearchPost(search);
  };
  const handleChangePagination = ({ page, size }: PaginationNumber) => {
    dispatch(actions.setPagination({ page, size }));
  };
  return {
    posts,
    handleSearchPosts,
    handleChangePagination,
    totals: totalPosts,
  };
};
