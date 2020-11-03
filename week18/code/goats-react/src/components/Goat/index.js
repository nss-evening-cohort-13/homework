import React, { Component } from 'react';

export default class Goat extends Component {
  state = {
    isBusy: this.props.goat.isBusy,
  }

  updateGoat = () => {
    this.setState({
      isBusy: !this.state.isBusy,
    });
  }

  render() {
    const { goat } = this.props;
    const { isBusy } = this.state;

    return (
      <div className='Goat col-md-3 mb-3' id={goat.id}>
        <div className='card'>
          <img src={goat.imgUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{goat.name}</h5>
            <p className='card-text'>{goat.age} Years old</p>
            <p className='card-text'>{goat.description}</p>
          </div>
          <div className='card-footer'>
            { isBusy ? (
                <button className='btn btn-success' onClick={this.updateGoat}>Use Goat</button>
            ) : (
              <button className='btn btn-danger' onClick={this.updateGoat}>Goat in Use</button>
            )
            }
          </div>
        </div>
      </div>
    );
  }
}
