import React from 'react';
import InfoUser from '../components/InfoUser';
import Knowledges from '../components/Knowledges';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Redes from '../components/Redes';
import Voltar from '../components/Voltar';

function App() {
  return (
      <>
       {/* <Header/> */}
       <Menu/>
       <InfoUser/>
       <Voltar/>
       <Knowledges/>
       <Redes/>
       <Footer/>

       </>

  );
}

export default App;
