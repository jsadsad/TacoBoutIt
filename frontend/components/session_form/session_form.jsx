import React from 'react'
import { withRouter } from "react-router" 
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            age: '',
            location: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleField(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(() => this.props.history.replace('/'))
    }

    render() {
        if (this.props.formType === "login") {
            return (
                <div className="session-form">
                    <div className="signin-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <p>Sign In:</p>
                            <div>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.handleField('email')}
                                    placeholder="Email"
                                />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.handleField('password')}
                                    placeholder="Password"
                                />
                                <input className="click-login" type="submit" value={this.props.formType} />
                            </div>
                        </form>
                    </div>
                    
                </div>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <div>
                    <div className="header">
                        <Link className="title" to="/">TacoBoutIt</Link>
                    </div>
                    <div className="session-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="signup-wrapper">
                                <h3 className="signup-for">Sign Up for TacoBoutIt</h3>
                                <div className="signup-subhead">Connect with great local businesses</div>
                                <div className="terms">
                                    By continuing, you agree to TacoBoutIt's Terms of Service and acknowledge TacoBoutIt's Privacy Policy.
                                </div>
                                <div className="demo" onClick={this.handleClick}>Demo User</div>
                                <div>
                                    <fieldset className="sep-line">
                                        <legend align="center">
                                        OR 
                                        </legend>
                                    </fieldset>
                                </div>
                                <div className="sign-up-form">
                                    <div className="sign-up-name">
                                        <input type="text"
                                            value={this.state.first_name}
                                            onChange={this.handleField('first_name')}
                                            placeholder="First Name"
                                        />
                                        <input type="text"
                                            value={this.state.last_name}
                                            onChange={this.handleField('last_name')}
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="sign-up-email">
                                        <input type="text"
                                            value={this.state.email}
                                            onChange={this.handleField('email')}
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="sign-up-password">
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.handleField('password')}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="sign-up-age">
                                        <input type="number"
                                            value={this.state.age}
                                            onChange={this.handleField('age')}
                                            placeholder="Age"
                                        />
                                    </div>
                                    <div className="sign-up-location">
                                        <input type="location"
                                            value={this.state.location}
                                            onChange={this.handleField('location')}
                                            placeholder="Location"
                                        />
                                    </div>
                                    <input className="click-signup" type="submit" value={this.props.formType} />
                                    <div className="already-exists">Already on TacoBoutIt? <Link to="/login">Log in</Link></div>
                                </div>
                            </div>
                        </form>
                        <div className="classy-image">
                            <img src={window.classyImage} alt="A Classy Image" />
                        </div>
                    </div>
                </div>
            )
        }   
    }
}

export default withRouter(SessionForm)
