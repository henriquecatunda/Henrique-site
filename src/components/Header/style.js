import styled from 'styled-components';
import headerimg2 from '../../assets/header.png';

export const Container = styled.div`

 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 0 40px 50px 60px;
 background-color: var(--black);
 background-size: cover;

 @media (max-width: 600px){
    width:100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

  
}

`;

export const Profite = styled.div`

 width: 45vw;
 display: flex;
 flex-direction: column;
 background-color: var(--secondary);
 margin-top: 50px;

 @media (max-width: 600px){

  width: 90vw;
  margin-top: 30px;

 }

`;

// export const ImgHeader = styled.div`

// >img {

  
// }



// @media (max-width: 600px){

//   >img {
     
//     width: 70vw;
//     margin-top:20px;
//   }
// }
// `;

export const Title = styled.div`
    font-weight:bold;
    width: 200px;
    font-size: 5.5rem;
    color:var(--white);
    font-family: 'Montserrat', sans-serif;



    @media (max-width: 600px){
      font-size: 3.8rem;


    }
    
   

`;

export const SubTitle = styled.div`
    font-weight:500;
    font-size: 1.5rem;
    color: white;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

   
`;


export const Descricao = styled.div`
    width: 65%;
    font-weight:400;
    font-size: 0.9rem;
    color: white;

    
    @media (max-width: 600px){
      width: 80vw;
      font-size: 1rem;


    }

`;


export const ButtonHeader = styled.div`
  margin-top: 2rem;
`;

export const ButtonContato = styled.div`

color: var(--white);
  background-color: #E80000;
  box-sizing: border-box;
  cursor: pointer;
  padding: 11px 40px;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  margin-right: 15px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }


`;

export const ButtonPortfolio = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 9px 38px;
  font-style: normal;
  /* font-weight: bold; */
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

`;

export const MenuInfo = styled.div`

    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center; 

     >a{ margin-right: 25px;
      font-weight: 500;
      font-size: 15px;
      text-decoration: none;
      transition: opacity .3s;
      padding: 7px 10px;

      &:hover,
      &:focus {
        opacity: .5;
      }

     }

     @media (max-width: 600px){

     color: rgb(238, 238, 238);
     justify-content: center;

     }

`;