import React from "react";

import { FaReact, FaGitSquare, FaJsSquare, FaPython } from "react-icons/fa";
import { Container, Content } from "./style";

import { pink } from "../Colors/colors";

export default function Reward() {
  return (
    <>
      <Container>
        <Content>
          <div className="Dev-card">
          </div>

          <div className="Dev-text">
            <div></div>
            <h1>Devs melhores, aplicações melhores, um mundo melhor</h1>
            <p>
            Uma experiência com propósito para impulsionar sua carreira e transformar o mundo.
            </p>
          </div>
        </Content>
      </Container>
    </>
  );
}
