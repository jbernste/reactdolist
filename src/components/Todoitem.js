import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
            return {
            background:'lightblue',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign:'left',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'

        }
    }
    markComplete =(e) => {
        console.log(this.props);
    }
    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}><h3>x</h3></button>

                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: Proptypes.object.isRequired
    }
const btnStyle = {
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '20%',
    curser: 'pointer',
    float: 'right'
}
export default TodoItem
