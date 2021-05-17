import styled from 'styled-components';


export const FooterForm = styled.footer`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: auto;
    margin-top: 100px;
    position: relative;

    @media (max-width: 600px) {

      width: 100%;
      margin-top: 20px;
   
   }
`;

export const FooterBase = styled.footer`
  width: 75%;
  height:500px;
  background: #1BBDC8;
  border-radius: 25px;
  padding-top: 32px;
  padding-bottom: 15px;
  color: black;
  margin: auto;
  display: flex;
  justify-content: center;
  z-index: 1;

  /* .footerInfo{
    >a{
    text-decoration:none;
    }
    margin-top: 15px;
    
  } */
  @media (max-width: 600px) {

    width: 88%;
    height:auto;
    margin-bottom: 0;
    flex-direction:column;
  }
`;

export const  Infor = styled.footer`
  width: 45%;
  margin: 0;
  text-align: left;
  padding-left: 90px;
  padding-top: 40px;

   h3 {
    
    font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
/* or 176% */
margin-top:0;
display: flex;
align-items: center;
text-transform: uppercase;

color: #FFFFFF;

  }

  p{

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* or 192% */

  display: flex;
  align-items: center;
  color: #FFFFFF;
   
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
    width: 100%;
    padding-left: 35px;
    padding-top: 10px;

    
  }
`;

export const  Contatos = styled.footer`

  margin-top: 35px;

   h4{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;
    /* or 192% */

    display: flex;
    align-items: center;
    color: #FFFFFF;
   }
  
     a{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15.5px;
      color: #292929;
      text-transform: lowercase;
      text-decoration:none;
      color: #FFFFFF;

      img {
        filter: invert(1);
        width: 24px;
        height: 22px;
        margin-right: 8px;
        margin-bottom: -5.1px;
      }
      
     }

     @media (max-width: 600px) {

      h4{
        margin-bottom:15px;
        margin-top:0;
        font-size: 21px;
        color: #101010;
        font-weight: 500 ;
       }

       display:none;
  
    }
   
`;

export const Formulario = styled.footer`
  width: 55%;
  margin: 0;
  padding-right: 90px;
  padding-top: 40px;

  label {
    width: 118.45px;
    height: 16.15px;
  

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #FFFFFF;

  }

  input{
    width: 100%;
    height: 35px;
    margin-top:10px;
    margin-bottom:20px;

    background: rgba(249, 249, 249, 0.12);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;
  color: white;

  ::-webkit-input-placeholder {
   color: rgba(255, 255, 255, 0.65);
}

:-moz-placeholder { /* Firefox 18- */
   color: rgba(255, 255, 255, 0.65);
}

::-moz-placeholder {  /* Firefox 19+ */
   color: rgba(255, 255, 255, 0.65);  
}

:-ms-input-placeholder {  
   color: rgba(255, 255, 255, 0.65);
}


  }

  textarea{
    width: 100%;
    height: 110px;
    margin-top:10px;
    margin-bottom:20px;

    background: rgba(249, 249, 249, 0.12);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;

  ::-webkit-input-placeholder {
   
   color: rgba(255, 255, 255, 0.65);
}

:-moz-placeholder { /* Firefox 18- */
  
   color: rgba(255, 255, 255, 0.65);
}

::-moz-placeholder {  /* Firefox 19+ */
  
   color: rgba(255, 255, 255, 0.65); 
}

:-ms-input-placeholder {  

   color: rgba(255, 255, 255, 0.65); 
}
   
  }

  .button{

    display:flex;
    width:100%;
    justify-content: flex-end;

    button{
    width: 153.18px;
    height: 39px;
  
    background: #FE4849;
    border-radius: 26.5296px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;

    color: #FFFFFF;
    cursor: pointer;
    border: 0;

    &:hover,
    &:focus {
      opacity: .5;
    }
    }

  }

  @media (max-width: 600px) {

    width: 80%;
    margin:auto;
    display: block;
    padding-right: 0px;
    padding-bottom:12px;
    padding-top: 10px;

    
    label {
    width: 100%;
    height: 16.15px;
  
  }

  input{
    width: 100%;
    height: 35px;

  }

  textarea{
    width: 100%;
    height: 110px;
  
  }

    
  }
  
`;

export const Direitos = styled.footer`

  width: 100%;
  position: absolute;
  height: 90px;
  display:flex;
  justify-content:center;
  background: #191919;
  bottom:0;
  



`;

