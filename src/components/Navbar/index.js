import React from "react";
import { Container, Content, Button } from "./style";
import { IoIosRocket } from 'react-icons/io'

export default function Navbar() {
  return (
    <Container>
      <Content>
        <a href="/" name="topo">
          <IoIosRocket size={'2rem'} color={'#8257e6'}/>
          <h1>rocketclone</h1>
        </a>

        <Button>Entrar</Button>
      </Content>
    </Container>
  );
}
