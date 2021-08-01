import { ChangeEventHandler } from "react";
import styled from "styled-components";
import Search from "./Search";
/*
const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 10rem 1fr 10rem;
  grid-template-rows: 150px 40px 1fr 70px;
  @media (max-width: 768px) {
    grid-template-columns: 0.3rem 1fr 0.3rem;
  }
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
  box-shadow: 0px 2px 1px 1px #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
`;

const Footer = styled.footer`
  grid-column: 1 / 4;
  grid-row: 4 /5;
  margin-top: 1rem;
  border-top: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;*/
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Header = styled.div`
  flex: 0 0 150px;
  background: url("/images/header-image.jpg");
  background-position: center center;
  background-size: 100% auto;
`;

const Nav = styled.nav`
  flex: 0 0 40px;
  box-shadow: 0px 2px 1px 1px #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  flex: 1 0 80%;
  width: 100%;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  @media (max-width: 468px) {
    padding: 0.5rem;
  }
`;

const Footer = styled.footer`
  flex: 1 0 70px;
  margin-top: 1rem;
  border-top: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: React.ReactChild | React.ReactChild[];
  onPostSearch: ChangeEventHandler<HTMLInputElement>;
};
const Layout = ({ children, onPostSearch }: Props) => {
  return (
    <Container>
      <Header />
      <Nav>
        <Search onPostSearch={onPostSearch} />
      </Nav>
      <Main>{children}</Main>
      <Footer>footer of page</Footer>
    </Container>
  );
};

export default Layout;
