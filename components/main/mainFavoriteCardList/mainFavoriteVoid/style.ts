import styled from "styled-components";

export const MainFavoriteVoidContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainFavoriteVoidwWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const MainFavoriteVoidIcon = styled.div`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.contrast};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MainFavoriteVoidTitle = styled.h1`
  color: ${({ theme }) => theme.contrast};

  font-weight: 700;
`;
