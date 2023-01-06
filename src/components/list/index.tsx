import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const Container = styled.ul`
  list-style: none;
  li {
    color: rgb(189, 189, 189);
    text-align: left;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: flex-start;

    &:hover {
      .icon {
        transition: 0.5s;
        color: #4fc4c9;
      }
    }

    div {
      max-width: 20px;
      max-height: 20px;
      min-width: 20px;

      .icon {
        font-size: 20px;
      }
    }

    p {
      margin-left: 10px;
    }
  }
`;

export const List = () => {
  return (
    <Container>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>
          Médicos que já produzem conteúdo e desejam aumentar significativamente
          o seu faturamento através do seu posicionamento no meio digital;
        </p>
      </li>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>
          Médicos que não obtiveram o reconhecimento esperado dentro da rede
          social;{" "}
        </p>
      </li>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>Médicos que desejam ter autoridade no meio digital;</p>
      </li>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>Médicos que desejam ter mais praticidade em rede social;</p>
      </li>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>Médicos que não querem depender de plano de saúde;</p>
      </li>
      <li>
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <p>Médicos Que desejam aumentar valor de consulta;</p>
      </li>
    </Container>
  );
};
