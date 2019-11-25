import React from 'react';
import './biblia.css';
import { getBible } from '../../../services/service';

class Biblia extends React.Component {
    constructor(){
        super();
        this.state = {
            biblia: "äguardando",
        }
    };
    componentDidMount(){
        getBible().then(response => {
            this.setState({biblia: response});
        });
    }
    render(){
        return(
            <div className="bible">
            {this.state.biblia}
        </div>
        );
    }
}
export default Biblia;
