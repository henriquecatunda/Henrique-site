import React from 'react';
import Voltar from '../Voltar';
import { Container,Footer,Titulo, Menu, Descricao,Direitos,CaixaContato } from './style';
import Contato from "../Contato/index.js";
import { Link} from 'react-router-dom';
function FooterFinal() {
  return (
    <Container>

      <Footer>

        <Titulo> Henrique Catunda</Titulo>

        <Menu>
            <Link to="/">
              <p>
                 Portfolio
              </p>
             </Link>

             <Link to="/About">
               <p>
                   About 
               </p>
             </Link> 
        </Menu>

      </Footer>

      <Footer>

          <Descricao>
          Development of websites and web applications with a focus on UI-UX design

          </Descricao>

          <Direitos>
          @ 2020 Henriquecatunda All rights reserved

          </Direitos>
         
         <CaixaContato>
           <Contato />
         </CaixaContato>

      </Footer>
      
      <Voltar/>
    </Container>
  );
}

export default FooterFinal;