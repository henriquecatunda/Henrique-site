import React from 'react';
import { FooterBase } from './style';
import Contato from "../Contato/index.js";

function Footer() {
  return (
    <FooterBase>

        <Contato/>
       @ 2020 {' '}
      <a href="https://www.linkedin.com/in/henrique-catunda-1a50851ab/"  target="_blank">
       Henriquecatunda 
  </a> {' '}All rights reserved

     
    </FooterBase>
  );
}

export default Footer;