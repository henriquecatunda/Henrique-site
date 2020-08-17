
import styled from 'styled-components';

const ButtonLink = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 7px 20px;
  font-style: normal;
  font-weight: bold;
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