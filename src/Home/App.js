import React from 'react';
import InfoUser from '../components/InfoUser';
import Knowledges from '../components/Knowledges';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Redes from '../components/Redes';
import Voltar from '../components/Voltar';
import FooterFinal from '../components/FooterFinal';
import Experience from '../components/Expericence';

function App() {
  return (
      <>
       {/* <Header/> */}
       <Menu/>
       <InfoUser/>
       <Knowledges/>
       <Redes/>
       <Experience/>
       <Footer/>
       <FooterFinal/>

       </>

  );
}

export default App;
