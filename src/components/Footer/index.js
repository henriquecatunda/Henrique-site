import React from 'react';
import { FooterBase,Infor ,Formulario, Contatos, FooterForm,Direitos } from './style';

function Footer() {
  return (
    <FooterForm>
    <FooterBase>

      <Infor>

        <h3> Entre em contato </h3>
        <p> Estou ancioso pela sua mensagem </p>

        <Contatos>

            <h4> My contacts:  </h4>
             
           
            <a  href="/" >Telegram: @HenriqueCatunda </a><br/><br/>
            <a  target="_blank" href="mailto:henriquecatunda2@gmail.com" rel="noopener">Email: henriquecatunda2.com </a><br/><br/>
            <a  target="_blank" href="https://www.instagram.com/henriquecatunda/" rel="noopener">Instagram: Henriquecatunda </a><br/><br/>
            <a  target="_blank" href="https://www.behance.net/henriquecatunda" rel="noopener">Behance: Henriquecatunda </a><br/><br/>
            <a  target="_blank" href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/" rel="noopener">Linkedin: Henriquecatunda </a><br/><br/>
            
        </Contatos>

      </Infor>

    <Formulario>

        <form action="./formulario-contato.php" method="POST">
            <div>
                <label for="nome">Name</label> <br/>
                <input type="texto" id="nome" name="Usuario"/>
            </div>
            <div>
                <label for="email">Email Address *</label><br/>
                <input type="email" id="email" name="email"/>
            </div>
            <div>
                <label for="texto">Message *</label><br/>
                <textarea id="texto" name="mensagem"></textarea>
            </div>

            <div className="button">
                <button type="submit">Submit</button>
           </div>
       </form>  

    </Formulario>

      {/* <div className="footerInfo">
       @ 2020 {' '}
      <a href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/"  target="_blank">
       Henriquecatunda 
      </a> {' '}All rights reserved
      </div> */}
    </FooterBase>

    <Direitos>

          <div className="footerInfo">
              @ 2020 {' '}
              <a href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/"  target="_blank">
              Henriquecatunda 
              </a> {' '}All rights reserved
          </div>

    </Direitos>

    </FooterForm>
  );
}

export default Footer;