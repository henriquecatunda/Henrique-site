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
  background: #A0A0A0;
 
  border-radius: 50%;
  margin: 35px;
  margin-top: 80vh;

  transition: opacity .3s;
 
 >a { 

   width:100%;
   height:100%;
   text-decoration: none;
   display: flex;
   justify-content:center;
   align-items:center;

   &:focus{
     
    animation: { scrollTop : 0};
   }

 }

 > a img {

  width: 30px;
  height: 29px;
 }

  &:hover,
  &:focus {
    opacity: .5;
    

  }

  @media (max-width: 600px) {

    opacity: 0;
  }

`;