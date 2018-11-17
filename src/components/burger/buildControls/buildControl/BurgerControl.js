import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = (props) => {
    return (
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>less</button>
            <button className={classes.More}>more</button>
        </div>
    );
};

export default BurgerControl;