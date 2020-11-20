import React from 'react';
import { FooterBase,Infor ,Formulario, Contatos, FooterForm,Direitos } from './style';

function Footer() {
  return (
    <FooterForm>
    <FooterBase>

      <Infor>

        <h3> Contact </h3>
        <p> I'm looking forward to your message</p>

        <Contatos>

            <h4> My contacts:  </h4>
             
           
            <a  href="/" >Telegram: @HenriqueCatunda </a><br/><br/>
            <a  target="_blank" href="mailto:henriquecatunda2@gmail.com"rel="noopener noreferrer">Email: henriquecatunda2.com </a><br/><br/>
            <a  target="_blank" href="https://www.instagram.com/henriquecatunda/" rel="noopener noreferrer">Instagram: Henriquecatunda </a><br/><br/>
            <a  target="_blank" href="https://www.behance.net/henriquecatunda" rel="noopener noreferrer">Behance: Henriquecatunda </a><br/><br/>
            <a  target="_blank" href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/" rel="noopener noreferrer">Linkedin: Henriquecatunda </a><br/><br/>
            
        </Contatos>

      </Infor>

    <Formulario>

        {/* <form action="./formulario-contato.php" method="POST"> */}
        <form>
            <div>
                <label htmlFor="nome">Name</label> <br/>
                <input type="texto" id="nome" name="Usuario" placeholder="  Your Name..."/>
            </div>
            <div>
                <label htmlFor="email">Email Address *</label><br/>
                <input type="email" id="email" name="email" placeholder="  Your Email Address..."/>
            </div>
            <div>
                <label htmlFor="texto">Message *</label><br/>
                <textarea id="texto" name="mensagem" placeholder="  Your Message..."></textarea>
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
              <a href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/"  target="_blank" rel="noopener noreferrer">
              Henriquecatunda 
              </a> {' '}All rights reserved
          </div>

    </Direitos>

    </FooterForm>
  );
}

export default Footer;