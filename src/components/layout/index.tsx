import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 150px 40px 1fr 50px;
`;

const Header = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  background: url("/images/header-image.jpg");
  background-position: center center;
  background-size: 100% auto;
`;

const Nav = styled.nav`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

const Main = styled.main`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const Footer = styled.footer`
  grid-column: 1 / 4;
  grid-row: 4 /5;
`;

type Props = {
  children: React.ReactChild | React.ReactChild[];
};
const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Nav>navigation</Nav>
      <Main>{children}</Main>
      <Footer>footer of page</Footer>
    </Container>
  );
};

export default Layout;
