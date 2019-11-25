import React from 'react';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import './load.css';

// First way to import
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Load extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.load
    }
  }
  render() {
    return (
      <div>
          <div className="card App-header programation">
            <div className='sweet-loading'>
                <HashLoader
                css={override}
                sizeUnit={"px"}
                size={150}
                color={'#22d4b7'}
                loading={this.state.loading}
                />
            </div> 
          </div>
      </div>
    )
  }
}

export default Load;