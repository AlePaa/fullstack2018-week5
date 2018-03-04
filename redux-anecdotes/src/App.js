import React from 'react';
import actionFor from './actionCreators'

class App extends React.Component {

  addVote = (id) => () => {
    this.props.store.dispatch(
      actionFor.voteAdding(id)
    )
  }

  createAnecdote = (e) => {
    e.preventDefault()
    const anec = e.target.anecdote.value
    if (anec !== '') {
      this.props.store.dispatch(
        actionFor.anecdoteCreating(anec)
      )
      e.target.anecdote.value = ''
    }
  }

  render() {
    const anecdotes = this.props.store.getState().sort( (a,b) => a.votes < b.votes )
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.createAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default App
