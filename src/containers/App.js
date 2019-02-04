import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

componentDidMount (){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  // this.setState({robots: robots});
}

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return(robot.name.toLowerCase().includes(searchfield.toLowerCase()))
    })

    //// if (robots.length === 0){
    // if (!robots.length){
    //   return <h1>Loading . . . </h1>
    // } else {
    //   return (
    //     <div className = 'tc'>
    //       <h1 className='f1'>RoboFriends</h1>
    //       <SearchBox searchChange = { this.onSearchChange }/>
    //       <Scroll>
    //         <CardList robots={filteredRobots}/>
    //       </Scroll>
    //     </div>
    return !robots.length ?
    <h1>Loading . . . </h1> :
    (
        <div className = 'tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange = { this.onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;