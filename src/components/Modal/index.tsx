import {
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { Check2Circle } from "@styled-icons/bootstrap/Check2Circle";

import * as Style from "./styles";

interface IModal {
  children: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, IModal>((props, ref) => {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useImperativeHandle(
    ref,
    (): any => {
      return {
        openModal() {
          return setOpenModal((prev: boolean) => !prev);
        },
      };
    },
    []
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = form;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setShowMessage(true))
      .catch((error) => alert(error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (showMessage) {
      const time = setTimeout(() => {
        setShowMessage(false);
        setForm({ name: "", email: "" });
      }, 4000);

      return () => clearTimeout(time);
    }
  }, [showMessage]);

  return (
    <Style.Container openModal={openModal} ref={modalRef}>
      <Style.ModalContainer>
        <p>
          Agradecemos pelo seu interesse! Estamos criando uma lista de espera
          para a <strong>Mentoria Médico Lucrativo</strong>, e ficaríamos
          felizes em mantê-lo(a) informado(a) sobre as atualizações. Por favor,
          deixe seu nome e endereço de e-mail abaixo para ser adicionado(a) à
          lista de espera. Entraremos em contato assim que tivermos mais
          informações. Obrigada!
        </p>

        <Style.Form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <Style.Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
          />

          <Style.Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
          />

          <div data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="mentoria_form" />
          </div>

          <Style.Button disabled={!form.name || !form.email} type="submit">
            Enviar
          </Style.Button>
          {showMessage && (
            <Style.ContainerMessage>
              <Style.Message>Formulário enviado com sucesso!</Style.Message>
              <Check2Circle width={40} fill="#4fc4c9" />
            </Style.ContainerMessage>
          )}
        </Style.Form>
      </Style.ModalContainer>
    </Style.Container>
  );
});
