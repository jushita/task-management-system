import React from 'react'


class ToDoCard extends React.Component {
    state = {
        input: ''
    }

    handleListInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleListSubmit = (event) => {
        event.preventDefault()
        this.props.addList(this.props.card.id, this.state.input);
        this.setState({
            input: ''
        })
    }


    render() {
        return (
            
            <div class="to-do-container">
                <div className="to-do-card">
                    <span>{this.props.card.title}</span>
                </div>
            </div>
            
        )
    }
}


export default ToDoCard