import React from "react";
import { Link} from 'react-router-dom';
import {Container, Profite, ButtonHeader, Title, SubTitle, Descricao, ButtonContato,  ButtonPortfolio,ImgHeader
, MenuInfo} from './style.js';
import Contato from "../Contato/index.js";
import headerimg from '../../assets/header2.png';
import ButtonLink from '../../components/ButtonLink';

var sectionStyle = {
    backgroundImage: `url(${headerimg})`
  };

function Header(){

    return (

        <Container  style={ sectionStyle }>

                <MenuInfo>

                <Link to="/">
                About 
                </Link>

                <Link to="/portfolio">
                Portfolio
                </Link>

                <a target="_blank" href="https://github.com/henriquecatunda"> 
                
                <ButtonLink >  GitHub   </ButtonLink>
                </a>


                </MenuInfo>


            <div>
                <Profite>

                    <SubTitle>Hello, I am </SubTitle>

                    <Title>Henrique Catunda </Title>

                    <Descricao>Development of websites and web applications with a focus on UI-UX design </Descricao>

                    <Contato/>

                 </Profite>

                 <ButtonHeader>
                 

                    <a href="mailto:henriquecatunda2@gmail.com"> 
                        <ButtonContato > Hire Me  </ButtonContato>
                    </a>

                    <Link to="/portfolio">
                       < ButtonPortfolio> Portfolio </ ButtonPortfolio>
                    </Link>

               </ButtonHeader>
               </div>

            {/* <ImgHeader>

            <img   src={headerimg2} alt="gameflix"/> 
            
            </ImgHeader> */}


        </Container>
    );
}

export default Header;