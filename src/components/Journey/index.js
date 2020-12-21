import React from 'react';

import Courses from '../Courses'
import { Container, Content } from './style';

function journey() {
  return (
      <>
        <Container>
            <Content>
                <div className="journey-text">
                    <h1>Jornada de <br/> evolução continua</h1>
                    <p>
                        Conheça as órbitas de aprendizado
                        que vão impulsionar cada etapa da sua carreira.
                    </p>
                </div>

                <div className="journey-cards">
                    <Courses/>
                    <Courses/>
                    <Courses/>
                    <Courses/>
                </div>
            </Content>
        </Container>
      </>
  );
}

export default journey;