import styled from 'styled-components';

export const Container = styled.div`

position: absolute;
width: 100%;
display: flex;
justify-content: flex-end;

margin-bottom: -40px;

`;

export const ContatoSocial = styled.div`

  //position: fixed;
  width: 50.36px;
  height: 50.36px;
  //background: rgba(0, 0, 0, 0.25);;
 
  border-radius: 50%;
  margin: 20px;
  //margin-top: 88vh;
  border:none!important;
  transition: opacity .3s;
 
 >button  { 

   width:100%;
   height:100%;
   text-decoration: none;
   background: rgba(0, 0, 0, 0.15);;
   display: flex;
   justify-content:center;
   align-items:center;
   border-radius: 50%;
   border:none!important;
   outline: 0;
   cursor: pointer;

 }

 > button  img {

  width: 28px;
  height: 27px;
  color: #1BBDC8;
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