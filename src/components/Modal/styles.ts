import styled from "styled-components";

export const Container = styled.div<{ openModal: boolean }>`
  position: fixed;
  display: ${({ openModal }) => (openModal ? "grid" : "none")};
  place-content: center;
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(100, 100, 100, 0.7);
`;

export const ModalContainer = styled.div`
  padding: 35px;
  width: 90%;
  max-width: 500px;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  z-index: 99;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 270px;
  height: 40px;
  border: none;
  background-color: #4fc4c9;
  transition: 0.3s ease;
  color: #fff;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    &:hover {
      background-color: #ccc;
    }
  }

  &:hover {
    background-color: #3e999d;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  width: 270px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const ContainerMessage = styled.div`
  display: flex;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 20px;
  color: #4fc4c9;
`;
