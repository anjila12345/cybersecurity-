import axios from 'axios'
import React from 'react'

class UserDetail extends React.Component {
  DeleteUser = () => {
    axios.delete('http://localhost:3000/del/' + this.props.hid)
    window.location.reload();
  }

  render() {
    return (

      <tbody>

        <tr>
          <td><img src={"http://localhost:3000/image/" + this.props.image} width="40px" height="40px" className="img-circle" alt="avatar" /></td>

          <td>{this.props.firstname} </td>
          <td>{this.props.lastname}</td>
          <td>{this.props.role}</td>
          <td>{this.props.email}</td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.DeleteUser} > <i className="fa fa-trash" ></i> Delete </button>
          </td>
        </tr>

      </tbody>
    )
  }


}
export default UserDetail