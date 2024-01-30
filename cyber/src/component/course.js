import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class Course extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            user: {},
            id: "",
            posts: [],
            comment: "",
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    id: response.data._id,
                    isLoggedIn: true,
                    user: response.data
                });
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
                // Handle error or redirect to login page
            });
    }
    render() {
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/login' />
        }
                   
        return (
                   <div id="team" class="our-team-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Let's Start</h2>
                                        <h4>Here's our learning method<br/>
                                        Choose a course
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="bully">
                                                <img src="../img/cb.jpg" alt="" id="teamimg" />
                                            </a>
                                           
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Cyber Bullying</h4>
                                            <p>Learn and get Knowledge<br/>
                                           about cyber bullying</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="browsing">
                                                <img src="../img/safe.png" alt="" id="teamimg" />
                                            </a>
                                           
                                        </div>
                                        <div class="team-content text-center">
                                        <h4>Safe Browsing</h4>
                                            <p>Explore the world of security<br/>
                                          
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="security">
                                                <img src="../img/ss.png" alt="" id="teamimg" />
                                            </a>
                                            
                                        </div>
                                        <div class="team-content text-center">
                                        <h4>Secure your account</h4>
                                            <p>Learn methods of securing account</p>
                                        </div>
                                    </div>
                                </div>
                              

                               
                        </div>
                        </div>
                    </div>
        )
    }


}
export default Course