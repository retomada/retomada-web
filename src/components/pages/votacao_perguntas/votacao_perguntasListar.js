import React from 'react';
import './votacao_perguntas.css';
import { getAsks } from '../../../services/service';



class Votacao_perguntasListar extends React.Component {
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
                    "voted": 0 
                }
            ],
            userState: this.props.user,
            ready: false,
        }
        this.getVotted = this.getVotted.bind(this);
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
        console.log(event.target.id);
    }
    render(){
        const { perguntas } = this.state;
        return(
            <div>
                <div className="container">
                Para votar, basta escolher a pergunta que você quer que seja abordada na proxima celebração.
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
                                        <h5 className="card-title text-muted" >{data.nome}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{data.email}</h6>
                                    </div>  
                                )}
                                <h6 className="card-subtitle mb-2 text-muted voted">Votado <b>{data.voted}</b> vezes</h6>
                                    <div className="alert alert-primary">
                                        <p className="card-text small-text">{data.duvida}</p>
                                    </div>
                                <div>
                                    <button type="button" id={data.id} onClick={this.getVotted} class="btn btn-secondary">Votar</button>
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
export default Votacao_perguntasListar;


