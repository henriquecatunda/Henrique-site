import styled from 'styled-components';

export const Container = styled.div`
width: 80%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-gap: 50px;
 padding: 50px 50px 100px 50px ;
 margin:auto;



`;

export const gridKnowledge = styled.div`

    display: flex;
    flex-direction: column;
    align-content:center;
    margin-bottom:10rem;


    
`;

export const Img = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-bottom: 15px;
 
>img {
width: 50px;
height: 50px;


}


`;


export const Title = styled.div`

font-weight:600;
font-size: 0.9rem;
color: black;
text-align: center;


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


