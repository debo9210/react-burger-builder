//jshint esversion:10
import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //this could be a functional component
  // componentDidUpdate() {
  //   console.log('[orderSummary.js] didUpdate');
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxillary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasedCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchasedContinued}>
          CONTINUE
        </Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;
