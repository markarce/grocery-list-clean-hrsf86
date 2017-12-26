import React from 'react';
import ReactDOM from 'react-dom';

const GroceryItem = (props) => (
    <li className="grocery-item">{props.description} {props.quantity}</li>
)

GroceryItem.proptypes = {
  item: React.PropTypes.object.isRequired
};

export default GroceryItem;