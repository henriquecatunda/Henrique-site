import styled from 'styled-components';

export const Container = styled.div`

 margin: auto;
 display: flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin:auto;
 box-sizing: border-box;
 margin-top: 120px;

 @media (max-width: 600px){

    width:100vw;
    display: inline-block;
    height:auto;
    margin-top: 30px;
    margin-bottom: 30px;

 }
`;

export const ContainerBase = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;


    @media (max-width: 600px){

    flex-direction: column;

    }
`;

export const Servico = styled.div`
    
    width: 320px;
    height: 210px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background: #FFFFFF;
    box-shadow: 0px 0.882841px 30px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    margin: 0 25px 25px;

    @media (max-width: 600px){

    width: 85%;
    font-size: 1.1rem;
    margin: auto;
    margin-bottom: 30px;
    }
`;


export const TituloForm = styled.div`

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 15px;

    display: flex;
    align-items: center;
    justify-content:flex-end;
    text-transform: capitalize;

    color: #212121;
    margin-bottom:35px;



@media (max-width: 600px){
    width: 100%;
    margin-top: 40px;
    justify-content: center;

}
`;


export const TituloServico = styled.div`

    width:75%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
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
    height:40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;

    color: #36373A;

    @media (max-width: 600px){

    
    font-size: 1.1rem;
    width: 75%;
    }
    
`;


export const DescricaoAno = styled.footer`

  width:75%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 5px 0 10px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #B0B0B0
  
 
`;

