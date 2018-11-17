import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const ingredientsKeys = Object.keys(props.ingredients);
    let htmlIngredients = ingredientsKeys.map((igKey)=> {
        const times = props.ingredients[igKey];
        const inter = [...Array(times)]
        .map( (_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        return inter;
    })

    console.log(htmlIngredients);

    htmlIngredients = htmlIngredients.length === 0 ? 
         <p>Please add Ingredient!</p> : htmlIngredients;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {htmlIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;