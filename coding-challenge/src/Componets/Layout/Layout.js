import React from "react"
import classes from "./Layout.css"
import Aux from "../../HOC/Auxillary"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends React.Component {
    render() {
        return(
            <Aux>
                <Toolbar />
                <SideDrawer />

            <div className={classes.Content}>
                {this.props.children}
            </div>
            </Aux>
        )
    }
}

export default Layout