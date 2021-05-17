import React from 'react';
import InfoUser from '../components/InfoUser';
import Knowledges from '../components/Knowledges';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Redes from '../components/Redes';
import Voltar from '../components/Voltar';
import FooterFinal from '../components/FooterFinal';
import Education from '../components/Education';
import ExpericenceEducation from '../components/ExpericenceEducation';

function App() {
  return (
      <>
       {/* <Header/> */}
       <Menu/>
       <InfoUser/>
       <Knowledges/>
       <Redes/>
       <ExpericenceEducation/>
       
       <Footer/>
       <FooterFinal/>

       </>

  );
}

export default App;
