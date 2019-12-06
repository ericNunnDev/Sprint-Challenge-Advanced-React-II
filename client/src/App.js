import React, { Component } from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount = () => {
    this.getPlayers();
  }

  getPlayers = () => {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(players => this.setState({ players: players.data }))
    .catch(e => console.log(e))
  }


  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
