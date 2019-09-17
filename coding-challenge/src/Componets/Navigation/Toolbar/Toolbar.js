import React from "react"
import classes from "./Toolbar.css"

import {NavLink} from "react-router-dom"

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default toolbar