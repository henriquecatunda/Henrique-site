import styled from 'styled-components';

export const Container = styled.div`

position: absolute;
width: 100%;
display: flex;
justify-content: flex-end;


`;

export const ContatoSocial = styled.div`

  position: fixed;
  width: 60.36px;
  height: 60.36px;
  //background: rgba(0, 0, 0, 0.25);;
 
  border-radius: 50%;
  margin: 35px;
  margin-top: 80vh;
  border:none!important;
  transition: opacity .3s;
 
 >button  { 

   width:100%;
   height:100%;
   text-decoration: none;
   background: rgba(0, 0, 0, 0.25);;
   display: flex;
   justify-content:center;
   align-items:center;
   border-radius: 50%;
   border:none!important;
   outline: 0;
   cursor: pointer;

 }

 > button  img {

  width: 30px;
  height: 29px;
 }

  &:hover,
  &:focus {
    opacity: .5;
    outline-style: none;

  }

  @media (max-width: 600px) {

    opacity: 0;
  }

`;