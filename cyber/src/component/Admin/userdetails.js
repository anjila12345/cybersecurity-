import axios from 'axios'
import React from 'react'

class UserDetail extends React.Component {
  DeleteUser = () => {
    axios.delete(`http://localhost:3000/delete/${this.props.hid}`)
      .then(() => {
        // Reload the page after successful deletion
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        // Handle error appropriately (e.g., show a message to the user)
      });
  }
  render() {
    return (

      <tbody>

        <tr>
          <td><img src={"" + this.props.image} width="40px" height="40px" className="img-circle" alt="avatar" /></td>

          <td>{this.props.firstname} </td>
          <td>{this.props.lastname}</td>
          <td>{this.props.role}</td>
          <td>{this.props.email}</td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.DeleteUser}> <i className="fa fa-trash" ></i> Delete </button>
          </td>
        </tr>

      </tbody>
    )
  }


}
export default UserDetail