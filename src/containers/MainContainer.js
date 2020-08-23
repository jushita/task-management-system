import React from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer'
import Nav from './Nav'

export default class MainContainer extends React.Component {
    API = "http://localhost:3000/cards"
    state = {
        cards: []
    }

    createNewCard = (input) => {
        fetch(this.API, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            title: input
          })
        })
        .then(resp => resp.json())
        .then(newCard => {
          this.setState({
            cards: [...this.state.cards, newCard]
          })
        })
      }

    componentDidMount() {
        fetch(this.API)
        .then(res => res.json())
        .then(cards => {
            this.setState({
                cards: cards
            })
        })
    }

    render(){
        return (
          <div className="main-container">
            <Nav></Nav>
            <CreateCard createNewCard={this.createNewCard} />
            <div>
            <div>
                <h2>Tasks Need to Be Completed</h2>
            </div>
            </div>
            <ToDoCardContainer cards={this.state.cards} />
          </div>
        )
}
}
