import React from "react";
import {ButtonContato} from "../Header/style";
import {Container, Avatar, Informacao,Informacao2, User,Titulo,Descricao,Servico,TituloServico,DescricaoServico,Img } from './style';
import fundo from '../../assets/fundoServ.png';
import Design from '../../assets/foguete.png';
import web from '../../assets/web.png';
import teste from '../../assets/teste.png';

function Servicos(){


    return (

        <Container>

                <img className="imgfundo"   src={fundo} alt="gameflix"/>

             <Avatar>
                 
                 <Descricao>

                        <Titulo>
                          My services
                        </Titulo>
                        <User>
                        Main areas of activity in the labor market
                        </User>

                 </Descricao>

               
                  <Servico>

                          <Img> <img   src={Design} alt="gameflix"/>  </Img> 

                          <TituloServico>
                            Creative Design 
                          </TituloServico>

                          <DescricaoServico>
                            Design efficient and satisfactory solutions for your users
                          </DescricaoServico>

                  </Servico>
               
                    

              </Avatar>

            <Informacao>

                    <Servico>

                         <Img> <img   src={web} alt="gameflix"/>  </Img> 

                        <TituloServico>
                         Development
                        </TituloServico>

                        <DescricaoServico>
                        Develop functional code, delivering an organized, coherent and intuitive layout
                        </DescricaoServico>

                    </Servico>

                    <Servico>

                    <Img> <img   src={teste} alt="gameflix"/>  </Img> 

                    <TituloServico>
                       Test Analyst
                    </TituloServico>

                    <DescricaoServico>
                    Develop test plans, run tests, analyze and document results
                    </DescricaoServico>

                    </Servico>
        
            </Informacao>
        
        </Container>

    );
}


export default Servicos;