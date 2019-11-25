import React from 'react';
import firebase from 'firebase';
import './navbar.css';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      username: null,
     }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (user.displayName != null) {
          this.setState({username: user.displayName});
        }
      } else {
        // No user is signed in.
      }
    }.bind(this));
  }

  render(){
    return(
      <nav className="navbar navbar-expand-md fixed-top navbar-dark">
        <div className="d-flex w-50 order-0">
            <a className="navbar-brand mr-1" href="/">Retomada</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
               <div className="dropdown">
                  <a className="btn btn-link nav-text1 nav-link active" href="#ok" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Perguntas
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/perguntas">Perguntar</a>
                    <a className="dropdown-item" href="/perguntas/listar">Ver perguntas</a>
                    {this.state.username ? (<a className="dropdown-item" href="/perguntas/aprovar">Aprovar perguntas</a>) : (null)}
                  </div>
               </div>
            </ul>
        </div>


        <div className="dropdown navbar-right mt-1 w-50 text-right order-1 order-md-last">
          <a className="btn btn-link nav-text " href="#ok" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.username ? (this.state.username) : ("Entrar")}
          </a>
          {//Se o usuário estiver autenticado
          }
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            {this.state.username ? (
              <div>
                <a className="dropdown-item" href="/perfil">Meu perfil</a>
                <a className="dropdown-item" href="/auth/signin" onClick={() => firebase.auth().signOut()}>Sair</a>
              </div>
            ) : (
              <div>
                <a className="dropdown-item" href="/auth/signin">Login</a>
                <a className="dropdown-item" href="/auth/signup">Cadastre-se</a>
              </div>
            )}
          </div>
          {//Se o usuário não estiver autenticado
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;



/*


        <div className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last" >
            <span>Login</span>
        </div>

<nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">Retomada</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/perguntas">Perguntar</a>
          </li>
          {this.state.username ? (
            <div>
              <li className="nav-item active">
                <a className="nav-link" href="/perguntas/listar">Votacao_perguntas</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/" onClick={() => firebase.auth().signOut()}>{this.state.username}</a>
              </li>
            </div>
            
          ) : (
            <li className="nav-item active">
                <a className="nav-link" href="/auth/signin">Entrar</a>
            </li>
          )}
        {/** 
          {this.state.user ? (
            <div>
              <li className="nav-item active">
                <a className="nav-link" href="/perguntas/listar">Votacao_perguntas</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link">Olá, {this.state.user}</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" onClick={() => firebase.auth().signOut()}>Sair</a>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item active">
                <a className="nav-link" href="/auth/signin">Login</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/auth/signup">cadastro</a>
              </li>
            </div>
          )}
        }
        </ul>
      </div>
    </nav>
*/