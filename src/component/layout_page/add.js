import React, { Component, useEffect, useState,useRef } from 'react';
import axios from 'axios';									
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({match,history}) {
    const [product, setProduct] =useState ({
            id: '',
            name: '',
            price: '',
            image: '',
            color: '',
            name_category: '',
            material: '',
            expiry_date: '',
            origin: '',
            description: '',
            tinhtranghang: true,
        })

        const imageRef = useRef(null);				
        
    const onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var type = target.type;
        var value = target.value;
        if (name === 'tinhtranghang') {
            value = target.value === 'true' ? true : false;
        }
        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/images/");
        }

        setProduct(
            product => ({
                ...product, [name]: value
            })
        );
    }

    const onSave = (e) => {
        e.preventDefault();
        var { name, price, image, name_category, color, material
            , expiry_date, origin, description, tinhtranghang } = product;
        
            if (name === '' && price === '' && image === '' && material === '' && expiry_date === '') {
                toast.warn("Vui lòng nhập đủ nội dung", {
                });
            } else {
                axios({
                    method: 'POST',
                    url: `https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp`,
                    data: {
                        name: name,
                        price: price,
                        image: image,
                        color: color,
                        name_category: name_category,
                        material: material,
                        expiry_date: expiry_date,
                        origin: origin,
                        description: description,
                        tinhtranghang: tinhtranghang,
                    }
                }).then(res => {
                    toast.success("Thêm sản phẩm thành công", {
                    })
                    // history.goBack();
                });
            }
    }

    const onClear = () => {
        setProduct({
            name: '',
            price: '',
            image: '',
            color: '',
            name_category: '',
            material: '',
            expiry_date: '',
            origin: '',
            description: '',
            tinhtranghang: true,
        });	
    };
        return (
            <React.Fragment>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                <h4>Thêm Sản Phẩm</h4>
                                </div>
                                <div className="card-body">
                                <form onSubmit={onSave}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="Name">Tên sản phẩm</label>
                                            <input type="text" name="name" value={product.name} onChange={onChange} className="form-control" id="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="Price">Price</label>
                                            <input type="number" name="price" value={product.price} onChange={onChange} className="form-control" id="Price" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="Image">Image</label>
                                            <br></br>
                                            <input type="file" name="image" ref={imageRef} onChange={onChange} className="form-control-file" id="Image" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label>Loại sản phẩm:</label>
                                                <select className="form-control" name="name_category" value={product.name_category} onChange={onChange} required="required">
                                                    <option value="sản phẩm mới">mới</option>
                                                    <option value="sản phẩm hot">hot</option>
                                                    <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="color">Màu bánh</label>
                                            <input type="text" name="color" value={product.color} onChange={onChange} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Nguyên liệu :</label>
                                                <input type="text" name="material" value={product.material} onChange={onChange} className="form-control" />   
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Hạn sữ dụng :</label>
                                                <input type="date" name="expiry_date" value={product.expiry_date} onChange={onChange} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Xuất xứ :</label>
                                                <input type="text" name="origin" value={product.origin} onChange={onChange} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Tình trạng hàng :</label>
                                            <select className="form-control" name="tinhtranghang" value={product.tinhtranghang} onChange={onChange} required="required">
                                                <option value={true}>Còn hàng</option>
                                                <option value={false}>Hết hàng</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Mô tả :</label>
                                                <input type="text" name="description" value={product.description} onChange={onChange} className="form-control" />
                                            </div>
                                        </div>
                                        <br />              
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                                            <button type="button" onClick={onClear} className="btn btn-primary">Clear</button>
                                            <button type="button" className="btn btn-primary">Trở về</button>
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
export default Add;

