import React from "react"
import classes from "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false
        }
    } 

    submitLogin = () => {
       this.setState({isLoggedin: true})
    }

   
    render() {
        return(
            <div className={classes.Login}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email"></input>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="Password"></input>
            <br/>
            <button onClick={this.submitLogin}>Login</button>
        </div> 
            
        )
    }
}

export default Login