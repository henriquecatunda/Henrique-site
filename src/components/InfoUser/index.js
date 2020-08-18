import React from "react";
import {ButtonContato} from "../Header/style";
import {Container, Avatar, Informacao, User} from './style';
import AvatarImg from '../../assets/avatar.jpg';

function InfoUser(){


    return (

        <Container>


             <Avatar>
                <img   src={AvatarImg} alt="gameflix"/> 
            </Avatar>


            <Informacao>

                    <User>
                    Hello, I'm Henrique Catunda, Student of Information Systems at the Federal University of Ceará (UFC).
                     <br/> <br/>
                     Currently developing skills focused on the Front-End area,
                        such as HTML (Semantics and Accessibility), CSS (Stylus, animations and 3D elements)
                     , JavaScript (ES6 / 7), React, Responsive Design, UI-UX Design.
                    </User>

                    <a href="https://drive.google.com/file/d/1ek6MC0SXbEJxpPHCkNZn5SHLENK6rFAo/view?usp=sharing"  target="_blank" >
                    <ButtonContato> Curriculo </ButtonContato>
                     </a>
            </Informacao>


        </Container>

    );
}


export default InfoUser;