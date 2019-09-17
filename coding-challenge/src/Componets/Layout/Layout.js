import React from "react"
import classes from "./Layout.css"
//import Aux from "../../HOC/Auxillary"
import Toolbar from "../Navigation/Toolbar/Toolbar"
//import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import Login from "../UI/Login/Login"
import Register from "../UI/Register/Register"
import {Switch, Route } from "react-router-dom"

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Toolbar />
              
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>

                   

                <div className={classes.Content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout