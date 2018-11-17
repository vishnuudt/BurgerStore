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
    console.log("Burger Control");
    return (<div className={classes.BurgerControls}>
            { 
                controls.map((ctrl) => {
                return (<BurgerControl key={ctrl.label} label={ctrl.label}/>);
                })
            }
            </div>);
}

export default BurgerControls;