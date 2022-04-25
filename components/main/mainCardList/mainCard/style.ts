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
`;

export const MainCardTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainCardTitle = styled.h1`
  font-size: 14px;
  line-height: 1.86;
  font-weight: 700;
  color: ${({ theme }) => theme.contrast};
`;

export const MainCardFavIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MainCardDetailButton = styled.button`
  background: none;
  border: 0px;
  margin-left: auto;
  margin-top: auto;
  text-decoration: underline;
  color: ${({ theme }) => theme.subText};
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;

  p {
    font-size: 14px;
  }

  div {
    width: 14px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;
