import React from "react"
import classes from "./Layout.css"
//import Aux from "../../HOC/Auxillary"
import Toolbar from "../Navigation/Toolbar/Toolbar"
//import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import Login from "../UI/Login/Login"

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Toolbar />
             
                <Login/>

            <div className={classes.Content}>
                {this.props.children}
            Something</div>
            </div>
        )
    }
}

export default Layout