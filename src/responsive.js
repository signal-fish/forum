import { css } from "styled-components";

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 576px) {
      ${props}
    }
  `;
};

export const tabletPro = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;
};

export const laptopPro = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }
  `;
};

export const DesktopPro = (props) => {
  return css`
    @media only screen and (min-width: 1440px) {
      ${props}
    }
  `;
};

export const LargeVersion = (props) => {
  return css`
    @media only screen and (min-width: 1800px) {
      ${props}
    }
  `;
};
