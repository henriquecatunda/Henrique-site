import React from 'react';
import Proffy from '../../assets/projetos/proffy.png'
import Gamedev from '../../assets/projetos/gamedev.png'
import Ecoleta from '../../assets/projetos/ecoleta.png'

import ichiraku from '../../assets/projetos/ichiraku.png'
import svg from '../../assets/projetos/svg.png'
import viace from '../../assets/projetos/viace.png'
import Ichira from '../../assets/projetos/ichira.png'
import {Container, MyProjeto, Img, Profite,Title, Descricao, Linguagens} from './styles';


function Portfolio(){

    return(

        <Container>

           

            <MyProjeto>
                <a href="https://www.behance.net/gallery/107737225/VIACE" target="_blank" rel="noopener noreferrer"> 
                <Profite>

                    <Img> <img   src={viace} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  Viace </p> </Linguagens>

                    <div className="info">
                    <Title>UX/UI designer</Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>          
                </a>
 
            </MyProjeto>

            <MyProjeto>
                <a href="https://www.behance.net/gallery/108724569/Delivery-Ichiraku" target="_blank" rel="noopener noreferrer"> 
                <Profite> 
       
                    <Img> <img   src={Ichira} alt="gameflix"/>   </Img>
                    <Linguagens> <p> Design Ichiraku </p> </Linguagens>

                    <div className="info">
                    <Title>UX/UI designer</Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>          
                </a>
 
            </MyProjeto>


            <MyProjeto>
                <a href="https://www.behance.net/gallery/103289193/Sgp" target="_blank" rel="noopener noreferrer"> 
                <Profite>

                    <Img> <img   src={svg} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  SGP </p> </Linguagens>

                    <div className="info">
                    <Title>UX/UI designer</Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>          
                </a>
 
            </MyProjeto>

            <MyProjeto>
                <a href="https://github.com/henriquecatunda/Ichiraku" target="_blank" rel="noopener noreferrer"> 
                <Profite>

                    <Img> <img   src={ichiraku} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  Ichiraku </p> </Linguagens>

                    <div className="info">
                    <Title>Frontend developer</Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>          
                </a>
 
            </MyProjeto>

            <MyProjeto>

                <a href="https://github.com/henriquecatunda/Proffy-Web"  target="_blank" rel="noopener noreferrer"> 
                <Profite>
                    
                <Img> <img   src={Proffy} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  Proffy </p> </Linguagens>

                    <div className="info">
                    <Title>Frontend developer  </Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>       

                </a>
    
            </MyProjeto>

            <MyProjeto>
                <a href="https://github.com/henriquecatunda/gameflix"  target="_blank" rel="noopener noreferrer"> 
                <Profite>
                   
                    <Img> <img   src={Gamedev} alt="gameflix"/>   </Img>
                    <Linguagens> <p> Gameflix </p> </Linguagens>

                    <div className="info">
                    <Title>Frontend developer</Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>

                </a>
    
            </MyProjeto>



            {/*<MyProjeto>
                <a href="https://github.com/henriquecatunda/AppWeb-EColeta"  target="_blank" rel="noopener noreferrer"> 
                <Profite>
                
                    <Img> <img   src={Ecoleta} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  Ecoleta</p> </Linguagens>

                    <div className="info">
                    <Title>Frontend developer</Title>
                    <Descricao>2020</Descricao>
                  
                    </div>
                </Profite>
                </a>
       
            </MyProjeto>*/}

          

            {/* <MyProjeto>
                <a href="https://github.com/henriquecatunda/clone-discord" target="_blank"> 
                <Profite>

                    <Img> <img   src={Discord} alt="gameflix"/>   </Img>
                    <Linguagens> <p>  Clone-discord </p> </Linguagens>

                    <div className="info">
                    <Title>Clone Front-end Discord </Title>
                    <Descricao>2020</Descricao>
                    </div>
                </Profite>          
                </a>
 
            </MyProjeto> */}

           
        </Container>

    );
}

export default Portfolio;