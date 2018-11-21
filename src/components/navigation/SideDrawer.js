import React from 'react';
import classes from './SideDrawer.module.css';
import Aux from '../../hoc/Aux';
import NavItems from './NavItems';
import Logo from '../ui/Logo';
import Backdrop from '../ui/backdrop/Backdrop';

const sideDrawer = ( props ) => {
  //variable that toggles between 'close' and 'open' class
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      {/* when 'Backdrop' is clicked 'close' is passed to handler to hide backdrop and close 'sideDrawer' */}
      <Backdrop show={props.open} clicked={props.close}/>
      {/* the 'attachedClasses' array is joined and is added as styling to the dive that shows the components in 'sideDrawer'*/}
      <div className={attachedClasses.join(' ')}>
        {/* styling for logo is set differently in the 'sideDrawer'*/}
        <Logo height='11%' margin='30px'/>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  )
}
export default sideDrawer
