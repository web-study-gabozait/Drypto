import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const HeaderItem = ({ children, onClick }: Props) => {
  return (
    <HeaderItemContainer onClick={onClick}>{children}</HeaderItemContainer>
  );
};

const HeaderItemContainer = styled.button`
  width: 36px;
  height: 36px;
  background: none;
  border-radius: 100%;
  border: 1px;
  color: ${({ theme }) => theme.contrast};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default HeaderItem;
