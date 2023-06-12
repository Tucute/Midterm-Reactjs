import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LoginForm() {
  const [user, setUser] = useState({});

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

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

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setLogin(login => ({
        ...login,
        [name]:value
    })
    )
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let userId = null;
    
    let boolean = '';
    for (let i = 0; i < user.length; i++) {
      
      const { email, password, id } = user[i];
      
      
      if (email === login.email && password === login.password) {
        boolean = 'true';
        userId = id ;
      }
      else {
        boolean = 'false';
      }
    }
    if (boolean === 'true') {
        alert('Đăng nhập thành công');
        localStorage.setItem('userId', userId); // Lưu id vào localStorage
        window.location.href = '/';
    }
    else {
        alert('Đăng nhập thất bại');
    }
  }
  console.log(login);

  return (
    <div className='container'>
        <br></br>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name='email' value={login.email} onChange={handleChange} />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="text" name='password' value={login.password} onChange={handleChange} />
        </div>
        <br></br>
        {/* {error && <div>{error}</div>} */}
        <button type="submit" className='btn btn-primary'>Đăng nhập</button>
      </form>
      <br></br>
    </div>
  );
}

export default LoginForm;
