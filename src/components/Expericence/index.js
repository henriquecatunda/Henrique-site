import React from 'react';
import { Container,ContainerBase,TituloForm,Servico,TituloServico,DescricaoAno,DescricaoServico } from './style';

function Experience() {
    return (
        <Container>

            <TituloForm>My expericence </TituloForm>

            <ContainerBase>

                <Servico>

                    <TituloServico>
                        Front-end Developer
                     </TituloServico>

                    <DescricaoAno>
                       Parque Tecnológico da UFC | 2021
                    </DescricaoAno>

                    <DescricaoServico>
                    Designado no desenvolvimento Front-end de um software que servirá
                    ao proposito do Open Banking
                    </DescricaoServico>

                </Servico>

                <Servico>

                    <TituloServico>
                        Front-end Developer
                    </TituloServico>

                    <DescricaoAno>
                         Núcleo de Práticas de Desenvolvimento de Sistemas | 2020
                    </DescricaoAno>

                    <DescricaoServico>
                    Designado na construção do sistema de atividades complementares
                    que têm por objetivo auxiliar a análise do desempenho dos discentes
                    </DescricaoServico>

                </Servico>

                <Servico>

                    <TituloServico>
                        Front-end Developer
                    </TituloServico>

                    <DescricaoAno>
                         Universidade Federal do Ceará | 2017
                    </DescricaoAno>

                    <DescricaoServico>
                    Desenvolvimento de um software para gerenciar a compra,
                    armazenagem e consumo de reagentes e vidrarias.
                    </DescricaoServico>

                </Servico>

            </ContainerBase>

        </Container>
    );
}

export default Experience;