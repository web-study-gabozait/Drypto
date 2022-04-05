import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header/Header";

1130;

type Props = {
  children: ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <ChildrenWrap>{children}</ChildrenWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ChildrenWrap = styled.div`
  width: 1130px;
  min-height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0px auto;
`;

export default PageTemplate;
