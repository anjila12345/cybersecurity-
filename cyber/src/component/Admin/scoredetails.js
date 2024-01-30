import React, { Component } from 'react';
import axios from 'axios';
import LeaderboardDetail from '../../component/leaderboarddetails';
import Header from '../../component/Admin/header2';
import AdminNavi from '../../component/Admin/headeradmin'

class Leader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      feedbacks: null,
      id: '',
      comment: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    };
  }

  async componentDidMount() {
    try {
      const loginCheckResponse = await axios.get('http://localhost:3000/logincheck', this.state.config);
      this.setState({
        id: loginCheckResponse.data._id,
        isLoggedIn: true,
        user: loginCheckResponse.data,
        email: loginCheckResponse.data.email,
        image: loginCheckResponse.data.image
      });

      const findFeedResponse = await axios.get("http://localhost:3000/leaderboard");
      this.setState({ feedbacks: findFeedResponse.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { feedbacks } = this.state;

    // Check if feedbacks is null or undefined
    if (!feedbacks) {
      return null;  // or render a loading state or an error message
    }

    // Sort feedbacks by score in descending order
    const sortedFeedbacks = [...feedbacks].sort((a, b) => b.score - a.score);

    const leaderboardRows = sortedFeedbacks.map((post, index) => (
        <LeaderboardDetail
          key={post.user_id._id}
          post={post}
       // Pass the position to each LeaderboardDetail
        />
      ));

    return (
        <div>
        <Header />
        <AdminNavi />
        <div className="content-wrapper1" style={{ marginleft: "0 px" }}>

            <section id="candidates" className="content-header">
                <div className="container">
                    <div className="row">

                        <div className="col-md-9 bg-white padding-2">

                            <table id="example2" className="table">
                                <thead id="thead">
                                    <th>Profile</th>
                                    <th>Fullname</th>
                                    <th>Score</th>
                                 
                                   
                                </thead>
                                {leaderboardRows}
                            </table>
                        </div>

                    </div>
                </div>
            </section>

        </div>
   
    </div>
)
  }
}

export default Leader;