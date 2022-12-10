import { Fragment } from "react";
import { GlobalStyle } from "./globalStyle";
import { Template } from "./components/template";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Template />
    </Fragment>
  );
}
