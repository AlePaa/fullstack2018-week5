import React from 'react'
import actionFor from './actionCreators'

import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

class App extends React.Component {

  increment = (action) => {
    return () => {
      this.props.store.dispatch({
        type: action
      })
    }
  }

  render() {
    const state = this.props.store.getState()
    return (
      <div>
        <Feedback increment={this.increment} />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
        />
      </div>
    )
  }
}

export default App
