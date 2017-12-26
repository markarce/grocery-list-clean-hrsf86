import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }
  }

render () {
  return (
    <div>
      <h3>List items below</h3>
      <ul>
      {this.state.list.map(item => (
        <GroceryItem 
          key={item.id}
          quantity={item.quantity}
          description={item.description}
        />
      ))}
      </ul>
    </div>
    );
  }
}
//ReactDOM.render(<App />, document.getElementById("grocery-list"));

export default GroceryList;

// ReactDOM.render(<GroceryList />, document.getElementById('app'));