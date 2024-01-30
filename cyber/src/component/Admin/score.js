import React, { Component } from 'react';
import axios from 'axios';

class LeaderboardDetail extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { post } = this.props;

  

    return (
      <tr className={isTopScorer ? 'top-scorer-row' : ''}>
        <td className='tablebb'>
          <img src={`http://localhost:3000/image/${post.user_id?.image}`} alt="User Avatar" width="40px" height="40px" className="img-circle" />
          {badgeImage}
        </td>
        <td className='tablebb'>
          <p>{post.user_id?.firstname ?? 'N/A'} {post.user_id?.lastname ?? 'N/A'}</p>
        </td>
        <td className='tablebb'>
          <p>{post.score}</p>
        </td>
      </tr>
    );
  }
}

export default LeaderboardDetail;
