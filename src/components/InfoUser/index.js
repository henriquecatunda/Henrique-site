import React from "react";
import {ButtonContato} from "../Header/style";
import {Container, Avatar, Informacao, User,Titulo,Pessoal,Formacao} from './style';
import AvatarImg from '../../assets/foto2.jpg';
import Curriculo from '../../Documents/Henriquecurrículo.pdf'

function InfoUser(){


    return (

        <Container>

           <Pessoal>
             <Avatar>
                <img   src={AvatarImg} alt="gameflix"/> 
            </Avatar>

            <Informacao>

                    <Titulo>
                       Hello, I am Henrique catunda
                    </Titulo>
                    <User>
                     Graduating in Information Systems at the Federal University of Ceará (UFC) in Crateús-Ce and technician in Finance. More informal about my complementary activities and experiences, my resume follows below.
                    </User>

                    <a href={Curriculo}  target="_blank" rel="noopener noreferrer">
                    <ButtonContato> Curriculum </ButtonContato>
                     </a>

            </Informacao>
            </Pessoal>

            <Formacao>
                    <Titulo>
                       knowledge and experience
                    </Titulo>
                    <User>
                    I am currently learning Front-end development and UI-UX design, such as HTML (Semantics and Accessibility), CSS, JavaScript (ES6 / 7), ReactJs, Responsive Design.
                    </User>

            </Formacao>

        </Container>

    );
}


export default InfoUser;