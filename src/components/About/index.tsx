import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderImage } from "../headerLogo";
import { HeaderMessage } from "../headerMessage";
import aboutImage from "../../images/aboutImage.png";
import aboutImageMobile from "../../images/aboutImage.png";
import { Spacer } from "../spacer";

const AboutDesktop = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const About = () => {
  const { width } = useWindowSize();

  const description2 = React.useMemo(() => {
    return (
      <>
        <p>
          <span>Publicitária</span> de formação, atuando há mais 6 anos no
          mercado com o nicho em <span>Marketing Médico</span> através de sua
          agência, Ampliamed.
        </p>
        <p>Especializações:</p>
        <ul>
          <li>
            Monitoramento de Mídias Sociais: Planejamento, Estratégia e
            Resultados - ESPM;
          </li>
          <li>Cursos em Marketing digital na área da Saúde;</li>
          <li>Pós-graduação em marketing digital - IPAM/Porto em Portugal.</li>
        </ul>
        <Spacer margin="20px 0" />
        <p>
          Dentre todas as experiências, conhecimentos e da atuação no nicho da
          saúde há tantos anos, hoje carrego títulos, especializações e
          conhecimentos para não ser apenas uma especialista em marketing
          médico, e sim, <span>MENTORA</span> em sua área de atuação.
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
            urlMobile={aboutImageMobile}
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
            width="690px"
            height="485px"
            widthMobile="340px"
            heightMobile="240px"
            urlDesktop="https://ampliamed.com/wp-content/uploads/2022/12/03-desktop-856x476-1.png"
            urlMobile="https://ampliamed.com/wp-content/uploads/2022/12/03-mobile-280x280-1.png"
          />
        </AboutDesktop>
      )}
    </>
  );
};
