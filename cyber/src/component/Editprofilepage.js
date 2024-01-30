import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class Editprofilepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      firstname: '',
      lastname: '',
     
      email: '',
      password: '',
      username:'',
      user: '',
      image: '',
   
      config: {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    }
  }



  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }


  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
      .then((response) => {
        //S alert(response.data.fname)
        this.setState({
          user: response.data,
          id: response.data._id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          username: response.data.username,
          email: response.data.email,
          password: response.data.password
        })

      })

  }

  UpdateData = () => {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
  
     username: this.state.username,
      email: this.state.email,
   
      password: this.state.password
    }
    axios.put("http://localhost:3000/updates/" + this.state.id, data).then(
      setTimeout(function () {
        alert("Successfully updated");
        window.location.reload();
      }, 1000)
    )

  }
  handlechange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  render() {

    return (
      <div >

        <div className="content-wrapper1 editpage">

          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">

                <div className="col-md-9 bg-white padding-2 editpage2">
                  <div className="title-post">
                    <h2><i>Profile</i></h2>
                  </div>
                  <div className="box box-primary">
                  

                    <form>
                      <div className="box-body">
                        <div className="title-box">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div className="col-xs-6 form-group">
                            <label >First Name</label>
                            <input type="text" className="form-control" id="fname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handlechange} />

                          </div>
                          <div className="col-xs-6 form-group">
                            <label >Last Name</label>
                            <input type="text" className="form-control" id="lname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handlechange} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label for="email">Email address</label>
                          <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.user.email} readonly />
                        </div>

                      
                        <div className="form-group">
                          <label >Username</label>
                          <input type="text" className="form-control" id="email" placeholder="Username" value={this.state.user.username} readonly />
                        </div>


           


                        <div className=" form-group">
                          <label for="password">Password</label>
                          <input type="text" className="form-control" id="lname" name="password" placeholder="New Password" value={this.state.password} onChange={this.handlechange} />
 </div>
                        <div className="form-group">
                          <button type="button"  onClick={this.UpdateData} className="btn btn-flat btn-primary">Submit</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



      </div>

    )
  }
}
export default Editprofilepage
