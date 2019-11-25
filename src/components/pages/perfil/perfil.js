import React, { Component } from 'react'
import profile from '../../../assets/profile-picture.jpeg'
import ProfileAvatar from "react-rounded-image"


export default class perfil extends Component {
    constructor(props) {
        super(props);
        this.state = null;
      }
    render(){
        return(
            <div className="ok ">
                <div id="formContent" className="container">
                  <h3 className="">
                        Perfil
                    </h3>
                        <ProfileAvatar
                            image={profile}
                            imageWidth="150"
                            imageHeight="150"
                            roundedSize="0"
                        />
                        <form onSubmit="ok">
                            <input type="text" id="login" className="" name="login" 
                                placeholder="login" value="ok" onChange="ok" required/>
                            <input type="password" id="password" className="" name="login" placeholder="password"
                                value="ok" onChange="ok" required/>
                            <input type="submit" className="" value="Log In" />
                        </form>
                </div>
            </div>
        );
    }
}
