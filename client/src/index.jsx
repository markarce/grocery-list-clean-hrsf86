import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

const data = require('../../database/data.js');

console.log(data);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.data.groceryList
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const desc = event.target.description.value;
    const qty = event.target.quantity.value;
    let updatedList = this.state.list;
    console.log('updatedList', updatedList[0], updatedList[1], updatedList[2], updatedList[3], );

    console.log('list should be ', updatedList);
    for(let i = 0; i < updatedList.length; i++) {
      if (updatedList[i]['description'] === desc.toLowerCase()) {
        updatedList[i]['quantity'] += parseInt(qty);
        this.setState({list: updatedList});
        event.preventDefault();
        return;
      }
    }
    updatedList.push({id: updatedList.length + 1, quantity: qty, description: desc.toLowerCase()});
    this.setState({list: updatedList});
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <div></div>
          <AddGrocery 
            list={this.props.data.groceryList} 
            submit={this.handleSubmit}
          />
        <GroceryList list={this.props.data.groceryList} />
      </div>
    );
  }
}

ReactDOM.render(<App data={data} />, document.getElementById('app'));