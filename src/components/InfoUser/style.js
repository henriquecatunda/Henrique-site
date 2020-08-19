import styled from 'styled-components';

export const Container = styled.div`

 width: 100%;
 display: flex;
 justify-content:center;
 background-color: white;
 padding: 50px 50px 0 50px;


 @media (max-width: 600px){

    display: inline-block;
    padding: 50px 10px 0 10px;
 }
`;

export const Avatar = styled.div`

    width: 50vw;
    display: flex;
    justify-content:center;

    >img {

       width: 70%;
       margin: auto;

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

    width: 50vw;
    margin: auto;

    @media (max-width: 600px){

    width:80vw;
    }


`;


export const User = styled.div`

    width:80%;
    font-weight:500;
    font-size: 1rem;
    color: black;
    margin-bottom: 20px;
    line-height: 23px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
    
`;
