import React, {Component } from 'react'

export class AddToDo extends Component {
    state ={
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display:'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex:'10' , padding:'5px' }}
                    placeholder="Add a Todo .." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                type="submit" 
                name="submit"
                className="btn"
                style={{ flex:'1', backgroundColor:'teal' }}
                />
            </form>
        )
    }
}

export default  AddToDo;