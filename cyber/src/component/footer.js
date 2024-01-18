import React from 'react'



class Footer extends React.Component {

    render() {

        return (
            <div>
                <footer>
                    <div class="footer-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="footer-content">
                                        <div class="footer-head">
                                            <div class="footer-logo">
                                                <h2>About</h2>
                                            </div>
                                            <div class="footer-contacts">
                                                <p> <a href="signin">Our team</a></p>
                                                <p> <a href="signup">Terms and Condition</a></p>
                                                <p>  <a href="Newsfeed">Privacy and Policies</a></p>
                                           
                                            </div>
                                             
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="footer-content">
                                        <div class="footer-head">
                                            <h4>Useful Links</h4>
                                            <div class="footer-contacts">
                                                <p> <a href="signin">Login</a></p>
                                                <p> <a href="signup">Register</a></p>
                                                <p>  <a href="Newsfeed">Games</a></p>
                                                <p>  <a href="postjob">Quiz</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="footer-content">
                                        <div class="footer-head">
                                            <h4>Suscribe</h4>
                                            <form>
                                            <input type='name' class=" input1" placeholder="Suscribe" />
                               
                                            </form>
                                            <div class="footer-icons">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="fa fa-google"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                </div>
                                        </div>
                                    </div>
                                </div>

                             
                            </div>
                            
                        </div>
                    </div>
                    <div class="footer-area-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="copyright text-center">
                                        <p>
                                            &copy; Copyright <strong>Cybersecurities</strong>. All Rights Reserved
              </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>

        )
    }


}
export default Footer
