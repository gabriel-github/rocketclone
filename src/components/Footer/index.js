import React from "react";
import { Container, Content } from "./style";
import { IoIosRocket } from 'react-icons/io'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function index() {
  return (
    <Container>
      <Content>
        <div className="footer-sign-up">
          <h1>
            Mais de <span>200 mil devs</span> <br />
            já se conectaram.
          </h1>

          <div>
            <p>
              Embarque nesse foguete e comece a avançar agora mesmo na direção
              dos seus objetivos.
            </p>

            <button>criar minha conta</button>
          </div>
        </div>


        <div className="footer-infos">
            <div className="contact">
                <a href="/"> 
                <IoIosRocket size={'2rem'} color={'#8257e6'}/>
                rocketseat
                </a>

                <div>
                    <FaFacebookSquare size={'1.5rem'} color={'#8257e6'}/>
                    <FaInstagram size={'1.5rem'} color={'#8257e6'}/>
                    <FaTwitter size={'1.5rem'} color={'#8257e6'}/>
                    <FaYoutube size={'1.5rem'} color={'#8257e6'}/>

                    <a href="/">Central de ajuda</a>
                </div>
            </div>

            <div className="use-terms-of-use">
                <div>
                    <a href="/">Direitos autorais</a>
                    <a href="/">Termos de uso</a>
                    <a href="/">Politicas de privacidade</a>

                    <div className="boost-yourself">
                        <p>Boost yourself</p>

                        <a href="/">
                        <MdKeyboardArrowUp size={'1.5rem'} color={'#8257e6'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </Content>
    </Container>
  );
}
