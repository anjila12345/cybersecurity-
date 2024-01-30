import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from './component/PrivateRouter';

import Home1 from './container/home';
import Home2 from './container/home2';
import Loginpage from './container/login';
import Signup from './container/register';
import Course1 from './container/course';
import Bully1 from './container/bully';
import Security from './component/security';
import Service from './container/service';
import Quiz1 from './component/quiz';
import QuizApp from './component/quiz1';

import Services from './container/services';

import Admin from './container/Admin/signup';
import Userdetails from './container/Admin/userdetails';
import leader from './container/leaderboard';
import Editprofile from './container/Editprofile'

import Game from './container/game';

import Scoredetails from './container/Admin/score';
class Router extends Component {
    render() {
        
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home1} />
                    <Route exact path="/index" component={Home2} />
                   
                    <Route exact path="/login" component={Loginpage} />
                    <Route exact path="/register" component={Signup} />
                    <PrivateRoute exact path="/course" component={Course1} />
                    <PrivateRoute exact path="/bully" component={Bully1} />
                    <PrivateRoute exact path="/security" component={Security} />\
                    <Route exact path="/quiz" component={Quiz1} />
                    <Route exact path="/services" component={Service} />\
                    
                    <Route exact path="/service" component={Services} />\
                    <PrivateRoute exact path="/quiz1" component={QuizApp} />\

                    <PrivateRoute exact path="/addadmin" component={Admin} />\
                    <PrivateRoute exact path="/userdetails" component={Userdetails} />\
                    <PrivateRoute exact path="/leader" component={leader} />
                    <PrivateRoute exact path="/scoredetails" component={Scoredetails} />
                  
                    <PrivateRoute exact path="/Editprofile" component={Editprofile} />
                    
                    <Route exact path="/game" component={Game} />\
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;
