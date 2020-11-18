import styled from 'styled-components';


export const FooterForm = styled.footer`
    width: 68%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: auto;
    margin-top: 100px;
`;

export const FooterBase = styled.footer`
  width: 100%;
  background: white;
  padding-top: 32px;
  padding-bottom: 15px;
  color: black;
  margin: auto;
  display: flex;
  justify-content: center;
  /* .footerInfo{
    >a{
    text-decoration:none;
    }
    margin-top: 15px;
    
  } */
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const  Infor = styled.footer`
  width: 50%;
  margin: 0;
  text-align: left;

   h3 {
    
    margin:0;
    margin-bottom:15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
   
    color: #020733;

  }

  p{

    margin:0;
    font-size: 18px;
    color: #292929;
   
  }
`;

export const  Contatos = styled.footer`

  margin-top: 35px;

   h4{
        margin-bottom:15px;
        margin-top:0;
        font-size: 21px;
        color: #101010;
        font-weight: 500 ;
   }
  
     a{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      color: #292929;
      text-transform: lowercase;
      text-decoration:none;

      
     }
   
`;

export const Formulario = styled.footer`
  width: 50%;
  margin: 0;

  label {
    width: 118.45px;
    height: 16.15px;
  

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #151515;

  }

  input{
    width: 463.04px;
    height: 35px;
    margin-top:10px;
    margin-bottom:20px;

    border: 1px solid #292929;
    box-sizing: border-box;
    border-radius: 5px;

  }

  textarea{
    width: 463.04px;
    height: 110px;
    margin-top:10px;
    margin-bottom:20px;

    border: 1px solid #292929;
    box-sizing: border-box;
    border-radius: 5px;
   
  }

  .button{

    display:flex;
    justify-content: flex-end;

    button{
    width: 153.18px;
    height: 39px;
  
    background: #020733;
    border-radius: 26.5296px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
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
  
`;

export const Direitos = styled.footer`
  width: 100%;
  display:flex;
  margin-top:35px;
  justify-content:center;
  margin-bottom:30px;


  .footerInfo {
    width: 313px;
    height: 19px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    color: #292929;
    a{
    text-decoration:none;
    }
    
  }

`;

