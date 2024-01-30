import React from 'react'



class Header extends React.Component {
    
    
    render() {

        return (
            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex">

                        <div class="logo mr-auto">
                            <h1 class="text-light"><a href="/">CyberEd</a></h1>

                        </div>

                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="/" id="home">Home</a></li>
                                <li><a href="#about" id="about">About</a></li>
                                <li><a href="services" id="services">Services</a></li>
                                
                                <li><a href="../usermanual.pdf"id="contact">User Guide</a></li>
                                <li class="drop-down"><a href=""><i class="fa fa-user"></i>SignUp<i class="fa fa-angle-down"></i></a>
                                    <ul>
                                        <li><a href="login" id="login">Login</a></li>

                                        <li><a href="register" id="signup">Register</a></li>
                                    </ul>
                                </li>


                            </ul>
                        </nav>

                    </div>
                </header>
            </div>
        )
    }

}
export default Header
