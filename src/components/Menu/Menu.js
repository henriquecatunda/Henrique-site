import styled from 'styled-components';



export const Containe = styled.div`

    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  
    
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background: var(--black);
    color: rgb(238, 238, 238);

    @media (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;
    justify-content: center;

    }
`;


export const MenuInfo = styled.div`

     >a{ margin-right: 25px;
      font-weight: 500;
      font-size: 14px;
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
