import React from 'react'
import axios from 'axios'



class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      id: '',
     
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
        this.setState({
          isLoggedIn: true,
          user: response.data
        })
      });
  }
  LogOut = () => {
    axios.post('http://localhost:3000/logout')
    localStorage.removeItem('token')
  }
  render() {
    const { query } = this.state;
    return (
        <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex">
            <div className="logo mr-auto">
              <h1 className="text-light"><a href="/">CyberEd</a></h1>
            </div>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="index" id="home">Home</a></li>
                <li><a href="#about" id="about">About</a></li>
                <li><a href="service" id="services">Services</a></li>
                <li><a href="#contact" id="contact">Contact</a></li>
            
                  <li className="drop-down">
                    <a href="Editprofile"><i className="fa fa-user">  {this.state.user.firstname} </i> <i className="fa fa-angle-down"></i></a>
                    <ul>
                      <li>
                        <a href="Login" id="logout" onClick={this.LogOut}>
                          <i className="fa fa-arrow-circle-o-right"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
              
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header
