import React, { Component } from 'react';
import axios from 'axios';

class LeaderboardDetail extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { post, isTopScorer, position } = this.props;

    let badgeImage;

    if (position === 1) {
      badgeImage = <img src="../img/gold.png" alt="Gold Badge" className="badge-image" />;
    } else if (position === 2) {
      badgeImage = <img src="../img/silver.png" alt="Silver Badge" className="badge-image" />;
    } else if (position === 3) {
      badgeImage = <img src="../img/bronze.png" alt="Bronze Badge" className="badge-image" />;
    }

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
