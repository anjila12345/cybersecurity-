import React from 'react'
import Header from '../component/header2';
import Footer from '../component/footer';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class Security extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
        this.state = {
            user:{},
            id:"",
           
            comment:"",
              config: {
                  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
              }
          }
      }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    id:response.data._id,
                    isLoggedIn: true,
                    user:response.data
                    }) 
            });
      
    }

    render(){
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/index' />
          }
       
        return (
            <div>  <Header/>
<div id="team" class="our-team-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Security</h2>
                                        <h4> How to secure your accout.
                                        </h4>
                                    </div>
                                </div>
                            </div>    
                        <div class="c-header">
                            <h2>Strong Password</h2>
                            <p>Trolling is when a person intentionally tries to incite negative reactions by posting inflammatory or attacking comments online, such as in a Reddit thread or a social media group. Trolling is a form of cyberbullying when it’s done with malicious and harmful intent. Trolling bullies tend to be more interested in creating conflict generally and don’t have a personal relationship with their victims.

                            </p></div>
                          
             
           
              <iframe width="420" height="315"
src="https://www.youtube.com/embed/916K8xRxQZw?si=EzCpahDUh3Lvww4E">
</iframe>
                        </div>
 </div>
 <Footer/>
 </div>
        )
    }


}
export default Security