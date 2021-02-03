import React from "react";
import {ButtonContato} from "../Header/style";
import {Container, Avatar, Informacao, User,Titulo,ButtonPortfolio } from './style';
import fundo from '../../assets/fundotec.png';

function InfoUser(){


    return (

        <Container>
 
             <Avatar>
                <img   src={fundo} alt="gameflix"/> 
            </Avatar>

            <Informacao>

                    <Titulo>
                       Development of websites and web applications with a focus on UI-UX design
                    </Titulo>
                    <User>
                       Design, build and optimize the interfaces of a web project, efficient and satisfactory solutions for its users
                    </User>

                    <div>
                    <a href="https://www.behance.net/henriquecatunda"  target="_blank" rel="noopener noreferrer">
                    <ButtonContato> Behance </ButtonContato>
                     </a>

                     <a href="https://github.com/henriquecatunda"  target="_blank" rel="noopener noreferrer" >
                     < ButtonPortfolio> Github </ ButtonPortfolio>
                     </a>
                    </div>

            </Informacao>
        
        </Container>

    );
}


export default InfoUser;