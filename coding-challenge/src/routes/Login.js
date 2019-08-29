import React from "react"

class Login extends React.Component {
    constructor() {
        super()
        this.setState = {
            userName: "",
            email: "",
            password: "",
            isAdmin: false
        }
    }
render() {
    return(
        <div>
            <form>
                <input type="text" placeholder="userName"></input>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
                <p>Admin</p>
                <input type="checkbox"></input>
                <button>Submit</button>
            </form>


        </div>
    )
}

}

export default Login