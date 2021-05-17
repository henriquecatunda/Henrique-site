import styled from 'styled-components';

export const Container = styled.div`

 width: 68%;
 display: flex;
 flex-direction:column;
 justify-content:center;
 background-color: white;
 margin:auto;
 padding-top:110px;
 padding-bottom: 10px;
 box-sizing: border-box;

 @media (max-width: 600px){

    display: inline-block;

 }
`;

export const Pessoal = styled.div`

width: 100%;
display: flex;
justify-content:center;
padding-bottom: 70px;

@media (max-width: 600px){

 flex-direction: column;
 padding-bottom: 45px;
}

`;

export const Avatar = styled.div`

    width: 400px;
    display: flex;
    justify-content:left;

    >img {
       width: 245px;
       
       
       margin-left:18px;
       border-radius:50%;
       box-sizing: border-box;

    }

    @media (max-width: 600px){

        width: 100%;
        margin: auto;

        >img {
            display:none;
      
           width: 200px;
           height: 200px;
           margin: auto;
        }
    }
`;

export const Informacao = styled.div`

    width:calc(100% - 400px);
    margin: auto;

    @media (max-width: 600px){

    width:100%;
    margin-top: 40px
    }


`;
export const Titulo = styled.div`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 27.5px;
    line-height: 35px;
    display: flex;
    align-items: center;
    
    color: #212121;
    margin-bottom: 20px;
`;

export const User = styled.div`

    
   font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #292929;
    margin-bottom: 30px;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
    
`;

export const Formacao = styled.div`

width: 100%;

.forTEXT{

    width: 631px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;

    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #292929;

    @media (max-width: 600px){

    width:100%;
    font-size: 1.1rem;
    }
}
`;