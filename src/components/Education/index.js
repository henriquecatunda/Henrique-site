import React from 'react';
import { FooterBase, Banner, Infor ,Esperiencias, FooterForm,Titulo,Ano, Descricao } from './style';

function Experience() {
  return (
    <FooterForm>
      
      <FooterBase>
        
        <Banner>

            <h3>My expericence </h3>

            <Infor>

            <ul>

            <li>
            <Titulo> Intern at the Software Development Practice Center - NPDS as a front end developer</Titulo>
            <Ano> 2020 </Ano>
            <Descricao> develop a PWA platform for complementary hours</Descricao>
            </li>

            </ul>

              <ul>

                  <li>
                   <Titulo>UFC - Federal University of Ceará.Project: Institutional Repository</Titulo>
                   <Ano> 2018 </Ano>
                   <Descricao> Control and management of Institutional repositories</Descricao>
                  </li>

              </ul>

              <ul>

              <li>
              <Titulo> UFC - Federal University of Ceará.Project: inventory management software</Titulo>
              <Ano> 2017 </Ano>
              <Descricao> Software development
to manage the purchase, storage and
consumption</Descricao>
              </li>

              </ul>

             

            </Infor>

        </Banner>

        <Banner>

            <h3>My education </h3>

            <Esperiencias>

                <ul>

                    <li>
                    <Titulo> Front-end Developer ReactJS - Course completed in Digital Innovation One</Titulo>
                    <Ano> 2020 </Ano>
                    </li>
                </ul>

                <ul>

                    <li>
                    <Titulo>Global Fullstack Developer - Course completed in Digital Innovation One</Titulo>
                    <Ano> 2020 </Ano>
                    </li>
                </ul>

                <ul>

                    <li>
                    <Titulo> Next Level Week offered by Rocketseat - Fullstack ReactJS development</Titulo>
                    <Ano> 2020 </Ano>
                    </li>
                </ul>

                <ul>

                    <li>
                    <Titulo> Intermediate English - Course completed at National Geographic Learning</Titulo>
                    <Ano> 2018 </Ano>
                    </li>
                </ul>


            </Esperiencias>

        </Banner>


    </FooterBase>

    </FooterForm>
  );
}

export default Experience;