import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    subBackgroundColor: string;
    coinCardBg: string;
    contrast: string;
    subContrast: string;
    subText: string;
  }
}
