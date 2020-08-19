
import styled from 'styled-components';

const ButtonLink = styled.button`
  color: black;
  border: 2px solid black;
  background-color: var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 7px 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  >a{
    text-decoration: none;
  }
`;

export default ButtonLink;