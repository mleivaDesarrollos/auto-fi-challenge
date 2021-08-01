import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  height: 1.7rem;
  padding: 0.3rem;
  border: none;
  border-radius: 4px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border-top: 1px solid #3a3a3a;
  border-left: 1px solid #3a3a3a;
  border-bottom: 1px solid #3a3a3a;
`;

const Label = styled.label`
  height: 1.7rem;
  padding: 0.3rem;
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-top: 1px solid #3a3a3a;
  border-right: 1px solid #3a3a3a;
  border-bottom: 1px solid #3a3a3a;
`;

type Props = {
  onPostSearch: ChangeEventHandler<HTMLInputElement>;
};

const Search = ({ onPostSearch }: Props) => (
  <Container>
    <Input
      name="search-posts"
      id="search-posts"
      type="text"
      onChange={onPostSearch}
      placeholder="Search post title..."
    />
    <Label htmlFor="search-posts">
      <i className="fas fa-search"></i>
    </Label>
  </Container>
);

export default Search;
