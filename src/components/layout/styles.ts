import { createUseStyles } from "react-jss";

type LayoutClassnames =
  | "container"
  | "headerImage"
  | "navbar"
  | "content"
  | "footer";

const useStyles = createUseStyles<LayoutClassnames>({
  container: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "40px 1fr 40px",
    gridTemplateRows: "150px 40px 1fr 50px",
  },
  headerImage: {
    gridColumn: "1 / 4",
    gridRow: "1 / 2",
    background: 'url("/images/header-image.jpg")',
    backgroundPosition: "center center",
    backgroundSize: "100% auto",
  },
  content: {
    gridColumn: "2/3",
    gridRow: "3/4",
  },
  navbar: {
    gridColumn: "1 / 4",
    gridRow: "2 /3",
  },
  footer: { gridColumn: "1/4", gridRow: "4/5" },
});

export default useStyles;
