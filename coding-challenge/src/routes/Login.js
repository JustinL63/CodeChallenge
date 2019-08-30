import React from "react"

class Login extends React.Component {
    constructor() {
        super()
            this.setState=({
                user: [
                    {userName: "", email: "", password: "", admin: false }
                ]
            })

    }
    render() {
        return(
            <div>
                <form>
                    <input type="text" name="userName" placeholder="User Name"/>
                    <br/>
                    <input type="text" name="email" placeholder="Email"/>
                    <br/>
                    <input type="text" name="password" placeholder="Password"/>
                    <br/>
                    <p>Are You an Administrator?</p>
                    <input type="checkbox" name="admin"/>
                </form>

            </div>
        )
    }
}

export default Login