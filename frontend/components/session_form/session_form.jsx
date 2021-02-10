import React from 'react'
import { withRouter } from "react-router" 

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
                <div className="session-form">
                    <div className="signup-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <p>Sign Up:</p>
                            <div>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.handleField('email')}
                                    placeholder="Email"
                                />
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
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.handleField('password')}
                                    placeholder="Password"
                                />
                                <input type="number"
                                    value={this.state.age}
                                    onChange={this.handleField('age')}
                                    placeholder="Age"
                                />
                                <input type="location"
                                    value={this.state.location}
                                    onChange={this.handleField('location')}
                                    placeholder="Location"
                                />
                                <input className="click-signup" type="submit" value={this.props.formType} />
                            </div>
                        </form>
                    </div>
                </div>
            )
        }   
    }
}

export default withRouter(SessionForm)
