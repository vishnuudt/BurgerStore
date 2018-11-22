import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import axios from 'axios';

import Burger from '../../components/burger/Burger';
import BurgerControls from '../../components/burger/buildControls/BurgerControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';
import Spinner from '../../components/ui/spinner/LoadingSpinner';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese : 0,
            meat : 0,
            salad : 0,
            bacon : 0
        }, 
        ordering:false, 
        loading:true
    }

    componentDidMount(){
        console.log("top", this.props);
        console.log("This is where axios needs to fetch data and re-render the page");
        axios.get('http://localhost:3001/automations/1')
            .then((response) => {
                console.log(response.data);
                setTimeout(() => { this.setState({loading:false})}, Math.random() * 10000);
            })
            .catch(error => {
                console.error(error);
                setTimeout(() => { this.setState({loading:false})}, Math.random() * 10000);
            });
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

        purchase: () => {
            this.setState({ordering: true});
        },

        stopOrdering: () => {
            this.setState({ordering: false});
        },

        continueOrdering: () => {
            this.setState({ordering: false});
        }
    }

    render(){
        let orderSummary =  <OrderSummary ingredients={this.state.ingredients} 
            price={"5"} 
            cancel={this.handler.stopOrdering}
            continue={this.handler.continueOrdering} />;
        
        return (
            <Aux>
                { this.state.loading ? <Spinner /> : null }
                <Modal show={this.state.ordering} closed={this.handler.stopOrdering}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BurgerControls 
                    less={this.handler.subtractIngredient}
                    more={this.handler.addIngredient}
                    orderingHandle={this.handler.purchase}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;