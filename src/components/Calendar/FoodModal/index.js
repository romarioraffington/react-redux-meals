// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading'
import Modal from 'react-modal';
import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right';

// Our Components 
import FoodList from './FoodList';

class FoodModal extends Component {
  static propTypes = {
    meal: PropTypes.string,
    day: PropTypes.string,
    food: PropTypes.array,
    isLoadingFood: PropTypes.bool.isRequired,
    isFoodModalOpen: PropTypes.bool.isRequired,
    closeFoodModal: PropTypes.func.isRequired,
    searchFood: PropTypes.func.isRequired,
  }

  render() {
    const { 
      isLoadingFood, 
      isFoodModalOpen, 
      closeFoodModal, 
      searchFood,
      food,
      meal, 
      day 
    } = this.props;

    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={isFoodModalOpen}
        onRequestClose={closeFoodModal}
        contentLabel="Modal"
      >
        <div>
          { isLoadingFood
            ? <Loading delay={200} type="bubbles" color="#222" className="loading"/>
            : <div className="search-container">
                <h3 className="subheader">
                  Find a meal for {day} {meal}
                </h3>
                <div className="search">
                  <input
                    type="text"
                    className="food-input"
                    placeholder="Search Foods"
                    ref={input => this.input = input}
                  />
                  <button
                    className="icon-btn"
                    onClick={() => searchFood(this.input.value)}>
                      <ArrowRightIcon size={30} />
                  </button>
                </div>
                { food !== null && (
                  <FoodList 
                    food={food}
                    onSelect={ recipe => {
                      closeFoodModal()
                    }}
                  />
                )}
              </div>
            } 
        </div>
      </Modal>
    )
  }
}

export default FoodModal;