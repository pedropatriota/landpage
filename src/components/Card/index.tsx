import React from "react";
import styled from "styled-components";
import { TbFileCheck } from "react-icons/tb";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  gap: 20px;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fdecd0;
  border-radius: 3px;
  max-width: 200px;
  min-height: 250px;
  overflow: hidden;
  transition: 0.2s linear;

  &:hover {
    scale: 1.1;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 1.3;
    text-align: left;
    letter-spacing: 0px;

    span {
      font-weight: bold;
      color: #20797c;
    }
  }
`;

export const Card = () => {
  return (
    <Container>
      <CardContainer>
        <TbFileCheck size="50" color="#20797C" />
        <p>
          <span>Briefing inicial</span>, vamos fazer um levantamento do momento
          atual do seu ambiente digital.
        </p>
      </CardContainer>
      <CardContainer>
        <HiOutlineSearchCircle size="50" color="#20797C" />
        <p>
          <span>Analise do seu perfil </span> das redes sociais.
        </p>
      </CardContainer>
      <CardContainer>
        <MdOutlineTipsAndUpdates size="50" color="#20797C" />
        <p>
          <span>Sugestões práticas</span> para seu negócio digital subir de
          nível.
        </p>
      </CardContainer>
      <CardContainer>
        <BsGraphUp size="50" color="#20797C" />
        <p>
          Apresentação de um{" "}
          <span>plano de crescimento digital lucrativo.</span>
        </p>
      </CardContainer>
    </Container>
  );
};
