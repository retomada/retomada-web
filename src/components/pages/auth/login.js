import React from 'react';
import './login.css';
import fire from '../../../config/fire';
import { Redirect } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            loading: true
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((u) => {
               this.setState({redirect: true});
            })
            .catch((err) => {
                console.log("Veja o que acontece"+err);
            })

      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    
    render(){
        return(
            <div className="ok">
              {this.renderRedirect()}
                <div id="formContent">
                  <h3 className="recovery fadeIn first">
                        Acesse sua conta
                    </h3>
                      <form onSubmit={this.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="login" 
                            placeholder="login" value={this.state.username} onChange={this.handleChangeUsername} required/>
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password"
                            value={this.state.password} onChange={this.handleChangePassword} required/>
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                      </form>
                      <div id="formFooter fadeIn fourth">
                      <row>
                        <a className="fadeIn fourth" href="/auth/forgot ">Forgot Password?</a>
                      </row>
                      <row>
                        <a className="fadeIn fourth" href="/auth/signup ">Create Account</a>
                      </row>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;