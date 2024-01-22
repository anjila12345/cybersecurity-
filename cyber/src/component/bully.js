import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class Bully extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          id: "",
          fname: '',
          lname: '',
          number: '',
          dob: '',
          gender: '',
          email: '',
          password: '',
          user: '',
          image: '',
          imagePreviewUrl: '',
          config: {
            headers: {
              'content-type': 'multipart/form-data',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        }
      }
    
    
    
    
      componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
          .then((response) => {
            //S alert(response.data.fname)
            this.setState({
              user: response.data,
              id: response.data._id,
              fname: response.data.fname,
              lname: response.data.lname,
              number: response.data.number,
              dob: response.data.dob,
              gender: response.data.gender,
              email: response.data.email,
              password: response.data.password
            })
    
          })
    
      }
    
      render() {
                   
        return (
<div id="course" class="our-team-area area-padding">
                        <div class="container1">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Cyber Bullies</h2>
                                        <h4> How to identify cyber bullying?
                                        </h4>
                                        <img id="courseimg" src="../img/bully.png" alt="" />
                                          
                                    </div>
                                    
                                </div>
                                
                            </div> 
      
           
             
                        </div>

                        <div id="about" class="about-area area-padding">
                        <div class="container">
                            
                            <div class="row">
                                <div class="col-xs-6 ">
                                    <div class="well-left">
                                        <div class="single-well">
                                        <iframe className='videoc'
src="https://www.youtube.com/embed/916K8xRxQZw?si=EzCpahDUh3Lvww4E">
</iframe> 

                                        </div>
                                    </div>

                                </div>

                                <div class="col-xs-6 ">
                                    <div class="well-middle">
                                        <div class="single-well">
                                            <a href="#">
                                                <h4 class="sec-head"></h4>
                                            </a>
                                           
                            <h2>Trolling</h2>
                          
                                                <ul>
                                                <li>
                                                    <i class="fa fa-check"></i> Trolling is when a person intentionally tries to incite negative reactions by posting inflammatory or attacking comments online, such as in a social media group.
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Trolling is a form of cyberbullying when it’s done with malicious and harmful intent.
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Trolling bullies tend to be more interested in creating conflict generally and don’t have a personal relationship with their victims.
                                                    </li>

                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="about" class="course-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Ways to Prevent Cyberbullying Online</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col-xs-6 ">
                                    <div class="well-left">
                                        <div class="single-well">
                                            <a href="#">
                                                <img id="aboutimg" src="../img/kids.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-6 ">
                                    <div class="well-middle">
                                        <div class="single-well">
                                            <a href="#">
                                                <h4 class="sec-head"></h4>
                                            </a>
                                            <p>
                                                </p>
                                            <ul>
                                                <li>
                                                    <i class="fa fa-check"></i> Manage privacy settings online
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Protect your passwords
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Don’t respond or retaliate
                                                    </li>
                                                    <li>
                                                    <i class="fa fa-check"></i> Report cyberbullying to partents
                                                    </li>
                                                    <li>
                                                    <i class="fa fa-check"></i> Keep Data Secure
                                                    </li>
                                                    
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="about" class="course-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Top 10 Forms of Cyber Bullying</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                              

                                <div class="col-xs-6 ">
                                    <div class="well-middle">
                                        <div class="single-well">
                                            <a href="#">
                                                <h4 class="sec-head"></h4>
                                            </a>
                                            <p>
                                                </p>
                                            <ul>
                                                <li>
                                                    <i class="fa fa-check"></i> Cyberstalking
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Harressment
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Fake Profiles
                                                    
                                                    </li>

                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 ">
                                    <div class="well-left">
                                        <div class="single-well">
                                            <a href="#">
                                            <iframe className='videoc' src="https://www.youtube.com/embed/0Xo8N9qlJtk" ></iframe>
 </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
          
 </div>
 
        )
    }


}
export default Bully