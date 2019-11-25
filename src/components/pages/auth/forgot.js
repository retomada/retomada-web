import React from 'react';
import './login.css';
import fire from '../../../config/fire'
import { Redirect } from 'react-router-dom';

class Forgot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            recovered: false,
            redirect: false,
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
        fire.auth().sendPasswordResetEmail(this.state.username).then(function() {
            console.log("Recuperação de conta enviada!");
            this.setState({redirect: true});
          }).catch(function(error) {
            // An error happened.
          });
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
                    <div>
                        <h3 className="recovery">
                            Recupere sua conta
                        </h3>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="login" class="fadeIn second" name="login" 
                                placeholder="user@mail.com" value={this.state.username} onChange={this.handleChangeUsername} required/>
                            <input type="submit" class="fadeIn fourth" value="Recuperar"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Forgot;