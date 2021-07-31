import { Comments } from "defaults/types";
import { useDispatch } from "react-redux";
import CommentsComponent from "./Comments";
import { actions } from "redux/main/slice";
import styled from "styled-components";

const Article = styled.article`
  position: relative;
  box-shadow: 1px 1px 2px 2px #e3e3e3;
  padding: 2rem;
  margin-top: 2rem;
  & button {
    outline: none;
    border: none;
    background-color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

type PostProps = {
  id: number;
  title: string;
  body: string;
  comments?: Comments[];
};

const Post = ({ id, title, body, comments }: PostProps) => {
  const dispatch = useDispatch();
  const handleBringComments = () => {
    dispatch(actions.fetchComments(id));
  };
  return (
    <>
      <Article>
        <h2>{title}</h2>
        <p>{body}</p>
        <button type="button" onClick={handleBringComments}>
          <i className="fas fa-comments"></i>
        </button>
      </Article>
      <CommentsComponent postId={id} list={comments} />
    </>
  );
};

export default Post;
