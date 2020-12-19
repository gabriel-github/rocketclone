import React from 'react';
import { FaSmileBeam, FaSmileWink, FaSmile } from 'react-icons/fa'
import { RiUserSmileFill, RiChatSmile2Fill } from 'react-icons/ri'

import { Container, Content } from './style';

function Sponsors() {
  return (
      <Container>
          <Content>
              <h1>Empresas que confiam no nosso trabalho</h1>

              <div>
                <FaSmileBeam color={'#a8a8b3'} size={'2rem'}/>
                <FaSmileWink color={'#a8a8b3'} size={'2rem'}/>
                <FaSmile color={'#a8a8b3'} size={'2rem'}/>
                <RiUserSmileFill color={'#a8a8b3'} size={'2rem'}/>
                <RiChatSmile2Fill color={'#a8a8b3'} size={'2rem'}/>
              </div>
          </Content>
      </Container>
  );
}

export default Sponsors;