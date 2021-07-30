import { createUseStyles } from "react-jss";

export type PostClassnames =
  | "container"
  | "commentsContainer"
  | "commentContainer"
  | "commentUsername"
  | "commentEmail"
  | "commentBody";

const useStyles = createUseStyles<PostClassnames>({
  container: {
    position: "relative",
    boxShadow: "1px 1px 2px 2px #e3e3e3",
    padding: "2rem",
    marginTop: "2rem",
    "& button": {
      outline: "none",
      border: "none",
      backgroundColor: "white",
      position: "absolute",
      bottom: 20,
      right: 20,
    },
  },
  commentsContainer: {
    border: "1px solid #c3c3c3",
    marginBottom: "2rem",
  },
  commentContainer: {
    padding: "1rem",
    borderBottom: "1px solid #c3c3c3",
    margin: "1rem 0",
  },
  commentUsername: {
    display: "block",
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: 3,
    borderBottom: "1px solid #303030",
  },
  commentEmail: {
    display: "block",
    fontSize: "0.7rem",
    marginBottom: 3,
  },
  commentBody: {
    paddingLeft: 10,
  },
});

export default useStyles;
