import React from "react";
import { Link} from 'react-router-dom';
import {Containe, MenuInfo, Home} from './Menu.js';
import ButtonLink from "../ButtonLink";
import Contato from "../Contato/index.js";
import Hc from '../../assets/Hc.png';

function Menu(){

    return (
        <Containe>

            <Contato />

            <Home>
                <Link to="/">  
                    <img src={Hc} alt="gameflix"/> 
                </Link>
            </Home>

            <MenuInfo>
             <Link to="/">
             Portfolio
             </Link>

             <Link to="/About">
             About 
             </Link>

                {/* <a target="_blank" href="https://github.com/henriquecatunda"> 
                
                <ButtonLink >  GitHub   </ButtonLink>
                </a>
           */}
            </MenuInfo> 
        </Containe>
    ); 
}

export default Menu;