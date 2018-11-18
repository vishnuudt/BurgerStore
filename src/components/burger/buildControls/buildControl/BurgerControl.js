import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = (props) => {
    return (
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => {
                console.log("clicked"); props.less();
            }}>less</button>
            <button className={classes.More} onClick={() => {
                console.log("clicked"); props.more();
            }}>more</button>
        </div>
    );
};

export default BurgerControl;