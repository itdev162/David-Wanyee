import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    values:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values:response.data
      })
    })
      .catch((error) => {
          console.error('Error fetching data: $error');
      })
    }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Blogbox
        </header>
      </div>
  );
  }
}

export default App;
