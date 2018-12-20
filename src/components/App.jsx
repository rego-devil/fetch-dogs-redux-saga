import React from 'react';
import { connect } from 'react-redux';
import { requestDog }  from '../redux/actions';

class AppContainer extends React.Component {
  render () {

    return (
      <div>
        <button onClick={() => this.props.requestDog()}>Show Dog</button>
          {
            this.props.loading ? <p>Loading...</p> 
            : this.props.error ? <p>Error, try again</p>
              : <p><img src={this.props.url}/></p>
          }
      </div>
    )
  }
}

export const App = connect((state) => {
    return state.dog
  }, 
  (dispatch) => ({
    requestDog: (data) => dispatch(requestDog(data)),
  })
)(AppContainer);