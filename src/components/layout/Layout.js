import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../navigation/Toolbar';
import SideDrawer from '../navigation/SideDrawer';

class layout extends Component {

state= {
    show: false
}
handler= {
    sideDrawer: () => {
        this.state.show ? this.setState({show: false}) : this.setState({show: true})
    }
}

 render() {
    return <Aux>
        <Toolbar
          open={this.state.show}
          close={this.handler.sideDrawer}/>
        <SideDrawer
          open={this.state.show}
          close={this.handler.sideDrawer}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>
}
}

export default layout;