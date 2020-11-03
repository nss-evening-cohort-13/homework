import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';

class GoatCorral extends Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    goatData.getGoats().then((resp) => {
      this.setState({
        goats: resp,
      });
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} />)
    );

    return (
      <div className='GoatCoral d-flex flex-wrap'>
        {renderGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
