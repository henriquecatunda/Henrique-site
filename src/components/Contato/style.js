import styled from 'styled-components';

export const Container = styled.div`

 display: flex;
 justify-content: flex-start;
 
 @media (max-width: 600px){

   opacity: 1;
   position:absolute;
   margin-top: 130px;
   width: 90%;
   margin-left: 29px;
 }

`;

export const ContatoSocial = styled.div`

  margin-right: 20px;
  transition: opacity .3s;
 
 >a { text-decoration: none;
 }

 > a img {

  width: 25px;
  height: 23px;
 }

  &:hover,
  &:focus {
    opacity: .5;
  }

`;