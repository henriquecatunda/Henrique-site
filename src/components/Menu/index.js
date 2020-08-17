import React from "react";
import { Link} from 'react-router-dom';
import {Containe, MenuInfo} from './Menu.js';
import ButtonLink from "../ButtonLink";

function Menu(){

    return (
        <Containe>

            <MenuInfo>

             <Link to="/">
             About 
             </Link>

             <Link to="/portfolio">
             Portfolio
             </Link>

                <a target="_blank" href="https://github.com/henriquecatunda"> 
                
                <ButtonLink >  GitHub   </ButtonLink>
                </a>
          

            </MenuInfo>
            
        </Containe>
    ); 
}

export default Menu;