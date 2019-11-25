import React from 'react';
import Calendar from 'react-calendar';



class Novo_evento extends React.Component {
    constructor(){
        super();
        this.state = {
            date: new Date(),
            title: "",
            description: "",
          }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle(event) {
        this.setState({username: event.target.value});
      }
    handleChangeDescription(event) {
        this.setState({password: event.target.value});
      }
    handleSubmit(event) {
        //alert('Um nome foi enviado: ' + this.state.username + ' | ' + this.state.password);
        event.preventDefault();
      }

    onChange = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <small id="helpId" className="form-text text-muted">Nome do Evento</small>
                    <input type="text"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="Qual é o nome do evento?"
                        onChange=""/>
                    <small id="helpId" className="form-text text-muted">Descrição</small>
                    <textarea className="form-control" name="" id="" rows="3" placeholder="Conte um pouco sobre esse evento."></textarea>
                    <div>.</div>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <div>.</div>
                    <div>
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Novo_evento;