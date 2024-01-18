import React from 'react'
import Signuppage from '../component/register';
import Header from '../component/header';
import Footer from '../component/footer';

class Signup extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <Signuppage/>
                <Footer/>

            </div>

        )
    }


}
export default Signup
