import React from 'react'
import Course from '../component/course';
import Header from '../component/header2';
import Footer from '../component/footer';
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class Course1 extends React.Component {
    constructor() {
        super()

        this.state = {
            id: '',
            
         
            name: '',
           
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
          .then((response) => {
            this.setState({
              user: response.data,
              id: response.data._id
            })
    
          })
      }

    render() {
       
        return (
            <div>
                <Header/>
                <Course/>
                <Footer/>




            </div>

        )
    }


}
export default Course1
