import React from 'react';
import axios from 'axios';
import './perguntas.css';
import { getAllAsks, sendAproved } from '../../../services/service';



class PerguntasAprovar extends React.Component {
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
                    "aproved": null
                }
            ],
            userState: this.props.user,
            ready: false,
        }
        this.getVotted = this.getVotted.bind(this);
        //this.sendVote = this.sendVote.bind(this);
    }
    componentDidMount(){
        getAllAsks().then(response => {
            if (response != null) {
                this.setState({ perguntas: response });
            }
        });
        this.setState({ready: true});
    }
    getVotted(event){
        
        event.preventDefault();
        sendAproved(event.target.id).then(resposta => {
            try {
                console.log(resposta);
            } catch (error) {
                console.log(error);
            }
        });
        console.log("ok");

        
    }

    render(){
        const { perguntas } = this.state;
        return(
            <div>
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
                                <h6 className="card-subtitle mb-2 text-muted voted">Status <b>{data.aproved}</b></h6>
                                    <div className="alert alert-primary">
                                        <p className="card-text small-text">{data.duvida}</p>
                                    </div>
                                <div onClick={this.getVotted}>
                                    <button type="button" id={data.id}  className="btn btn-secondary">Aprovar</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
            </div>
            
        );
    }
}
export default PerguntasAprovar;


