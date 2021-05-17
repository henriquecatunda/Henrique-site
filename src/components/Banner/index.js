import React from "react";
import {Container, Avatar, Informacao, User,Titulo,Pessoal,SubTitulo,ButtonContato,ButtonContato2} from './style';
import Bannerimg from '../../assets/banner.png';
import Home from '../../assets/home.png';
import Servicos from "../Servicos";

function Banner(){

    return (

        <Container>

           <Pessoal>
             

            <Informacao>

                     <SubTitulo>
                       Hello, I am 
                    </SubTitulo>

                    <Titulo>
                      Henrique catunda
                    </Titulo>
                    <User>
                    Development of websites and web applications with a focus on UI-UX design
                    </User>

                    <a  href="mailto:henriquecatunda2@gmail.com" target="_blank" rel="noopener noreferrer">
                    <ButtonContato> Hire me</ButtonContato>
                     </a>

                     <a target="_blank" href="https://github.com/henriquecatunda"rel="noopener noreferrer" >
                    <ButtonContato2> GitHub </ButtonContato2>
                     </a>

            </Informacao>

            <Avatar>
                <img   src={Home} alt="gameflix"/> 
            </Avatar>

            </Pessoal>

        </Container>

    );
}


export default Banner;