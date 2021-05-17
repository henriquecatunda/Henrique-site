import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Projetos from '../components/Projetos'
import Banner from '../components/Banner';
import FooterFinal from '../components/FooterFinal';
import Servicos from '../components/Servicos';
import Experience from '../components/Expericence';

function Portfolio() {
    return (
        <>
         <Menu/>
         <Banner/>
         <Projetos/>
         <Experience/>
         <Servicos/>
         <FooterFinal/>
         
         </>
    );
  }
  
  export default Portfolio;
  