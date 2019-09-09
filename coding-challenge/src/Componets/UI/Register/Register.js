import React from "react"

class Register extends React.Component {

    submitRegister = () => {
        console.log("register")
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name"></input>
                    <br/>
                    <input type="text" placeholder="Last Name"></input>
                    <br/>
                    <input type="text" placeholder="Email"></input>
                    <br/>
                    <input type="text" placeholder="Password"></input>
                    <br/>
                    <button onClick={this.submitRegister}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register