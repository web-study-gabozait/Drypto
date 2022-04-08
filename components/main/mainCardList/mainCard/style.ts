import styled from "styled-components";

export const MainCardContainer = styled.div`
  width: 248px;
  height: 173px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.coinCardBg};
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MainCardTitle = styled.h1`
  font-size: 14px;
  line-height: 1.86;
  font-weight: 700;
  color: ${({ theme }) => theme.contrast};
`;
