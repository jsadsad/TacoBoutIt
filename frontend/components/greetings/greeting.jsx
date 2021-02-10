import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {
    const resourceLink = () => (
        <div>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    )

    const greeting = () => (
        <div>
            <h1>Hello, {currentUser.email}</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? greeting() : resourceLink()
}

export default Greeting;