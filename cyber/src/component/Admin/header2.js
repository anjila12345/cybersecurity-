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

        return (
            <div>
                <header className="main-header">

                    <a href="/" className="logo  ">
                        <span className="logo-lg"><h1><b>CyberEd</b></h1></span>
                    </a>

                    <nav class="navbar navbar-static-top">

                        <div className="img1">
                            <img src={"http://localhost:3000/image/" + this.state.user.image} id="img1" className="img-circle" alt="avatar" />
                        </div>
                    </nav>

                </header>
            </div>

        )
    }


}
export default Header
