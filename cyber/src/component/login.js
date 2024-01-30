

import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            role: '',
            isLoggedIn: false,
           usernameerror: '',
            passworderror: ''
        }
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    setError = () => {
        let isError = false;
        const errors = {

            usernameerror: '',
            passworderror: '',

        };

    
        
        
        if (this.state.username === '') {
            isError = true;
            errors.usernameerror = "Please provide username";
          }
      
        if (this.state.password.length < 8) {
            isError = true;
            errors.passworderror = "Password must be atleast 8 character";
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }
    submitForm = (e) => {
        e.preventDefault();
        const err = this.setError();
        if (!err) {
            axios.post('http://localhost:3000/login', this.state)
                .then((response) => {
                    console.log(response.data)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('role', response.data.user.role)
                    // alert(response.data.user.user_type)
                    this.setState({ isLoggedIn: true })

                }).catch((err) => console.log(err.response))
            this.setState({ username: '', password: '' })
        }
    }
    render() {
        // alert(localStorage.getItem('user_type'))
        if (this.state.isLoggedIn === true && localStorage.getItem('role') == "User") {
            return <Redirect to='/service' />
        } if (this.state.isLoggedIn === true && localStorage.getItem('role') == "admin") {
            return <Redirect to='/addadmin' />
        }
      
        return (
            <div class="login">
                <div className="login-box">
                    <div className="login-box-body">
                    <img class="loginimg" src="../img/login.png" alt="" />
                                        
                        <form class="loginform">

                            <h2 className="login-box-msg"> <b>Member Login </b></h2>
                            <div className="form-group has-feedback">
                                <input type='username' class="form-control input" placeholder="Username" name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                                <error className="errormsg">
                                    {this.state.usernameerror}
                                </error>
                               
                            </div>
                            <div class="form-group has-feedback">
                                <input type='password' class="form-control input" placeholder="Password" name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                                <error className="errormsg">
                                    {this.state.passworderror}
                                </error>
                               
                            </div>
                            <div class="btn-login">
                                <button class="btn btn-primary loginbtn" id="Signin" onClick={this.submitForm} type="submit">Sign In</button>
                            </div>
                            <div class="form-group textlogin">
                                Don't have an account? <a href="register" id="registerh">Register Now</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        )
    }


}

export default Login

