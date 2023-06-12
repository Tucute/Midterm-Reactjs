import React, {Component,useEffect, useState} from 'react';									
import axios from 'axios';																				
import 'react-toastify/dist/ReactToastify.css';									
import Footer from '../layout_admin/footer';
import Nav from '../layout_admin/nav';
import ShowUser from './showUser';

function User() {
    const [user, setUser] = useState([]);											
        
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://6471cfab6a9370d5a41ab469.mockapi.io/users`,
            data: null,
        })
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=> {
            console.log(err);
            alert('Xảy ra lỗi');
        });
    },[]);
				

        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <Nav/>
                        <div className="card-header">
                        <h4>Users</h4>
                        </div>
                        <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>									
                            <tr>
                                <th>ID User</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Avatar</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map(data =>
                                        <ShowUser
                                            id = {data.id}
                                            name={data.name}
                                            phone = {data.phone}
                                            avatar = {data.avatar}
                                            address = {data.address}
                                            email = {data.email}
                                            password = {data.password}
                                        />
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

export default User;