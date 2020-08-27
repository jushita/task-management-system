import React from 'react'
import ToDoList from './ToDoList'

class ToDoCard extends React.Component {

  state = {
    input: ''
  }

  handleListInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  
  render(){
    return (
      <div className="to-do-card">
        <h4>{this.props.card.title}</h4>
        <form onSubmit={this.handleListSubmit}>
          <input onChange={this.handleListInput} type="text" value ={this.state.input} />
        </form>
      </div>
    )
  }
}


export default ToDoCard