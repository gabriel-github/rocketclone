import React from 'react';

import { Container, Content, Card } from "./style";
import { FaReact, FaGitSquare, FaJsSquare, FaPython } from "react-icons/fa";

export default function Conection() {
  return (
    <>
      <Container>
        <Content>
          <div className="conection-card">
            <Card>
              <div className="img"></div>

              <h2>Nome</h2>
              <p>Função e local</p>

              <div className="icons">
                <FaPython size={"1.5rem"} color={"#8257a2"} />
                <FaJsSquare size={"1.5rem"} color={"#8257a2"} />
                <FaGitSquare size={"1.5rem"} color={"#8257a2"} />
                <FaReact size={"1.5rem"} color={"#8257a2"} />
              </div>
              <button>conectar</button>
            </Card>

            <Card>
              <div className="img"></div>

              <h2>Nome</h2>
              <p>Função e local</p>

              <div className="icons">
                <FaPython size={"1.5rem"} color={"#9e2a2b"} />
                <FaJsSquare size={"1.5rem"} color={"#9e2a2b"} />
                <FaGitSquare size={"1.5rem"} color={"#9e2a2b"} />
                <FaReact size={"1.5rem"} color={"#9e2a2b"} />
              </div>
              <button>conectar</button>
            </Card>
          </div>

          <div className="conection-text">
            <div></div>
            <h1>Conexão é a chave para as maiores oportunidades</h1>
            <p>
              Uma comunidade incrivel e todo o ecossistema de tecnologia na
              mesma plataforma.
            </p>
          </div>
        </Content>
      </Container>
    </>
  );
}
