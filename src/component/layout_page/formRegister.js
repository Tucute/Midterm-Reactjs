import React, { Component, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormRegister() {

    const [user, setUser] = useState({
        name: '',
        phone: '',
        avatar: '',
        address: '',
        email: '',
        password: ''
    });
    const imageRef = useRef (null);

    const onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var type = event.target.type;

        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/images/");
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                const previewImage = document.getElementById('preview-image-before-upload');
                previewImage.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        }

        setUser(
            user => ({
                ...user,
                [name]:value
            })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        var { name, phone, address, email, password, avatar } = user;

        if (name === '' && phone === '' && address === '' && email === '' && password === '') {
            alert("Vui lòng nhập đủ nội dung", {
            });
        }
        else {
            axios({
                method: 'POST',
                url: `https://6471cfab6a9370d5a41ab469.mockapi.io/users`,
                data: {
                    name: name,
                    phone: phone,
                    avatar: avatar,
                    address: address,
                    email: email,
                    password: password
                }
            })
            .then(res => {
                toast.success('Tạo tài khoản thành công',{});
                window.location.href = '/formLogin';
            })
            .catch(err => {
                console.log(err);
                alert('Báo lỗi');
            })
        }
    }


    return (
        <div className='container'>
            <br></br>
            <h1>REGISTER</h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <ToastContainer/>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" value={user.phone} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Avatar</label>
                    <input type="file" ref={imageRef} className="form-control" name="avatar" onChange={onChange} />
                </div>
                <div className="form-group">
                    <img
                        id="preview-image-before-upload"
                        src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                        alt="xem trước"
                        style={{ maxHeight: 250 }}
                    />
                    
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={user.address} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={user.email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" name="password" value={user.password} onChange={onChange} />
                </div>
                
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default FormRegister ;