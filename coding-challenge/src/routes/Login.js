import React from "react"
//import Login from "./Login.css"

const Login =(props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid black",
        textAlign: "center"

    }
        return(
            <div className="Login" style={style}>
                <form>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    <br/>
                    <input type="text" name="email" placeholder="Email"/>
                    <br/>
                    <input type="text" name="password" placeholder="Password"/>
                    <br/>
                    <p>Are You an Administrator?</p><input type="checkbox" name="admin"/>
                    <br/>
                    <button>Submit</button>
                </form>

            </div>
        )
    }


export default Login