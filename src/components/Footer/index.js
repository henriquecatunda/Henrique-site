import React from 'react';
import { FooterBase,Infor ,Formulario, Contatos, FooterForm,Direitos } from './style';
import Logo from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

function Footer() {
  return (
    <FooterForm>
      
    <FooterBase>

      <Infor>

        <h3> Contact </h3>
        <p> I'm looking forward to your message</p>

        <Contatos>

            <h4> My contacts:  </h4>
             
            <a  target="_blank" href="mailto:henriquecatunda2@gmail.com"rel="noopener noreferrer">    <img   src={Logo} alt="gameflix"/>   henriquecatunda2@gmail.com </a><br/><br/>
            <a  target="_blank" href="https://www.instagram.com/henriquecatunda/" rel="noopener noreferrer"> <img  src={Instagram} alt="gameflix"/>Henriquecatunda </a><br/><br/>
            <a  target="_blank" href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/" rel="noopener noreferrer"> <img  src={linkedin} alt="gameflix"/>Henriquecatunda </a><br/><br/>
            
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

    <Direitos> </Direitos>

    </FooterForm>
  );
}

export default Footer;