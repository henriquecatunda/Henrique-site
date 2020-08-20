import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid white;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 15px;
  color: var(--white);
  text-align: center;
  font-size: 0.7rem;


  .footerInfo{
    >a{
    text-decoration:none;
    }
    margin-top: 15px;
    
  }

  
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;