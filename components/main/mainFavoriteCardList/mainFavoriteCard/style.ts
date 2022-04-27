import styled from "styled-components";

export const MainFavCardContainer = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

export const MainFavCardIcon = styled.img`
  object-fit: scale-down;
`;

export const MainFavCardTitle = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 700;
  margin-left: 8px;
`;

export const MAinFavCardRedirectButton = styled.button`
  background: none;
  border: 0px;
  margin-left: auto;
  text-decoration: underline;
  color: ${({ theme }) => theme.subText};
  display: flex;
  align-items: center;
  column-gap: 5px;

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
