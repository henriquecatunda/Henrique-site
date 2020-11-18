import styled from 'styled-components';



export const Containe = styled.div`

    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background:white;
    color: black;

    @media (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;
    justify-content: center;

    }
`;

export const Home = styled.div`

transition: opacity .3s;

> a img {

width: 51px;
height: 51px;
}

&:hover,
  &:focus {
    opacity: .5;
  }

`;

export const MenuInfo = styled.div`

      width:260px;
      text-align:center;

     >a{ margin-right: 25px;
      font-weight: 500;
      font-size: 17px;
      text-decoration: none;
      transition: opacity .3s;
      padding: 7px 10px;

      &:hover,
      &:focus {
        opacity: .5;
      }

      @media (max-width: 600px){

        padding: 5px 5px;
        margin-right: 15px;
        margin-left:15px;
      }


     }
`;
