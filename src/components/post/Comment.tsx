import useStyles from "./styles";

type CommentProp = {
  name: string;
  email: string;
  body: string;
};

const Comment = ({ name, email, body }: CommentProp) => {
  const className = useStyles();
  return (
    <div className={className.commentContainer}>
      <span className={className.commentUsername}>{name}</span>
      <span className={className.commentEmail}>{email}</span>
      <p className={className.commentBody}>{body}</p>
    </div>
  );
};

export default Comment;
