import React from 'react';
import { Container,ContainerBase,TituloForm,Servico,TituloServico,DescricaoAno,DescricaoServico } from './style';

function Experience() {
    return (
        <Container>

            <TituloForm>My Education </TituloForm>

            <ContainerBase>

                <Servico>

                    <TituloServico>
                         Front-End Developer ReactJS
                     </TituloServico>

                    <DescricaoServico>
                    Course Completed In Digital Innovation One | 2020
                    </DescricaoServico>

                </Servico>

                <Servico>

                    <TituloServico>
                     Global Fullstack Developer
                    </TituloServico>

                    <DescricaoServico>
                    Course Completed In Digital Innovation One | 2020
                    </DescricaoServico>

                </Servico>

                <Servico>

                    <TituloServico>
                     Intermediate English
                    </TituloServico>

                    <DescricaoServico>
                    National Geographic Learning | 2018
                    </DescricaoServico>

                </Servico>

            </ContainerBase>

        </Container>
    );
}

export default Experience;