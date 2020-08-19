import styled from 'styled-components';

export const Container = styled.div`

 display: flex;
 justify-content: flex-start;
 padding: 25px 20px 0 0px;
 

`;

export const ContatoSocial = styled.div`

  margin-right: 20px;
  transition: opacity .3s;
 
 >a { text-decoration: none;
 }

 > a img {

  width: 28px;
  height: 28px;
 }

  &:hover,
  &:focus {
    opacity: .5;
  }

`;