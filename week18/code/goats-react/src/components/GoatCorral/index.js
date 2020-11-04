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

  removeGoat = (e) => {
    const removedGoat = this.state.goats.filter((goat) => goat.id !== e.target.id);

    this.setState({
      goats: removedGoat,
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} removeGoat={this.removeGoat} />)
    );

    return (
      <div className='GoatCoral d-flex flex-wrap'>
        {renderGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
