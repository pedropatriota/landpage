import { useMemo } from "react";
import { WarnMessage } from "../warnMessage";
import { HeaderImage } from "../headerLogo";
import { HeaderMessage } from "../headerMessage";
import { Spacer } from "../spacer";
import { Card } from "../Card";
import { List } from "../list";
import { About } from "../About";
import { CopyRights } from "../CopyRights";
import headerImage from "../../images/headerImage.png";
import headerImageMobile from "../../images/headerImageMobile.png";
import subHeaderImage from "../../images/subHeaderImage.png";
import subHeaderImageMobile from "../../images/subHeaderImageMobile.png";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(13, 13, 13);
  background-image: none;
  background-position: 53.6627% 7.2121%;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: scroll;
`;

export const Template = () => {
  const description = useMemo(() => {
    return (
      <>
        <p>
          Em 30 minutos iremos traçar o plano para construir e fazer o seu
          consultório lucrar mais nos próximos 6 meses.
        </p>
        <p>
          Se você é médico, já produz conteúdo nas redes sociais e deseja ter
          uma rede digital mais lucrativa sem depender de dancinhas ou investir
          uma fortuna em agências, agende agora uma call estratégica gratuita
          comigo e meu time de especialistas.
        </p>
      </>
    );
  }, []);

  return (
    <Container>
      <WarnMessage />
      <HeaderImage urlDesktop={headerImage} urlMobile={headerImageMobile} />
      <HeaderMessage
        align="left"
        title="Sessão estratégica para você ter mais pacientes vindos das redes
        sociais."
        description={description}
      />
      <Spacer margin="20px 0" />
      <HeaderImage
        width="690px"
        height="485px"
        widthMobile="340px"
        heightMobile="240px"
        urlDesktop={subHeaderImage}
        urlMobile={subHeaderImageMobile}
      />
      <HeaderMessage
        topMobile="-20px"
        hasLink={false}
        position="unset"
        title="Pra quem é a Sessão Estratégica gratuita?"
        description={<List />}
      />
      <Spacer margin="40px 0" />
      <HeaderMessage
        hasLink={false}
        position="unset"
        title="O que você vai levar nessa sessão estratégica?"
      />
      <Card />
      <Spacer margin="40px 0" />
      <About />
      <CopyRights />
    </Container>
  );
};
