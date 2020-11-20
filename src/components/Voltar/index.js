import React from "react";
import {Container, ContatoSocial} from './style.js';
import voltar from '../../assets/voltar.png';



function Voltar(){

  
    function transicao(){
    
       window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
       
        
    };
 
    return (

        <Container>

           <ContatoSocial>     
            <button type="button" onClick={transicao} > 
                <img   src={voltar} alt="gameflix"/> 
            </button>
          </ContatoSocial>

        </Container>
    );
}

export default Voltar;