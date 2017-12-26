import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <GroceryItem 
            key={item.id}
            quantity={item.quantity}
            description={item.description}
          />
        ))}
      </ul>
    );
  }
}

export default GroceryList;