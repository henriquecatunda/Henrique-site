import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 100px ;
 background-color:var(--black);
 justify-content: center;

`;

export const MyProjeto= styled.div`
  width: 75%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  padding: 10p;
`;

export const Profite = styled.div`

width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;

 .buttonLink{

  display: flex;
  justify-content: flex-end;
 }

`;

export const Img = styled.div`

width: 42%;
margin-right:20px;

display:flex;
align-items:center;


>img {

    width: 100%;
    height: 100%;
}

`;

export const Title = styled.div`
    font-weight:bold;
    width: 200px;
    font-size: 1.5rem;
    color:white;
    margin-bottom:20px;
    
   

`;

export const Descricao = styled.div`
    font-weight:400;
    font-size: 0.8rem;
    color: whitesmoke ;
    margin-bottom:10px;

`;

export const Linguagens = styled.div`

margin: 10px 0 10px 0;

`;

export const ButtonTec = styled.div`
  color: #C8C8C8;
  border: 1px solid #AEAEAE;
  background-color: var(--black);
  box-sizing: border-box;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  outline: none;
  margin-right:5px;
  display: inline-block;

`;


