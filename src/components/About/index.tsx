import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderImage } from "../headerLogo";
import { HeaderMessage } from "../headerMessage";
import aboutImage from "../../images/aboutImage.jpg";
import aboutImageMobile from "../../images/aboutImageMobile.png";
import { Spacer } from "../spacer";

const AboutDesktop = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const About = () => {
  const { width } = useWindowSize();

  const description2 = React.useMemo(() => {
    return (
      <>
        <p>
          Eu sou extremamente orgulhosa de ter 6 anos de experiência em
          marketing médico e de ter atendido mais de 200 médicos em todo o país.
        </p>
        <p>
          Trabalhando em todas as especialidades, desenvolvi uma vasta gama de
          competências que me permitem oferecer serviços de qualidade superior
          aos meus clientes.
        </p>
        <p>
          Meu trabalho em marketing médico tem sido focado principalmente em
          ajudar médicos nas áreas de dermatologia, cirurgia plástica e outras
          especialidades. Essas áreas exigem conhecimentos específicos e
          habilidade de atender às necessidades dos pacientes de maneira eficaz.
        </p>
        <p>
          Estou ansiosa para continuar ajudando médicos em todo o país a
          alcançar seus objetivos e crescer em seus negócios.
        </p>
      </>
    );
  }, []);

  return (
    <>
      {width && width <= 768 ? (
        <>
          <HeaderImage
            isAboutMobile
            width="690px"
            height="485px"
            widthMobile="340px"
            heightMobile="240px"
            urlDesktop={aboutImage}
            urlMobile={aboutImage}
          />
          <HeaderMessage
            topMobile="20px"
            hasLink={false}
            position="unset"
            title="Sobre Camilla Gomes"
            description={description2}
          />
        </>
      ) : (
        <AboutDesktop>
          <HeaderMessage
            isAbout
            topMobile="20px"
            hasLink={false}
            position="unset"
            title="Sobre Camilla Gomes"
            description={description2}
          />
          <HeaderImage
            isAbout
            width="400px"
            height="485px"
            widthMobile="340px"
            heightMobile="240px"
            urlDesktop={aboutImage}
            urlMobile={aboutImage}
          />
        </AboutDesktop>
      )}
    </>
  );
};
