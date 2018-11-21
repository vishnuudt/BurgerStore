import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../ui/Button';

const orderSummary = ( props ) => {
  const ingredientSumary = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item}> <span style={{textTransform:'capitalize'}}>{item}</span>: {props.ingredients[item]}</li>
    )
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredientSumary}
      </ul>
      <p>Total: ${props.price}</p>
      <p>Checkout?</p>
      <Button buttonType="Success" clicked={props.continue}> Continue</Button>
      <Button buttonType="Danger" clicked={props.cancel}> Cancel</Button>
    </Aux>
  )
}
export default orderSummary
