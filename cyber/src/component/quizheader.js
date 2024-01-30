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

  render() {
    const { query } = this.state;
    return (
        <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex">
            
            <nav className="nav-menu d-none d-lg-block quiznav">
           
            <div class="navbar-custom">
            <a href="/quiz1"><i className="fa fa-arrow-circle-o-left quizicon"></i>
          </a>
              <a href="/service"><i className="fa fa-home quizicon"></i>
                <div class="title">Home</div></a>

              <a href="/leader"><i className="fa fa-trophy quizicon "></i>
                <div class="title">Leaderboard</div></a>

              <a href="Editprofile"><i className="fa fa-user quizicon"><div class="titleuser"> {this.state.user.firstname}</div></i>
            
                </a>

         

                <a href="/service" id="logout" >
                          <i className="fa fa-arrow-circle-o-right quizicon"></i> 
                          <div class="title">Quit</div>
                        </a>

            </div>
            
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header
