import React from 'react';
import './onde.css';

function Onde() {
    return(
        
        <div className="onde" id="onde">
            <div className="container">
            <div style={{visibility: "hidden"}}>.</div>
            <h2 style={{textAlign: "center", padding: "20px", height: "60px"}}>ONDE<b>ESTAMOS</b></h2>
            <h5>Igreja Evangélica da Paz</h5>
            <p><b>Endereço:</b> Av. Santos Dumont, 300 | Ferraz de Vasconcelos - SP</p>
            <p><b>Email:</b> ola@retomada.com</p>
            <p><b>Redes:</b> Facebook <b>|</b> Instagram <b>|</b> Twitter</p>
        </div>
        <div style={{visibility: "hidden"}}>.</div>
        </div>
    );
    
}
export default Onde;