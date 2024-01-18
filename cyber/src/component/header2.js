import React from 'react'
import axios from 'axios'


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            singleFeed: {},
            post_status: '',
            profileimage: '',
            name: '',
            post: [],
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                //alert(response.data._id);
                this.setState({
                    id: response.data._id,
                    user: response.data,
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    gender: response.data.gender,
                    dob: response.data.dob
                })
            })
    }

  
    render() {

        return (
            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex">

                        <div class="logo mr-auto">
                            <h1 class="text-light"><a href="/">CyberEd</a></h1>

                        </div>

                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="/" id="home">Home</a></li>
                                <li><a href="#about" id="about">About</a></li>
                                <li><a href="services" id="services">Services</a></li>
                                
                                <li><a href="#contact" id="contact">Contact</a></li>
                                <li class="drop-down"><a href=""><i class="fa fa-user"> </i>{this.state.user.firstname} <i class="fa fa-angle-down"></i></a>
                                    <ul>
                                  <li>  <a href="Login" onClick={this.LogOut}><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
                                    </ul>
                                </li>


                            </ul>
                        </nav>

                    </div>
                </header>
            </div>
        )
    }

}
export default Header
