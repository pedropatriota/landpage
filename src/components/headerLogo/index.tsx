import styled, { css } from "styled-components";

type TImage = {
  urlMobile: string;
  urlDesktop: string;
  width?: number | string;
  height?: number | string;
  widthMobile?: number | string;
  heightMobile?: number | string;
  isAbout?: boolean;
  isAboutMobile?: boolean;
};

const ImgContainer = styled.div<TImage>`
  height: ${({ height }) => (height ? height : "798.867px")};
  width: ${({ width }) => (width ? width : "100%")};
  background-image: url(${({ urlDesktop }) => urlDesktop});
  background-position: 53.6627% 7.2121%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media (min-width: 768px) {
    mask-image: linear-gradient(to bottom, #7d7979 90%, #00000003 100%);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    background-image: url(${({ urlMobile }) => urlMobile});
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : "378.926px"};
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : "359.551px")};

    ${({ isAboutMobile }) =>
      isAboutMobile &&
      `
      border-radius: 8px;
      mask-image: linear-gradient(to bottom, #7d7979 90%, #00000003 100%);
    `}
  }
`;

export const HeaderImage = ({
  height,
  width,
  widthMobile,
  heightMobile,
  urlMobile,
  urlDesktop,
  isAbout,
  isAboutMobile,
}: TImage) => (
  <ImgContainer
    height={height}
    width={width}
    urlMobile={urlMobile}
    urlDesktop={urlDesktop}
    widthMobile={widthMobile}
    heightMobile={heightMobile}
    isAbout={isAbout}
    isAboutMobile={isAboutMobile}
  />
);
