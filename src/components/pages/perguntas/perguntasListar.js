import React from 'react';
import axios from 'axios';
import './perguntas.css';
import { getAsks, sendVote} from '../../../services/service';
import check from '../../../assets/greencheck.png';
import { Redirect } from 'react-router-dom';




class PerguntasListar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            perguntas: [
                {
                    "anon":true,
                    "duvida":"Loading",
                    "email":"Loading",
                    "nome":"Loading",
                    "id":"loading",
                    "voted": 0,
                    
                }
            ],
            userState: this.props.user,
            ready: false,
            status: false
        }
        this.getVotted = this.getVotted.bind(this);
        //this.sendVote = this.sendVote.bind(this);
    }
    componentDidMount(){
        getAsks().then(response => {
            if (response != null) {
                this.setState({ perguntas: response });
            }
        });
        this.setState({ready: true});
    }
    getVotted(event){
        event.preventDefault();
        //console.log(event.target.id);

        sendVote(event.target.id, event.target.value).then(resposta => {
            try {
                console.log(resposta.status);
                this.setState({status: resposta.status})
            } catch (error) {
                console.log(error);
            }
        });
    }
    renderRedirect = () => {
        return <Redirect to='/perguntas/listar' />
      }
    render(){
        const { perguntas } = this.state;
        return(
            <div>
                {this.state.status ? (
                <div className="container">
                <img src={check} className="responsive"></img>
                <h1>Votado</h1>
                <small><a href="/">Voltar</a></small>
                {this.renderRedirect()}
            </div>
                ) : (
                    <div className="container">
                    {this.state.userState ? (
                        <div>
                            {this.state.userState}, veja todas as perguntas já feitas.<br/>
                        </div>
                    ) : (
                        <div>
                            Veja todas as perguntas já feitas.<br/>
                        </div>
                    )}
                    <div className="voted">
                        Para votar, basta escolher a pergunta que você quer que seja abordada na proxima celebração.
                    </div>
                    <div className="row">
                    {perguntas.map((data) => {
                        return(
                            <div className="col-sm-6 spacing">
                            <div className="card">
                                <div className="card-body">
                                    {data.anon ? (
                                        <div>
                                            <h5 className="card-title" >{data.nome}</h5>
                                        </div>
                                    ) : (
                                        <div>
                                            <h5 className="card-title" >{data.nome}</h5>
                                            {this.state.userState ? (
                                                <h6 className="card-subtitle mb-2 text-muted">{data.email}</h6>
                                                ): (null)}
                                        </div>
                                    )}
                                    <h6 className="card-subtitle mb-2 text-muted voted"><b>{data.date}</b></h6>
                                    <h6 className="card-subtitle mb-2 text-muted voted">Votado <b>{data.voted}</b> vezes</h6>
                                        <div className="alert alert-primary">
                                            <p className="card-text small-text">{data.duvida}</p>
                                        </div>
                                    <div onClick={this.getVotted}>
                                        <button type="button" id={data.id} value={data.voted} className="btn btn-secondary">Votar</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                </div>
                </div>
                )}
            </div>
            
        );
    }
}
export default PerguntasListar;


