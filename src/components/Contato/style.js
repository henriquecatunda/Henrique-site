import styled from 'styled-components';

export const Container = styled.div`

 display: flex;
 justify-content: flex-start;
 
 

`;

export const ContatoSocial = styled.div`

  margin-right: 20px;
  transition: opacity .3s;
 
 >a { text-decoration: none;
 }

 > a img {

  width: 30px;
  height: 29px;
 }

  &:hover,
  &:focus {
    opacity: .5;
  }

`;