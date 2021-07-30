import { Comments } from "defaults/types";
import Comment from "./Comment";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "redux/main/slice";
import useStyles from "./styles";

type CommentsProps = {
  postId: number;
  list: Comments[] | null | undefined;
};

const CommentsComponent = ({ list, postId }: CommentsProps) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const fieldName = `comment-${postId}`;
  const classNames = useStyles();
  if (!list || list.length === 0) {
    return null;
  }
  const handleChangeComment = (e: FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };
  const handleSendComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    const comment = values.get(fieldName) as string;
    dispatch(actions.addComment({ postId, comment }));
  };
  return (
    <div className={classNames.commentsContainer}>
      {list.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
      <form onSubmit={handleSendComment}>
        <label htmlFor={fieldName}>Leave a comment:</label>
        <input
          name={fieldName}
          id={fieldName}
          type="text"
          value={comment}
          onChange={handleChangeComment}
          placeholder="Write something relevant"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CommentsComponent;
