import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 height: calc(100vh - 80px);
 display: flex;
 align-items: center;
 padding: 3px 20px 0 50px;
 background-color: var(--black);

`;

export const Profite = styled.div`

 width: 45vw;
 display: flex;
 flex-direction: column;
 background-color: var(--secondary);

`;

export const ImgHeader = styled.div`

`;

export const Title = styled.div`
    font-weight:bold;
    width: 200px;
    font-size: 5.8rem;
    color:var(--white);
    
   

`;

export const SubTitle = styled.div`
    font-weight:500;
    font-size: 1.5rem;
    color: white;
    padding: 0;


`;


export const Descricao = styled.div`
    font-weight:400;
    font-size: 0.77rem;
    color: white;

`;





export const ButtonHeader = styled.div`

margin-top: 2rem;
`;

export const ButtonContato = styled.div`

color: var(--white);
  background-color: #E80000;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  margin-right: 15px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;

export const ButtonPortfolio = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 9px 38px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;
