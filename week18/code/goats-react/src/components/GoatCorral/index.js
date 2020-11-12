import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';
import GoatForm from '../GoatForm';

class GoatCorral extends Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.loadData();
  }

  addUpdateGoat = (goatObject) => {
    if (goatObject.id === '') {
      goatData.addGoat(goatObject)
        .then((response) => {
          if (!response.error) {
            this.loadData();
          }
        });
    } else {
      goatData.updateGoat(goatObject)
        .then((response) => {
          if (!response.error) {
            this.loadData();
          }
        });
    }
  }

  loadData = () => {
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

    goatData.deleteGoat(e.target.id)
      .then(() => {
        this.loadData();
      });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => (
      goats.map((goat) => (
        <Goat
          key={goat.id}
          goat={goat}
          removeGoat={this.removeGoat}
          addUpdateGoat={this.addUpdateGoat}
        />
      ))
    );

    return (
      <>
        <GoatForm goat={''} addUpdateGoat={this.addUpdateGoat} />
        <div className='GoatCoral d-flex flex-wrap'>
          {renderGoatToDom()}
        </div>
      </>
    );
  }
}

export default GoatCorral;
