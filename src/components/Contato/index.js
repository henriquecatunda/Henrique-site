import React from "react";
import {Container, ContatoSocial} from './style.js';
import Logo from '../../assets/mail.png';
import GitHub from '../../assets/github.png';
import Behance from '../../assets/behance.png';
import linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';


function Contato(){


    return (

        <Container>

           <ContatoSocial>     
            <a  target="_blank" href="mailto:henriquecatunda2@gmail.com" rel="noopener noreferrer" > 
                <img   src={Logo} alt="gameflix"/> 
            </a>
          </ContatoSocial>

          <ContatoSocial>     
            <a  target="_blank" href="https://github.com/henriquecatunda"rel="noopener noreferrer"> 
                <img src={GitHub} alt="gameflix"/> 
            </a>
          </ContatoSocial>

          <ContatoSocial>     
            <a  target="_blank" href="https://www.behance.net/henriquecatunda"  rel="noopener noreferrer"> 
                <img src={Behance} alt="gameflix"/> 
            </a>
          </ContatoSocial>

          <ContatoSocial>     
            <a  target="_blank" href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/" rel="noopener noreferrer"> 
                <img  src={linkedin} alt="gameflix"/> 
            </a>
          </ContatoSocial>

          <ContatoSocial>     
            <a  target="_blank" href="https://www.instagram.com/henriquecatunda/" rel="noopener noreferrer"> 
               <img  src={Instagram} alt="gameflix"/> 
            </a>
          </ContatoSocial>

        </Container>
    );
}

export default Contato;