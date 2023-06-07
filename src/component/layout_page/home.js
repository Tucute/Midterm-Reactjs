import React, {Component,useEffect, useState} from 'react';									
import axios from 'axios';												
import { NavLink } from 'react-router-dom';									
import { ToastContainer, toast } from 'react-toastify';									
import 'react-toastify/dist/ReactToastify.css';									
import {Redirect} from 'react-router-dom';	
import Item from './item';
import Footer from '../layout_admin/footer';
import Nav from '../layout_admin/nav';

function Home() {
    const [product, setProduct] = useState([]);											
        
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp`,
            data: null,
        })
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=> {
            console.log(err);
            alert('Xảy ra lỗi');
        });
    },[]);

                                            
        const onDelete = (id) =>{																		
            axios({									
            method: 'DELETE',									
            url :`https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp/${id}`,									
            data : null									
            }).then(res =>{									
            if (res.status === 200) {									
                var index = findIndex(product, id);									
                if(index !== -1){	
                    var updatedProducts = [...product];
                    updatedProducts.splice(index, 1);
                    setProduct({
                    products: updatedProducts																
                });									
                alert("Xóa sản phẩm thành công", {})		
                window.location.reload(false);						
            }}									
        });									
        }	

        const findIndex = (products, id) =>{																		
        var result = -1;									
        products.forEach((product, index) =>{									
        if(product.id === id){									
        result =index;									
        }									
        });									
        return result;									
        }				

        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <Nav/>
                        <div className="card-header">
                        <h4>Sản Phẩm</h4>
                        </div>
                        <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>									
                            <tr>
                                <th>ID item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>image</th>
                                <th>Origin</th>
                                <th>Date of manufacture</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map(data =>
                                        <Item onDelete={onDelete}
                                            id = {data.id}
                                            name={data.name}
                                            price = {data.price}
                                            image = {data.image}
                                            origin = {data.origin}
                                            date = {data.expiry_date}
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

export default Home;