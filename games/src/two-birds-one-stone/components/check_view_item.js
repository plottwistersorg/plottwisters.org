import React, {Component} from 'react';
// import './ToDoItem.css';

class CheckViewItem extends Component {

    constructor(){
        super(...arguments);
        
    }

    toggleCompleted(){
        this.setState({completed: !this.state.completed});
    }

    render() {
        return (
            <div className="todo-item">
                <p className="todo-item-text">{this.props.name}</p>
                <input className="chkbox" type="checkbox" value="" onChange={() => this.toggleCompleted()} />
            </div>
        );
    }
}

export default CheckViewItem;
