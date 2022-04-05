import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header/Header";

type Props = {
  children: ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  return (
    <TemplateContainer>
      <Header />
      <TemplateChildrenWrap>{children}</TemplateChildrenWrap>
    </TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const TemplateChildrenWrap = styled.div`
  width: 1130px;
  min-height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export default PageTemplate;
