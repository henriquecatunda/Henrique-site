import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 height:506px;
 display: flex;
 justify-content:center;
 background: #FAFAFA;
 margin:auto;
 padding-bottom: 10px;
 box-sizing: border-box;

 @media (max-width: 600px){

    display: inline-block;
    padding: 50px 10px 0 10px;
 }
`;

export const Avatar = styled.div`

    width: 50%;
    height:506px;
    display:flex;
    justify-content:left;

    >img {
       width: 94%;
       height: 100%;

    }

    @media (max-width: 600px){

        width: 80vw;
        margin: auto;

        >img {
      
            width: 100%;
        }
    }
`;

export const Informacao = styled.div`

    width:50%;
    height:506px;
    margin: auto;

    @media (max-width: 600px){

    width:80vw;
    }


`;
export const Titulo = styled.div`
    width: 507px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #020733;
    margin-bottom: 25px;
    margin-top: 120px;
`;

export const User = styled.div`

    width:468px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18.2544px;
    line-height: 21px;
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
  padding: 9px 38px;
  font-style: normal;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-left:20px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;