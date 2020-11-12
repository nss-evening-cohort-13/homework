import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

export default class GoatForm extends Component {
  state = {
    id: this.props.goat.id || '',
    name: this.props.goat.name || '',
    imgUrl: this.props.goat.imgUrl || '',
    description: this.props.goat.description || '',
    age: this.props.goat.age || '',
    isBusy: this.props.goat.isBusy || false,
  }

  handleChange = (e) => {
    const value = e.target.name === 'age' ? Number(e.target.value) : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUpdateGoat(this.state);
  }

  render() {
    const dataItems = Object.keys(this.state);
    return (
      <Form className='container mb-3' onSubmit={this.handleSubmit}>
        {
          dataItems.map((item) => (
            (item !== 'id' && item !== 'isBusy') && (
              <Input
                key={item}
                className='mb-2'
                type='text'
                name={item}
                id={item}
                value={this.state[`${item}`]}
                placeholder={`Enter goat ${item}`}
                onChange={this.handleChange}
                required
              />
            )
          ))
        }
        <Button className='mt-3'>Submit</Button>
      </Form>
    );
  }
}
