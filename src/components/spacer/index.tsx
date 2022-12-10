import styled from "styled-components";

type TSpacer = {
  margin: number | string;
};

const Container = styled.div<TSpacer>`
  margin: ${({ margin }) => margin};

export const Spacer = ({ margin }: TSpacer) => {
  return <Container margin={margin} />;
};
