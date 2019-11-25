import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/login';
import Perguntas from './components/pages/perguntas/perguntas';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import fire from './config/fire'
import './App.css';
import Forgot from './components/pages/auth/forgot';
import Register from './components/pages/auth/register';
import PerguntasListar from './components/pages/perguntas/perguntasListar';
import Load from './components/pages/load/load';
import Agenda from './components/pages/agenda/agenda';
import Perguntas2 from './components/pages/perguntas/perguntas2';
import Votacao_perguntas from './components/pages/votacao_perguntas/votacao_perguntas';
import Votacao_perguntasListar from './components/pages/votacao_perguntas/votacao_perguntasListar';
import perfil from './components/pages/perfil/perfil';
import PerguntasAprovar from './components/pages/perguntas/perguntasAprovar';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            ready: false
        }
        
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user.displayName });
            } else {
                this.setState({ user: null });
            }
            this.setState({ready: true});
        });
    }
    render() {
        return (
            <main>
                {//Verifica se a página está pronta para exibir as informações
                }
                {this.state.ready ? (
                    <div>
                        <Navbar></Navbar>
                        <div className="App-header">
                                    <BrowserRouter>
                                        <Switch>
                                            <Route path="/" exact component={Home}/>
                                            <Route path="/auth/signin" exact component={Login}/>
                                            <Route path="/auth/signup" exact component={Register}/>
                                            <Route path="/auth/forgot" exact component={Forgot}/>
                                            <Route path="/perguntas" exact component={Perguntas}/>
                                            <Route path="/programacao/listar" exact component={Agenda}/>
                                            <Route path="/perguntas/votar" exact component={Votacao_perguntas}/>
                                            <Route path="/perguntas/votar/listar" exact component={Votacao_perguntasListar}/>
                                            <Route path="/perguntas/listar" exact component={() => <PerguntasListar user={this.state.user}/>}/>
                                            <Route path="/perguntas/aprovar" exact component={() => <PerguntasAprovar user={this.state.user}/>}/>


                                            {
                                                //Rotas Autenticadas
                                            }
                                            {this.state.user ? (
                                                <div>
                                                    <Route path="/perguntas/listar" exact component={() => <PerguntasListar user={this.state.user}/>}/>
                                                    <Route path="/programacao/listar" exact component={Perguntas}/>
                                                    <Route path="/perfil" exact component={perfil}/>
                                                </div>
                                            ) : (
                                                <Redirect
                                                    to={{
                                                    pathname: "/auth/signin",
                                                    }}
                                                />
                                            )}
                                        </Switch>
                                    </BrowserRouter>
                        </div>
                        <Footer></Footer>
                    </div>
                ) : (
                    <Load load={true}></Load>
                )}
            </main>
        );
    }
}

export default App;