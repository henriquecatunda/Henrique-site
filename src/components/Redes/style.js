import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 height:506px;
 display: flex;
 justify-content:center;
 background: #FAFAFA;
 margin:auto;
 box-sizing: border-box;

 @media (max-width: 600px){

    display: inline-block;
    height:auto;
 }
`;

export const Avatar = styled.div`

    width: 50%;
    height:100%;
    display:flex;
    justify-content:left;
    align-items: flex-end;

    >img {
       width: 95%;
       height: 95%;
      

    }

    @media (max-width: 600px){

        width: 100%;
        height: auto;

        >img {
      
            width: 100%;
            height: 290px;
            display:none;
        }
    }
`;

export const Informacao = styled.div`

    width:50%;
    height:506px;
    margin: auto;

    @media (max-width: 600px){

    width:85%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom: 30px;

    }


`;
export const Titulo = styled.div`
    width: 507px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #212121;
    margin-bottom: 25px;
    margin-top: 120px;

    @media (max-width: 600px){
        width: 100%;
        margin-top: 40px;

    }
`;

export const User = styled.div`

    width:468px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    font-style: normal;
    display: flex;
    align-items: center;

    color: #292929;
    margin-bottom: 50px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
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
