import React from 'react';

import { Container, Content, Card } from "./style";
import { FaReact, FaGitSquare, FaJsSquare, FaPython } from "react-icons/fa";

import { purple, pink } from '../Colors/colors'

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
								<FaPython size={"1.5rem"} color={pink} />
								<FaJsSquare size={"1.5rem"} color={pink} />
								<FaGitSquare size={"1.5rem"} color={pink} />
								<FaReact size={"1.5rem"} color={pink} />
							</div>
							<button>conectar</button>
						</Card>

						<Card>
							<div className="img"></div>

							<h2>Nome</h2>
							<p>Função e local</p>

							<div className="icons">
								<FaPython size={"1.5rem"} color={purple} />
								<FaJsSquare size={"1.5rem"} color={purple} />
								<FaGitSquare size={"1.5rem"} color={purple} />
								<FaReact size={"1.5rem"} color={purple} />
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
