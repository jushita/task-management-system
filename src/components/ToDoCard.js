import React from 'react'


class ToDoCard extends React.Component {
    state = {
        input: ''
    }


    render() {
        return (
            <div className="to-do-card">
                <h4>{this.props.card.title}</h4>
    
            </div>
        )
    }
}


export default ToDoCard