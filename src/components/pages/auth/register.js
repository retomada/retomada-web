import React from 'react';
import './login.css';
import fire from '../../../config/fire';
import { Redirect } from 'react-router-dom';


import firebase from 'firebase';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            created: false
        };
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeFirstname(event) {
        this.setState({firstname: event.target.value});
      }
      handleChangeLastname(event) {
        this.setState({lastname: event.target.value});
      }
      handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
      handleSubmit(event) {
        //alert('Um nome foi enviado: ' + this.state.username + ' | ' + this.state.password);
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then((user) => {
                var dName = (this.state.firstname + " " + this.state.lastname);
                
                var usr = firebase.auth().currentUser;
                usr.updateProfile({
                    displayName: dName,
                  }).then(function() {
                  }).catch(function(error) {
                    // An error happened.
                  });
            })
            .catch((err) => {
                console.log(err);
            })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

    render(){
        return(
            <div class="wrapper fadeInDown">
              {this.renderRedirect()}
                <div id="formContent">
                    {this.state.created ? (<h3>criado</h3>) : (
                        <div>
                        <div class="fadeIn first">
                          <h3 className="recovery">
                              Crie sua conta
                          </h3>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                        <input type="text" id="login" class="fadeIn second" name="login" 
                            placeholder="Nome" value={this.state.firstname} onChange={this.handleChangeFirstname} required/>

                        <input type="text" id="login" class="fadeIn second" name="login" 
                            placeholder="Sobrenome" value={this.state.lastname} onChange={this.handleChangeLastname} required/>

                        <input type="text" id="login" class="fadeIn second" name="login" 
                            placeholder="E-mail" value={this.state.username} onChange={this.handleChangeUsername} required/>

                        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha"
                            value={this.state.password} onChange={this.handleChangePassword} required/>
                        <input type="submit" class="fadeIn fourth" value="Cadastrar"/>
                        </form>
                    </div>
                    )}

                    <div id="formFooter">
                    <a class="underlineHover" href="/auth/signin ">Já tenho uma conta</a>
                    </div>

                </div>
            </div>
        );
    }
}
export default Register;