import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {

    render(){
        return (
            <Aux>
                <Burger></Burger>
                <div>builder controls for burger</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;