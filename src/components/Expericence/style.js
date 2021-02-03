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
      margin-top: 50px;
   
   }
`;

export const FooterBase = styled.footer`
  width: 75%;
  padding-top: 32px;
  padding-bottom: 15px;
  color: black;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 600px) {
    margin-bottom: 0;
    width:90%;
    flex-direction:column;
  }
`;

export const  Banner = styled.footer`
  width: 48%;
  margin: 0;
  text-align: left;

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-transform: capitalize;
    color: #22264D;
    margin-top:0;

  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom:40px;

    h3 {

      width: 95%;
    margin: auto;
    margin-bottom: 25px;
    }
    
  }

`;

export const  Infor = styled.footer`
  width: 100%;
  height: 620px;
  margin: 0;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  ul{
   
    list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 10 10"><circle fill="red" cx="7" cy="7" r="2"/></svg>');

  }

  @media (max-width: 600px) {
    
    width: 95%;
    margin:auto;
    
  }
`;


export const Esperiencias = styled.footer`
  width: 100%;
  height: 620px;
  margin: 0;
  background: #FFFFFF;
  box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  ul{
    margin-bottom:17px;
    list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 10 10"><circle fill="red" cx="7" cy="7" r="2"/></svg>');

  }
  
  @media (max-width: 600px) {

    width: 95%;
    margin:auto;

    
  }
  
`;

export const Titulo = styled.footer`
  width: 325px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #3A3A3A;


`;

export const Ano = styled.footer`
  width: 328px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin: 10px 0 6px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #B0B0B0
  
 
`;

export const Descricao = styled.footer`
 width: 328px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 21px;

display: flex;
align-items: center;
text-transform: lowercase;

color: #202020;
  
`;



