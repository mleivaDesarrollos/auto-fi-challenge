import useStyles from "./styles";

const Header = () => {
  const classNames = useStyles();
  return <div className={classNames.headerImage} />;
};

type Props = {
  children: React.ReactChild | React.ReactChild[];
};
const Layout = ({ children }: Props) => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <Header />
      <nav className={classNames.navbar}>navigation</nav>
      <main className={classNames.content}>{children}</main>
      <footer className={classNames.footer}>footer of page</footer>
    </div>
  );
};

export default Layout;
