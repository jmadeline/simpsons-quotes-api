import React from 'react';
import axios from 'axios';
import './App.css';
import QuoteCards from './Components/QuoteCards/QuoteCards';


const quotes =
{
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simpson: quotes
    }
  }

  getQuoteSimpson = () => {
    //Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this DATA to update the state
      .then(data => {
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuoteCards simpson={this.state.simpson} />
          <button type="button" onClick={this.getQuoteSimpson}>Get new quote</button>
        </header>
      </div>
    );
  }
}

export default App;
