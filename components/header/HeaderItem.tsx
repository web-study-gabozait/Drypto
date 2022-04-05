import styled from "styled-components";

type Props = {
  title: string;
  onClick: () => void;
};

const HeaderItem = ({ title, onClick }: Props) => {
  return <HeaderItemContainer onClick={onClick}>{title}</HeaderItemContainer>;
};

const HeaderItemContainer = styled.button`
  width: 36px;
  height: 36px;
  background: none;
  border-radius: 100%;

  &:hover {
    background-color: #eee;
  }
`;

export default HeaderItem;
