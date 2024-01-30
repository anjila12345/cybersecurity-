import React from 'react'
import UserDetail from '../../component/Admin/userdetails'
import axios from 'axios';
import Header from '../../component/Admin/header2';

import AdminNavi from '../../component/Admin/headeradmin'
class UserDetails extends React.Component {
    state = {
        mydata: []
    }
    componentDidMount() {
        axios.get("http://localhost:3000/finduser").then(res => {
            console.log(res)
            this.setState({ mydata: res.data })
        })
    }

    render() {
        const mydata222 = this.state.mydata.map(hlists => {
            return <UserDetail hid={hlists._id} firstname={hlists.firstname} lastname={hlists.lastname} role={hlists.role}
                email={hlists.email} password={hlists.password} image={hlists.image} />

        })

        return (
            <div>
                <Header />
                <AdminNavi />
                <div className="content-wrapper1" style={{ marginleft: "0 px" }}>

                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">

                                    <table id="example2" className="table">
                                        <thead id="thead">
                                            <th>Profile</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Role</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </thead>
                                        {mydata222}
                                    </table>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
       
            </div>
        )


    }
}

export default UserDetails