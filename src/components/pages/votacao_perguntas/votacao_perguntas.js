import React from 'react';
import check from '../../../assets/greencheck.png';
import './votacao_perguntas.css';
import { sendAsk } from '../../../services/service';



class Votacao_perguntas extends React.Component {
    constructor(){
        super();
        this.state = {
            anon: false,
            nome: "",
            email: "",
            duvida: "",
            submitted: false,

        }
        this.listenAnon = this.listenAnon.bind(this);
        this.listenDuvida = this.listenDuvida.bind(this);
        this.listenNome = this.listenNome.bind(this);
        this.listenEmail = this.listenEmail.bind(this);
        this.submit = this.submit.bind(this);
    }
    listenAnon(res){
        this.setState({anon: res.target.checked});
    }
    listenDuvida(res){
        this.setState({duvida: res.target.value});
    }
    listenNome(res){
        this.setState({nome: res.target.value});
    }
    listenEmail(res){
        this.setState({email: res.target.value});
    }
    submit(){
        console.log("send ask");
        
        var mensagem = {
            anon: this.state.anon,
            nome: this.state.nome,
            email: this.state.email,
            duvida: this.state.duvida
        }
        console.log(mensagem)
            sendAsk(mensagem).then(resposta => {
                try {
                    console.log(resposta.result);
                    if (resposta.result) {
                        this.setState({submitted: resposta.result});
                    }
                } catch (error) {
                    console.log(error);
                }
            });
    }

    render(){
        return(
            <div className="container">
                {this.state.submitted ? 
                (
                <div className="container">
                    <img src={check} className="responsive"></img>
                    <h1>Enviado</h1>
                    <h4>Em breve, responderemos sua pergunta.</h4>
                    <small><a href="/">Voltar</a></small>
                </div>
                ) : 
                (
                <div>
                    <form >
                <div class="form-group">
                    <label >Qual é sua dúvida?</label>
                    <textarea class="form-control" onChange={this.listenDuvida} placeholder="Escreva aqui" rows="3"></textarea>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" onChange={this.listenAnon}/>
                    <label class="form-check-label" >Pergunta anonima</label>
                </div>
                <div class="form-group">
                    <label >Nome</label>
                    <input type="email" disabled={this.state.anon} onChange={this.listenNome} class="form-control" placeholder={this.state.anon ? "Modo anonimo" : "Nome"}/>
                </div>
                <div class="form-group">
                    <label >Email address</label>
                    <input type="email" disabled={this.state.anon} onChange={this.listenEmail} class="form-control disabled" aria-describedby="emailHelp" placeholder={this.state.anon ? "Modo anonimo" : "Email"}/>
                </div>
                </form>
                <button onClick={this.submit} type="button" class="btn btn-primary">Enviar</button>
                </div>

                )}
            </div>
        );
    }
}
export default Votacao_perguntas;