import styled from "styled-components";

type CommentProp = {
  name: string;
  email: string;
  body: string;
};

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #c3c3c3;
  margin: 1rem 0;
`;

const Username = styled.span`
  display: block;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 3px;
  border-bottom: 1px solid #303030;
`;

const Email = styled.span`
  display: block;
  font-size: 0.7rem;
  margin-bottom: 3px;
`;

const Body = styled.p`
  padding-left: 10px;
`;

const Comment = ({ name, email, body }: CommentProp) => {
  return (
    <Container>
      <Username>{name}</Username>
      <Email>{email}</Email>
      <Body>{body}</Body>
    </Container>
  );
};

export default Comment;
