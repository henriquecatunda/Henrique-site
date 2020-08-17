import React from "react";
import { Link} from 'react-router-dom';
import {Container, Profite, ButtonHeader, Title, SubTitle, Descricao, ButtonContato,  ButtonPortfolio,ImgHeader} from './style.js';
import Contato from "../Contato/index.js";
import headerimg from '../../assets/hea.png';


function Header(){

    return (

        <Container>

            


            <div>
                <Profite>

                    <SubTitle>Hello, I am </SubTitle>

                    <Title>Henrique Catunda </Title>

                    <Descricao>Development of websites and web applications with a focus on UI-UX design </Descricao>

                    <Contato/>

                 </Profite>

                 <ButtonHeader>
                 

                    <a href="mailto:henriquecatunda2@gmail.com"> 
                        <ButtonContato > Hire Me  </ButtonContato>
                    </a>

                    <Link to="/portfolio">
                       < ButtonPortfolio> Portfolio </ ButtonPortfolio>
                    </Link>

               </ButtonHeader>
               </div>

            <ImgHeader>
            <img   src={headerimg} alt="gameflix"/> 
            
            </ImgHeader>


        </Container>
    );
}

export default Header;