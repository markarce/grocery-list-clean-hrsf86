import React from 'react';
import ReactDOM from 'react-dom';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    console.log('log ', event.target.name + ':' + event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.submit(event);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            Description:
            <input 
              type="text" 
              value={this.props.description} 
              onChange={this.handleChange}
              name="description"
               />
          </label>
          </div>
          <div>
          <label>
            Quantity:  
            <input 
              type="number" 
              max="99" 
              value={this.props.quantity} 
              onChange={this.handleChange}
              name="quantity" />
            <input type="submit" value="Add to List" />
          </label>
          </div>
        </form>
      </div>
    );
  }
}

export default AddGrocery;