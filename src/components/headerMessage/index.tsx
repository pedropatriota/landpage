import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "../Button";

type TLink = {
  width: number | string;
  height: number;
  font: number;
};

type TStylePosition = {
  position?: string;
  align?: "center" | "left" | "right" | "justfy";
  isAbout?: boolean;
};

type TMessage = {
  hasLink?: boolean;
  title?: string;
  description?: React.ReactNode;
  topMobile?: string;
} & TStylePosition;

const ContainerMobile = styled.div<TMessage>`
  width: 359.551px;
  text-align: center;

  h2 {
    color: #20797c;
    margin-bottom: 25px;
    font-size: 24px;
  }
  p {
    color: #000;
    margin-bottom: 15px;
    line-height: 20px;
    text-align: left;

    span {
      font-weight: bold;
      color: #20797c;
    }
  }
`;

const ContainerDesktop = styled.div<TStylePosition>`
  width: 40%;
  position: ${({ position }) => (position ? position : "absolute")};
  left: 10%;
  top: 180px;
  text-align: ${({ align }) => (align ? align : "center")};

  ${({ isAbout }) =>
    isAbout &&
    `
      z-index: 1;
    `}

  h2 {
    color: #20797c;
    margin-top: -50px;
    margin-bottom: 25px;
    font-size: 45px;
  }
  p {
    color: #000;
    margin-bottom: 18px;
    line-height: 25px;
    font-size: 18px;

    ${({ isAbout }) =>
      isAbout &&
      `
      text-align: left;
    `}

    span {
      font-weight: bold;
      color: #20797c;
    }
  }
`;

export const HeaderMessage = ({
  title,
  description,
  hasLink = true,
  position,
  align,
  topMobile,
  isAbout,
}: TMessage) => {
  const { width } = useWindowSize();

  const [linkStyle, setLinkStyle] = useState<TLink>({
    width: 359.551,
    height: 53,
    font: 16,
  });

  useEffect(() => {
    if (width && width <= 768) {
      setLinkStyle({ width: 359.551, height: 53, font: 16 });
    } else {
      setLinkStyle({ width: 500, height: 74, font: 18 });
    }
  }, [width, position]);

  const content = useMemo(() => {
    return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        {hasLink && (
          <Link
            title="QUERO AGENDAR MINHA SESSÃO GRATUITA"
            {...linkStyle}
            address="https://docs.google.com/forms/d/e/1FAIpQLSd-lnYKXqSarbQAJk4wTK2kgH5YSufAw7wLZtbYxRbnKd2rXg/viewform?vc=0&c=0&w=1&flr=0"
          />
        )}
      </>
    );
  }, [title, description, linkStyle, hasLink]);

  if (width && width <= 768) {
    return <ContainerMobile topMobile={topMobile}>{content}</ContainerMobile>;
  }
  return (
    <ContainerDesktop position={position} align={align} isAbout={isAbout}>
      {content}
    </ContainerDesktop>
  );
};
