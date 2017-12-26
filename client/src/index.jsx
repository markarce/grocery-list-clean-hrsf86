import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

const data = require('../../database/data.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.data.groceryList
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const desc = event.target.description.value;
    const qty = event.target.quantity.value;
    let updatedList = this.state.list;

    for(let i = 0; i < updatedList.length; i++) {
      if (updatedList[i]['description'] === desc.toLowerCase()) {
        updatedList[i]['quantity'] += parseInt(qty);
        this.setState({list: updatedList});
        return;
      }
    }
    updatedList.push({id: updatedList.length + 1, quantity: parseInt(qty), description: desc.toLowerCase()});
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
          <AddGrocery 
            submit={this.handleSubmit}
          />
        <GroceryList list={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App data={data} />, document.getElementById('app'));