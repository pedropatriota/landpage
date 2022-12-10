import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background-color: #20797c;
  color: #fff;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    color: #4fc4c9;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 24px;
  }
`;
