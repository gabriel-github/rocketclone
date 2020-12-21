import React from "react";
import { AiFillWarning } from "react-icons/ai";

import { Container, Content } from "./style";

function Alert() {
  return (
    <Container>
      <Content>
        <div className="icon">
          <AiFillWarning color={"yellow"} size={"3rem"} />
        </div>
        <h1>Spoiler Alert!</h1>

        <p>
          As funcionalidades serão liberadas ao longo dos próximos meses.
          Embarque porque o foguete está decolando.
        </p>

        <h4>novidades a caminho</h4>
      </Content>
    </Container>
  );
}

export default Alert;
