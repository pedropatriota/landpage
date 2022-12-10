import styled from "styled-components";

type TContainer = {
  width: number | string;
  height: number;
  font: number;
};

interface ILink extends TContainer {
  title: string;
  address: string;
}

const LinkContainer = styled.div<TContainer>`
  margin-top: 50px;
  min-width: 359.551px;
  max-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #4fc4c9;
  color: #000;
  font-size: ${({ font }) => font}px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  cursor: pointer;

  :hover {
    background-color: #3e999d;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    color: #000;
    font-weight: 500;
  }
`;

export const Link = ({ title, address, width, height, font }: ILink) => {
  return (
    <LinkContainer width={width} height={height} font={font}>
      <a href={address} target="_blank" rel="noreferrer">
        {title}
      </a>
    </LinkContainer>
  );
};
