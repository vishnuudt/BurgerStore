import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import classes from './NavItem.module.css';

const navItem = ( props ) => {
  console.log(props);
  return (
    <li className={classes.NavItem}> 

      { <NavLink
        exact
        to={props.link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink> }
    </li>
  )
}
export default withRouter(navItem);
