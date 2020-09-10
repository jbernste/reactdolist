import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import Header from './components/layout/Header'
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  
  state= {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(res => this.setState({ todos: res.data}))
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed 
        console.log('was clicked')
      }
      return todo;
    }) });
  }
  //Delete a Todo
  delTodo =(id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>  this.setState({ todos:[...this.state.todos.filter
      (todo => todo.id !== id)] }));

  }
  //Add A Todo
  addTodo = (title) =>{
    axios.post(`https://jsonplaceholder.typicode.com/todos`,{
      title,
      completed: false
    })
    .then(res =>  this.setState({ todos: [ ...this.state.todos, res.data]}));
  }

  render () {
    console.log(this.state.todos);
    
    return (
      <Router>
        <div className="App">
          <div className='container'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddToDo addTodo={this.addTodo} /> 
              <Todos todos={this.state.todos} markComplete={this.markComplete} 
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
         <Route path="/about" component ={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
