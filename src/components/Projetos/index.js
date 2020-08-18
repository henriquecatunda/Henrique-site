import React from 'react';
import Proffy from '../../assets/projetos/proffy.png'
import Gamedev from '../../assets/projetos/gamedev.png'
import Ecoleta from '../../assets/projetos/ecoleta.png'
import Discord from '../../assets/projetos/discord.png'
import {Container, MyProjeto, Img, Profite,Title, Descricao, Linguagens, ButtonTec} from './styles';
import {ButtonContato }from '../../components/Header/style'


function Portfolio(){

    return(

        <Container>

            <MyProjeto>

                <Img> <img   src={Proffy} alt="gameflix"/>   </Img>

                <Profite>
                   
                    <Title>Proffy </Title>

                    <Descricao>Web version of the distance learning platform to connect teachers and students.</Descricao>
                    
                    <Linguagens>  <ButtonTec>Expo </ButtonTec>  <ButtonTec>Node.js</ButtonTec>   <ButtonTec>React</ButtonTec>  <ButtonTec>TypeScript </ButtonTec>  <ButtonTec>StyledComponents </ButtonTec> </Linguagens>
                   
                    <div className="buttonLink">

                    <a href="https://github.com/henriquecatunda/Proffy-Web"  target="_blank"> 
                        <ButtonContato >  Ver Projeto </ButtonContato>
                    </a>
    
                    </div>
                 </Profite>

            </MyProjeto>

            <MyProjeto>

                <Img> <img   src={Gamedev} alt="gameflix"/>   </Img>

                <Profite>
                   
                    <Title>GameDev </Title>

                    <Descricao>Video platform aimed at the gamer community - dissemination and sharing of gamerplay videos. Developed in React</Descricao>
                    
                    <Linguagens>  <ButtonTec>Expo </ButtonTec>  <ButtonTec>Node.js</ButtonTec>   <ButtonTec>React</ButtonTec>  <ButtonTec>TypeScript </ButtonTec>  <ButtonTec>StyledComponents </ButtonTec> </Linguagens>
                   
                    <div className="buttonLink">

                    <a href="https://github.com/henriquecatunda/gameflix"  target="_blank"> 
                        <ButtonContato >  Ver Projeto </ButtonContato>
                    </a>
    
                    </div>
                 </Profite>

            </MyProjeto>

            <MyProjeto>

                <Img> <img   src={Ecoleta} alt="gameflix"/>   </Img>

                <Profite>
                   
                    <Title>Écoleta </Title>

                    <Descricao>platform where a company registers in order to collect the specific type of material that belongs to the same segment, thus contributing to the disposal of this type of material.</Descricao>
                    
                    <Linguagens>  <ButtonTec>HTML </ButtonTec>  <ButtonTec>CSS</ButtonTec>   <ButtonTec>Javascript</ButtonTec>  <ButtonTec>Node </ButtonTec>  <ButtonTec>Nunjuks </ButtonTec> <ButtonTec>SQL</ButtonTec>     </Linguagens>
                   
                    <div className="buttonLink">

                    <a href="https://github.com/henriquecatunda/AppWeb-EColeta"  target="_blank"> 
                        <ButtonContato >  Ver Projeto </ButtonContato>
                    </a>
    
                    </div>
                 </Profite>

            </MyProjeto>

            <MyProjeto>

                <Img> <img   src={Discord} alt="gameflix"/>   </Img>

                <Profite>
                   
                    <Title>Clone Front-end Discord </Title>

                    <Descricao>Discord Front-end clone in ReactJS</Descricao>
                    
                    <Linguagens>  <ButtonTec>Node.js</ButtonTec>   <ButtonTec>React</ButtonTec>  <ButtonTec>TypeScript </ButtonTec>  <ButtonTec>StyledComponents </ButtonTec> </Linguagens>
                   
                    <div className="buttonLink">

                    <a href="https://github.com/henriquecatunda/clone-discord" target="_blank"> 
                        <ButtonContato >  Ver Projeto </ButtonContato>
                    </a>
    
                    </div>
                 </Profite>

            </MyProjeto>

        </Container>

    );
}

export default Portfolio;