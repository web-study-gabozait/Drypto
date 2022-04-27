import styled from "styled-components";

export const MainNewsVoidContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainNewsVoidWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const MainNewsVoidIcon = styled.div`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.contrast};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MainNewsVoidTitle = styled.h1`
  color: ${({ theme }) => theme.contrast};

  font-weight: 700;
`;
