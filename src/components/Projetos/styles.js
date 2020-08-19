import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 100px ;
 background-color:var(--black);
 justify-content: center;

 @media (max-width: 600px){

  padding: 10px;
 }
 

`;

export const MyProjeto= styled.div`
  width: 75%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  padding: 10p;

  @media (max-width: 600px){

    width: 90%;
    height: auto; 
    flex-direction:column;
    margin-top: 20px;
  }
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

 @media (max-width: 600px){

    width: 90%;
    margin: auto;


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

@media (max-width: 600px){

width: 80%;
margin-right:0px;
margin: auto;

}

`;

export const Title = styled.div`
    font-weight:bold;
    width: 200px;
    font-size: 1.5rem;
    color:white;
    margin-bottom:20px;

    @media (max-width: 600px){
     
      width:auto;
      margin:auto;
      margin-top: 20px;
      margin-bottom:20px;

    }
    
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


  @media (max-width: 600px){
     
     margin-bottom:10px;

   }

`;


