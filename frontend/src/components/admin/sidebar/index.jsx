import React from 'react';
import "./styles.scss";

export default function Sidebar(){
    return(
        <div className={`Sidebar`}>
            <div className={`container`}>
                <div class="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnhome" autocomplete="off"></input>
                    <label class="btn btn-outline-primary" for="btnradio1">Início</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnemployees" autocomplete="off"></input>
                    <label class="btn btn-outline-primary" for="btnradio2">Funcionários</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnstock" autocomplete="off"></input>
                    <label class="btn btn-outline-primary" for="btnradio3">Estoque</label>
                </div>
            </div>
        </div>
    )   
}

