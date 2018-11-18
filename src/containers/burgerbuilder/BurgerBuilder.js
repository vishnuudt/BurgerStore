import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/burger/Burger';
import BurgerControls from '../../components/burger/buildControls/BurgerControls';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese : 0,
            meat : 0,
            salad : 0,
            bacon : 0
        }   
    }


    handler = {
        // when additional ingredients are added to the burger
        addIngredient: ( type ) => {

          //the previous number of the ingredient 'type' clicked is stored
          const old = this.state.ingredients[type];
          //that stored number is incremented by 1
          const added = old + 1
          //a copy of the classes state is created with the spread operator
          const updatedIngredients = {
            ...this.state.ingredients
          };
          //the copied state ingredient being clicked is set equal to the updated quantity
          updatedIngredients[type] = added;

          this.setState({ingredients: updatedIngredients});
        //   //the price of the ingredient clicked is stored
        //   const price = INGREDIENT_PRICES[type]
        //   //the current state price is stored
        //   const oldPrice = this.props.price
        //   //the ingredients price is added to the total
        //   const newPrice = oldPrice + price;
        //   //both the state's price and number of ingredients are updated
        //   this.setState({
        //     total: newPrice, ingredients:updatedIngredients
        //   })
        //   //if the state's total is greater or equal to 4 then the burger checkout button is activated
        //   if (this.props.price >= 4) {
        //     this.setState({ purchasable: true })
        //   } else {
        //     this.setState({ purchasable: false })
        //   }
        },
        subtractIngredient: ( type ) => {
            const old = this.state.ingredients[type];
            //if the number of the ingredient clicked is already 0 then the method is returned without further opperations or else the application breaks
            if (old <= 0) {
                return;
            }
            const subtracted = old - 1
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = subtracted;

            this.setState({ingredients: updatedIngredients});
            // const price = INGREDIENT_PRICES[type]
            // const oldPrice = this.props.price
            // const newPrice = oldPrice - price;
            // this.setState({
            //     total: newPrice, ingredients:updatedIngredients
            // })
            // if (this.props.price >= 4 ) {
            //     this.setState({ purchasable: true})
            // } else {
            //     this.setState({ purchasable: false})
            // }
        },
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BurgerControls 
                    less={this.handler.subtractIngredient}
                    more={this.handler.addIngredient}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;