import styled from 'styled-components';



export const Containe = styled.div`

    width: 85%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
  
    background:white;
    color: black;

    @media (max-width: 600px){
      width:90%;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: space-between;

    }
`;

export const Home = styled.div`

transition: opacity .3s;
display:none;

> a img {

width: 51px;
height: 51px;
}

&:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 600px){
    display: block;

    > a img {

    width: 41px;
    height: 41px;
    }
       
  }

`;

export const MenuInfo = styled.div`

      width:226px;
      text-align:right;

     >a{ margin-right: 0;
      margin-left: 38px;
      font-weight: 500;
      font-size: 17px;
      text-decoration: none;
      transition: opacity .3s;
      padding: 7px 0px;

      &:hover,
      &:focus {
        opacity: .5;
        
      }

      @media (max-width: 600px){
       
        padding: 5px 5px;
        margin-left:15px;
        margin-right: 0;
      }


     }

     @media (max-width: 600px){
      text-align:right;
     }
`;
