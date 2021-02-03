import styled from 'styled-components';

export const Container = styled.div`
 width: 68%;
 
 padding-bottom:115px;
 margin:auto;

 h3{
     margin-bottom:30px;
     font-family: 'Roboto', sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 23.0582px;
     line-height: 27px;
     color: #22264D;

 }

`;

export const Containes = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
 grid-gap: 36px;
 margin:auto;

 @media (max-width: 600px){

   grid-template-columns: 1fr 1fr ;
   
    
}

`;

export const GridKnowledge = styled.div`

    display: flex;
    flex-direction: column;
    align-content:center;

    width: 98.96px;
    height: 98px;
    background: #1BBDC8;
    border-radius: 7.68608px;

    
`;

export const Img = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-bottom: 5px;
margin-top:10px;
    
    >img {
    width: 43px;
    height: 43px;


    }
`;

export const Title = styled.div`

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14.4114px;
line-height: 17px;
text-align:center;

color: #FFFFFF;


`;

export const Linha = styled.div`

width: 25px;
height:2px;
background-color: var(--black);
margin: auto;
margin-top: 5px;

`;

export const Descricao = styled.div`

font-weight:400;
font-size: 0.77rem;
color: gray;
text-align: center;
margin-top: 15px;

`;


