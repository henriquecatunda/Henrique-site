import React from "react";
import {Container, ContatoSocial} from './style.js';
import voltar from '../../assets/voltar.png';



function Voltar(){

  
    function transicao(e){
        e.animate({ scrollTop : 0});
        TransitionEvent()
        return false;
    };
 
    return (

        <Container>

           <ContatoSocial>     
            <a  href="#"  > 
                <img   src={voltar} alt="gameflix"/> 
            </a>
          </ContatoSocial>

        </Container>
    );
}

export default Voltar;