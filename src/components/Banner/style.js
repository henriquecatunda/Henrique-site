import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 display: flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 background-color: white;
 margin:auto;
 padding-bottom: 10px;
 box-sizing: border-box;

 @media (max-width: 600px){

    display: inline-block;

 }
`;

export const Pessoal = styled.div`

width: 85%;
display: flex;
justify-content:center;
padding-bottom: 70px;

@media (max-width: 600px){
  
 
 flex-direction: column;
 margin: 45px auto 0;
 padding: 0;
 
}

`;

export const Avatar = styled.div`

    width: 50%;
    display: flex;
    justify-content:center ;

    >img {
       width: 523px;
       height: 491px;

    }

    @media (max-width: 600px){

        display:none;
    }
`;

export const Informacao = styled.div`

    width:50%;
    margin: auto;

    @media (max-width: 600px){

    width:100%;
    margin-top: 40px
    }


`;

export const SubTitulo = styled.div`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;

    color: #020733;

`;

export const Titulo = styled.div`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: bold;
    font-size: 57px;
    line-height: 67px;

    color: #1BBDC8;

    margin-bottom: 24px;
    margin-left:-2px;
`;

export const User = styled.div`

    width: 85%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #292929;
    margin-bottom: 39px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
    
`;

export const Formacao = styled.div`

width: 100%;

.forTEXT{

    width: 631px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18.2544px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #292929;
  

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
}
`;

export const ButtonContato2 = styled.div`

  border: 2px solid #1BBDC8;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
  border-radius: 28.0559px;


  background-color: none;
  cursor: pointer;
  padding: 8px 38px;
  font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;

  color: #1BBDC8;
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin-left: 15px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;

export const ButtonContato = styled.div`

  color: var(--white);
  background-color: #E80000;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 28.0559px;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
  
  padding: 10px 44px;
  font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;

  outline: none;
  text-decoration: none;
  display: inline-block;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }


`;