import React, { Component } from 'react';
import axios from 'axios';
import LeaderboardDetail from '../component/leaderboarddetails';
import Header from '../component/quizheader';

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
          isTopScorer={index === 0} // Add this prop to highlight the top scorer
          position={index + 1} // Pass the position to each LeaderboardDetail
        />
      ));

    return (
      <div className='quizboard'>
        <Header />
        <div className="board">
          <div className="container">
            <div className="row">
              <div className="col-md-9 bg-white padding-2">
                <img src="../img/ribbion1.png" alt="" className="imgqquiz" />

                <img src="../img/tt.png" alt="" className="imgtt" />
                <table id="example3" className="table example3">
                  <thead>
                    <tr>
                      <th className='boardtable'>Profile</th>
                      <th className='boardtable'>FullName</th>
                      <th className='boardtable'>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardRows}
                  </tbody>
                </table>
                <img src="../img/ts.png" alt="" className="imgts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leader;