import styled from 'styled-components';

export const Container = styled.div`

position: absolute;
width: 100%;
display: flex;
justify-content: flex-end;


`;

export const ContatoSocial = styled.div`

  position: fixed;
  width: 65.36px;
  height: 65.36px;
  background: #3D3D3D;
  box-shadow: 0px 1.92224px 9.61118px rgba(0, 0, 0, 0.25);
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

  width: 33px;
  height: 31px;
 }

  &:hover,
  &:focus {
    opacity: .5;
    

  }

`;