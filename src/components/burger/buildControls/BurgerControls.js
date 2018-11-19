import React from 'react';

import classes from './BurgerControls.module.css';
import BurgerControl from './buildControl/BurgerControl';

//an array of build key value pairs for controls
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
];

const BurgerControls = (props) => {

    return (<div className={classes.BurgerControls}>
            { 
                controls.map((ctrl) => {
                return (
                    <BurgerControl key={ctrl.label} label={ctrl.label}
                        less={() => {
                            console.log("clicked"); props.less(ctrl.type);
                        }}
                        more={() => {
                            console.log("clicked"); props.more(ctrl.type);
                        }}
                    />);
                })
            }
            <button className={classes.OrderButton} onClick={props.orderingHandle}>
            Checkout
            </button>
            </div>);
}

export default BurgerControls;