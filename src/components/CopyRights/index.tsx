import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 60px;
  background-color: #20797c;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: #000;
  }
`;

export const CopyRights = () => {
  return (
    <Container>
      <span>
        Camilla Gomes | © COPYRIGHT – 2022 | TODOS OS DIREITOS RESERVADOS
      </span>
    </Container>
  );
};
