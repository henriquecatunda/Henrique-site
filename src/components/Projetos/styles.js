import styled from 'styled-components';

export const Container = styled.div`

 width: 84%;
 height: auto;
 display: grid;
 grid-template-columns: 1fr 1fr;
 background-color: white;
 justify-content: space-between;
 margin: auto;
 margin-top:125px;
 

 @media (max-width: 600px){

  width:100vw;
  grid-template-columns: 1fr;

}
 

`;

export const MyProjeto= styled.div`
  width: 558px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  margin-bottom: 40px;

  a{
  text-decoration: none;
  }

  .buttonLink{

  display: flex;
  justify-content: space-between;
   }


  @media (max-width: 600px){

    width: 95%;
    height: auto; 
    flex-direction:column;
    margin-top: 20px;



    .buttonLink{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    }

  }
`;

export const Profite = styled.div`

 width: 558px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items:center;
 position: relative;


 .info{

  width: 533px;
  display: flex;
  justify-content: space-between;
 
  border-bottom: 0.961118px solid #C1C1C1;
  margin:auto;
  margin-top:10px;



 }

 @media (max-width: 600px){

    width: 100%;
    margin-bottom: 15px;
    flex-direction:column;
    align-items:center;

    .info{

     width: 100%;
    
    }
 }

`;

export const Img = styled.div`

width: 533px;
height: 346px;


display:flex;
align-items:center;
margin:auto;


>img {

    height: 100%;
}

@media (max-width: 600px){

width: 80%;
margin-right:0px;
margin: auto;

}

`;

export const Title = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight:500;
    width: auto;
    font-size: 19px;
    color: #0E1338;
    margin-bottom:6px;
    margin-left:5px;


    @media (max-width: 600px){
     
      width:auto;
      margin:auto;
      margin-top: 20px;
      margin-bottom:20px;
      text-align:center;

    }
    
`;

export const Descricao = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight:500;
    font-size: 18px;
    color: black;
    margin-bottom:6px;
    margin-right: 3px;


    @media (max-width: 600px){
     
    margin:auto;

   }

`;

export const Linguagens = styled.div`


   width: 533px;
   height: 400px;
   background-color: rgba(255, 255, 255, 0.4);
   display: flex;
   justify-content: center;
   align-items: flex-start;
   position:absolute;
   text-align:center;
   color: #0E1338;
   opacity: 0;
   margin:auto;
   padding-top: 73px;

p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight:600;
    font-size: 30px;
}


   transition: opacity .3s;

    &:hover,
    &:focus {
      opacity: 1;
    }
    


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


