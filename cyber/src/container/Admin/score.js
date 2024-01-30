import React from 'react';
import axios from 'axios';

import Leaderboard from '../../component/Admin/scoredetails';

class Leader extends React.Component {
  

    render() {
       

        return (
            <div>
               
                <Leaderboard  />
              
            </div>
        );
    }
}

export default Leader;
