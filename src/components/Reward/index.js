import React from "react";

import { FaReact, FaGitSquare, FaJsSquare, FaPython } from "react-icons/fa";
import { Container, Content } from "./style";

import { pink } from '../Colors/colors'

export default function Reward() {
  return (
    <>
      <Container>
        <Content>
          <div className="Reward-text">
            <div></div>
            <h1>Conquiste novas habilidades e seja reconhecido</h1>
            <p>
              Uma jornada de aprendizado continuo, desafios e recompensas que
              vão te levar para o próximo nivel
            </p>
          </div>

          <div className="Reward-card">
            <div className="rewards">
              <FaPython size={"2rem"} color={pink} />
              <FaJsSquare size={"2rem"} color={pink} />
              <FaGitSquare size={"2rem"} color={pink} />
              <FaReact size={"2rem"} color={pink} />
            </div>
            
            <div className="reward-card-content">
              <h2>Parabéns</h2>
              <div></div>

              <h3>Você resgatou 1x recompensa</h3>
              <p>
                Continue avançando nos próximos módulos para ganhar novas
                recompensas
              </p>

              <button>continuar</button>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}
