import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 display: flex;
 position: relative;
 justify-content:center;
 margin:auto;
 box-sizing: border-box;
 margin-bottom:150px;
 margin-top: 110px;

 .imgfundo{
      
        position:absolute;
        top: 75px;
        

    }

 @media (max-width: 600px){

    display: inline-block;
    height:auto;
    margin-top: 30px;
    margin-bottom: 30px;


    .imgfundo{
      
      position:absolute;
      display:none;
      width: 100%;
      top: 75px;

  }
 }
`;

export const Avatar = styled.div`

    width: 50%;
    display:flex;
    flex-direction:column;
    justify-content:left;
    align-items: flex-end;
    z-index:1;


    @media (max-width: 600px){

        width: 100%;
        height: auto;

    }
`;

export const Informacao = styled.div`

    width:50%;
    display:flex;
    flex-direction:column;
    z-index:1;


    @media (max-width: 600px){

    width:85%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: auto;

    }


`;
export const Titulo = styled.div`
    width: 390px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;

    display: flex;
    align-items: center;
    justify-content:flex-end;
    text-transform: capitalize;

    color: #020733;
    margin-bottom:15px;



    @media (max-width: 600px){
        width: 100%;
        margin-top: 40px;
        justify-content: center;

    }
`;

export const User = styled.div`

    width:390px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    display: flex;
    align-items: center;
    justify-content:flex-end;
    text-transform: lowercase;
    color: #000000;
    padding-left:71px;

    @media (max-width: 600px){

    width:85%;
    font-size: 1.1rem;
    justify-content:center;
    margin: auto;
    padding: 0;
    }
    
`;

export const Servico = styled.div`

    width: 340px;
    height: 330px;

    background: #FFFFFF;
    box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 0 28px 58px;

    @media (max-width: 600px){

    width: 370px;
    font-size: 1.1rem;
    margin: auto;
    margin-bottom: 30px;
    }
    
`;

export const Descricao = styled.div`

    width:65%;
    margin-bottom: 80px;
    display:flex;
    flex-direction:column;
    margin-top: 60px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    margin-top: 10px;
    }
    
`;

export const ButtonPortfolio = styled.button`
  color: #020733;
  border: 2.3px solid #020733;
  background-color: #FAFAFA;
  box-sizing: border-box;
  cursor: pointer;
  padding: 8.8px 43px;
  font-style: normal;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-left:8px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;



export const Img = styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 64px;
    margin-bottom:25px;

    img {
        width:67px;
        height:67px;
    }

    @media (max-width: 600px){

    }
    
`;

export const TituloServico = styled.div`

    width:100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 39px;
    /* or 146% */

    display: flex;
    align-items: center;
    justify-content:center;

    color: #36373A;
    margin-bottom: 10px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
    
`;

export const DescricaoServico = styled.div`

    width:75%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    display: flex;
    align-items: center;
    justify-content:center;
    margin:auto;

    color: #000000;

    @media (max-width: 600px){

    
    font-size: 1.1rem;
    width: 75%;
    }
    
`;
