import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import  Header from './headeradmin';
class Signuppage extends React.Component {
    constructor() {
        super();
        this.state = {
            'firstname': '',
            'lastname': '',
            'username': '',
            'email': '',
            'password': '',
            'role': '',
            redirect: false,

            fnameerror: '',
            lnameerror: '',
            roleerror: '',
            emailerror: '',
            passworderror: '',
            usernameerror: ''

        }
    }
    setError = () => {
        let isError = false;
        const errors = {
            fnameerror: '',
            lnameerror: '',
            doberror: '',
            gendererror: '',
            emailerror: '',
            passworderror: '',
            numbererror: ''
        };
        if (this.state.firstname === '') {
            isError = true;
            errors.fnameerror = "Enter First name";
        }

        if (this.state.lastname === '') {

            isError = true;
            errors.lnameerror = "Enter Last Name";
        }


        if (this.state.username === '') {
            isError = true;
            errors.usernameerror = "Enter Username";
        }
        if (this.state.role === '') {
            isError = true;
            errors.roleerror = "Enter Role";
        }

        const emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        if (!emailPattern.test(this.state.email)) {
            isError = true;
            errors.emailerror = "Enter valid Email Address";
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
    sendUser = (e) => {
        e.preventDefault();
        const err = this.setError();
        if (!err) {
            const data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
            }
            axios.post('http://localhost:3000/register', data).then(() => {

                this.setState({
                    redirect: true
                });
                setTimeout(function () {
                    alert('Admin created successfully')

                    window.location.reload()
                }, 1000);
            })
        }


    }







    handleRedirect() {
        if (this.state.redirect) {

            return <Redirect to='/addadmin' />

        }
    }

    render() {

        return (
            <div>
                {this.handleRedirect()}

                <Header/>
                <div className="content-wrapper1">
                    <div className="register-box">

                        <div className="register-box-body1">
                            <form>
                                <h2 className="login-box-msg"> <b>Create admin profile </b></h2>
                                <div className="form-group has-feedback">
                                    <input className="form-control input" type="text" id="firstname" value={this.state.firstname} onChange={(event) =>
                                        this.setState({ firstname: event.target.value })} placeholder="First name" required />
                                    <error className="errormsg">
                                        {this.state.fnameerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback"></span>

                                </div>
                                <div className="  form-group has-feedback">
                                    <input className="form-control input" type="text" id="lastname" value={this.state.lastname} onChange={(event) =>
                                        this.setState({ lastname: event.target.value })} placeholder="Last name" required />
                                    <error className="errormsg">
                                        {this.state.lnameerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback"></span>

                                </div>

                                <div className="form-group has-feedback">
                                    <input className="form-control input" type="email" id="email" value={this.state.email} onChange={(event) =>
                                        this.setState({ email: event.target.value })} placeholder="Email" required />
                                    <error className="errormsg">
                                        {this.state.emailerror}
                                    </error>
                                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>

                                </div>
                                <div className="form-group has-feedback">

                                    <input className="form-control input" type="text" id="username" value={this.state.username} onChange={(event) =>
                                        this.setState({ username: event.target.value })} placeholder="Username" required />
                                    <error className="errormsg">
                                        {this.state.usernameerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback"></span>

                                </div>
                                <div className="form-group has-feedback">

                                    <input className="form-control input" type="text" id="role" value={this.state.role} onChange={(event) =>
                                        this.setState({ role: event.target.value })} placeholder="Role" required />
                                    <error className="errormsg">
                                        {this.state.roleerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback"></span>

                                </div>

                                <div className="form-group has-feedback">

                                    <input className="form-control input" type="password" id="password" value={this.state.password} onChange={(event) =>
                                        this.setState({ password: event.target.value })} placeholder="Password" required />
                                    <error className="errormsg">
                                        {this.state.passworderror}
                                    </error>
                                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>

                                </div>


                                <button type="submit" className="btn btn-primary btn-block btn-flat" id="Signup" onClick={this.sendUser}>Sign Up</button>

                            </form>

                        </div>




                    </div>


                </div>
            </div>


        )
    }
}
export default Signuppage
