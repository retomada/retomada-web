import React from 'react';
import './home.css';
function Home() {
    return(
        <div className="main">
            <div className="card-ask card programation">
                <h3>Tem uma duvida? Sobre qualquer coisa? <b><a className="link" href="/perguntas">faça aqui</a></b>.
                </h3>
            </div>
            <div className="card-1 card App-header programation">
                <h3>Todos precisam de companhia na hora de caminhar com <b>Cristo</b>.<br/>
                    Por isso, nós queremos que você faça parte do <b>Retomada</b>.
                </h3>
            </div>
            <div className="card-2 card App-header programation">
                <h3>Seja com a galera da <b>sua idade</b>, em algum de nossos departamentos<br/>
                    ou quando está todo mundo junto, nós acreditamos que <b>seu lugar é aqui</b>.
                </h3>
            </div>
            <div className="card-3 card programation">
                <h2><b>UNDER</b>GROUND</h2>
                <h3>17h30</h3><h4><b>15-19</b>ANOS</h4>
            </div>
            <div className="card-4 card programation">
                <h2><b>FREE</b></h2>
                <h3>19h</h3><h4><b>20-30</b>ANOS</h4>
            </div>
        </div>
    );
}
export default Home;