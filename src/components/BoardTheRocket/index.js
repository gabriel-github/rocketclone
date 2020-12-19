import React from 'react'
import { Container, Content, ButtonSection, Button } from './style'

export default function BoardTheRocket() {
    return (
        <>
            <Container>
                <Content>
                    <h1>Evolua rápido como a tecnologia <b>.</b></h1>

                    <ButtonSection>
                        <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos</p>

                        <Button>embarcar no foguete</Button>                   
                    </ButtonSection>                    
                </Content>
            </Container>
        </>
    );
}