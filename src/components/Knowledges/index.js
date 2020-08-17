import React from "react";
import {Container, gridKnowledge , Title, Linha, Descricao , Img} from './style';
import Html from '../../assets/html.jpg';
import css from '../../assets/css.jpg';
import JS from '../../assets/js.jpg';
import Reactimg from '../../assets/react.jpg';
import Node from '../../assets/node.jpg';
import Bootstrap from '../../assets/bootstrap.jpg';
import Design from '../../assets/design.jpg';


function Knowledges(){

    return(

        <Container>

          <gridKnowledge>     
               <Img> <img   src={Html} alt="gameflix"/>  </Img> 
                <Title>HTML</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

          <gridKnowledge>     
             <Img> <img   src={css} alt="gameflix"/>  </Img> 
                <Title>CSS</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

             <gridKnowledge>     
                  <Img>  <img   src={JS} alt="gameflix"/>  </Img> 
                  <Title>JavaScript</Title>
                  <Linha/>
                  <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
            </gridKnowledge>

          <gridKnowledge>     
             <Img>   <img  src={Reactimg} alt="gameflix"/>  </Img> 
                <Title>ReactJS</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

         

          <gridKnowledge>     
             <Img> <img   src={Node} alt="gameflix"/> </Img> 
                <Title>Node</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

          <gridKnowledge>     
            <Img>  <img   src={Bootstrap} alt="gameflix"/>  </Img> 
                <Title>Bootstrap</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

          <gridKnowledge>     
               <Img><img   src={Design} alt="gameflix"/>  </Img>
                <Title>Design UI/UX</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

          <gridKnowledge>     
                <Img><img   src={Reactimg} alt="gameflix"/> </Img> 
                <Title>React-Native</Title>
                <Linha/>
                <Descricao>hhhhhhhhhhhhhhhhhhh</Descricao>
          </gridKnowledge>

        </Container>
    );

}

export default Knowledges;