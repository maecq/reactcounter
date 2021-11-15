import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

 

export class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
        { id: 5, value: 0},
        { id: 6, value: 0}
    ]
  };

handleIncrement = counter => {
  const counters = [ ...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counters[index]};
  counters[index].value++;
  this.setState({counters});
}

handleDecrement = counter => {
  const counters = [ ...this.state.counters ];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters});
}

handleDelete = counterId => {
  const counters = this.state.counters.filter( c => c.id !== counterId);
  this.setState({counters})
}

handleRestart = () => {
  window.location.reload();
}

handleReset = () => {
  const counters = this.state.counters.map(c => {c.value=0; return c;});
  this.setState({ counters });
}


  render() {
    return (
      <div className="App">
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} ></NavBar>
          <Counters counters = {this.state.counters}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete}
            onRestart = {this.handleRestart}
            onReset = {this.handleReset}
          />
      </div> 
      )
  }
}

export default App
