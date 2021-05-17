import styled from 'styled-components';


export const Container = styled.footer`
    width: 100%;
    height:200px;
    display: flex;
    position: relative;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin: auto;
    background: #191919;
    

    @media (max-width: 600px) {

      width: 100%;
  
   
   }
`;

export const Footer = styled.footer`

      width:88%;
      height:65px;
      display:flex;
      justify-content:space-between;
      align-items:flex-end;
      z-index: 2;
  
    @media (max-width: 600px) {

       display: block;
       height: 75px;
   
   }
`;


export const Titulo = styled.footer`



    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 35px;

    color: #1BBDC8;

   

    @media (max-width: 600px) {

   
   }
`;

export const Menu = styled.footer`

width:135px;
display: flex;
justify-content:space-between;


font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin-right: 21px;

color: #C8C4C4;



p{
  margin:0;
}

>a{ 
      text-decoration: none;
      transition: opacity .3s;
     

      &:hover,
      &:focus {
        opacity: .5;
        
}
}


    @media (max-width: 600px) {

         display:none;
     
   }
`;


export const Descricao = styled.footer`

width:250px;

font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;

color: #C8C4C4;

  

    @media (max-width: 600px) {     
   
   }
`;


export const Direitos = styled.footer`

width:auto;

font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
margin-right: 18px;

color: #C8C4C4;

@media (max-width: 600px) {

margin-top: 15px;

}

  
`;

export const CaixaContato  = styled.footer`

@media (max-width: 600px) {

display:none;

}



`;