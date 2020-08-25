import React from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer'
import Nav from './Nav'

export default class MainContainer extends React.Component {
    API = "http://localhost:3000"
    state = {
        cards: []
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

    createNewCard = (input) => {
      fetch(this.API + '/cards', {
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


    addList = (cardId, input) => {
      fetch(this.API + '/lists', {
        metod: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          description: input,
          card_id: cardId,
          completed: false
        })
      })
      .then(res =>res.json())
      .then(newList => {
        const foundCard = {...this.state.cards.find(card => card.id === cardId)}
        foundCard.lists = [...foundCard.lists, newList]

        const newCards = this.state.cards.map(card => {
          if(card.id === cardId) {
            return foundCard
          } else {
            return card
          }
        })

        this.setState({
          cards: newCards
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
