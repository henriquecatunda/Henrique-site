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
  width: 65%;
  height: 260px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  margin-bottom: 60px;
  padding: 10px;
  /* background-color: var(--grayMedium);
  border-radius: 8px; */
  /* transition: border-left .3s;
  &:hover,
  &:focus {
    border-left: 1px solid #E80000;
  } */


  .buttonLink{

  display: flex;
  justify-content: space-between;
}

  @media (max-width: 600px){

    width: 90%;
    height: auto; 
    flex-direction:column;
    margin-top: 20px;
  }
`;

export const Profite = styled.div`

 width: 100%;
 display: flex;
 justify-content: space-between;
 

 .info{

  width: 50%;

 }

 @media (max-width: 600px){

    width: 90%;
    margin: auto;


 }

`;

export const Img = styled.div`

width: 48%;
margin-right:30px;

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
    margin-right: 15px;

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


