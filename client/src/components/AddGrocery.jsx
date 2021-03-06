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

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.submit(event);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Description:
              <input 
                type="text" 
                value={this.state.description}
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
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  name="quantity" 
                />
              </label>
            <input type="submit" value="Add to List" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddGrocery;