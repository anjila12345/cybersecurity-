import React from 'react'

import Footer from '../component/footer';

class Service extends React.Component{
    
  

    render() {

        return (

            <div>
              
                <div id="team" class="our-team-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Our Services</h2>
                                        <h4>Explore<br/>
                                      
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="game">
                                                <img src="../img/puzzle.png" alt="" id="teamimg" />
                                            </a>
                                           
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Games</h4>
                                            <p>Solve word puzzle</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="quiz1">
                                                <img src="../img/quiz.png" alt="" id="teamimg" />
                                            </a>
                                           
                                        </div>
                                        <div class="team-content text-center">
                                        <h4>Quiz</h4>
                                            <p>Learn solving quiz</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="course">
                                                <img src="../img/learn.jpg" alt="" id="teamimg" />
                                            </a>
                                            
                                        </div>
                                        <div class="team-content text-center">
                                        <h4>Courses</h4>
                                            <p>Learn through our online courses</p>
                                        </div>
                                    </div>
                                </div>
                              

                               
                        </div>
                        </div>
                    </div>

                <Footer/>
            </div>
        )
    }


}
export default Service