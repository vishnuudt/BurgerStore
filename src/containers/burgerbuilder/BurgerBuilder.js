import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/burger/Burger';
import BurgerControls from '../../components/burger/buildControls/BurgerControls';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese : 0,
            meat : 0,
            salad : 0
        }   
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BurgerControls />
            </Aux>
        );
    }

}

export default BurgerBuilder;