import React from "react";
import {Container, GridKnowledge , Title, Linha, Containes , Img} from './style';

import css from '../../assets/css.png';
import Reactimg from '../../assets/react.jpg';
import Node from '../../assets/nodejs.png';
import Bootstrap from '../../assets/bootstrap.png';
import Figma from '../../assets/figma.png';


function Knowledges(){

    return(
  <Container>
        <h3> Technology </h3>

        <Containes>

          <GridKnowledge>     
               <Img> <img   src={css} alt="gameflix"/>  </Img> 
                <Title>HTML</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

          <GridKnowledge>     
             <Img> <img   src={css} alt="gameflix"/>  </Img> 
                <Title>CSS</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

             <GridKnowledge>     
                  <Img>  <img   src={css} alt="gameflix"/>  </Img> 
                  <Title>JavaScript</Title>
                  <Linha/>
                  {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
            </GridKnowledge>

          <GridKnowledge>     
             <Img>   <img  src={Reactimg} alt="gameflix"/>  </Img> 
                <Title>ReactJS</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

         

          <GridKnowledge>     
             <Img> <img   src={Node} alt="gameflix"/> </Img> 
                <Title>Node</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

          <GridKnowledge>     
            <Img>  <img   src={Bootstrap} alt="gameflix"/>  </Img> 
                <Title>Bootstrap</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

          <GridKnowledge>     
               <Img><img   src={Figma} alt="gameflix"/>  </Img>
                <Title>Figma</Title>
                <Linha/>
                {/* <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao> */}
          </GridKnowledge>

          
        </Containes>
</Container>
    );

}

export default Knowledges;