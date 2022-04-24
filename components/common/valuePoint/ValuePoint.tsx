import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

type Props = {
  change_price: number;
};

const ValuePoint = ({ change_price }: Props) => {
  return <ValuePointItem change={change_price} />;
};

export default ValuePoint;

export const ValuePointItem = styled.span<{ change: number }>`
  border-style: solid;
  border-width: 7px 4.5px 0 4.5px;
  margin-right: 5px;

  ${({ change }) =>
    change! > 0 &&
    css`
      transform: rotate(180deg);
      border-color: ${palette.red[500]} transparent transparent transparent;
    `};

  ${({ change }) =>
    change! === 0 &&
    css`
      border-color: ${palette.gray[200]} transparent transparent transparent;
    `};

  ${({ change }) =>
    change! < 0 &&
    css`
      border-color: ${palette.blue[700]} transparent transparent transparent;
    `};
`;
