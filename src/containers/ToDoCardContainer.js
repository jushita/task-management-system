import React from 'react';
import ToDoCard from '../components/ToDoCard';

function ToDoCardContainer (props) {
    function renderCards() {
        return props.cards.map(card => {
            return <ToDoCard key={card.id} card={card} />
        })
    }


    return (
        <div>
            {renderCards()}
        </div>
    )
}


export default ToDoCardContainer;