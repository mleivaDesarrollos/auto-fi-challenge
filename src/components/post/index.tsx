import { Comments } from "defaults/types";
import { useDispatch } from "react-redux";
import CommentsComponent from "./Comments";
import { actions } from "redux/main/slice";
import useStyles from "./styles";

type PostProps = {
  id: number;
  title: string;
  body: string;
  comments?: Comments[];
};

const Post = ({ id, title, body, comments }: PostProps) => {
  const dispatch = useDispatch();
  const className = useStyles();
  const handleBringComments = () => {
    dispatch(actions.fetchComments(id));
  };
  return (
    <>
      <article key={id} className={className.container}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button type="button" onClick={handleBringComments}>
          <i className="fas fa-comments"></i>
        </button>
      </article>
      <CommentsComponent postId={id} list={comments} />
    </>
  );
};

export default Post;
