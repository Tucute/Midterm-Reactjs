import React, { Component, useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import axios from 'axios';
import Category from './Category';

function Header() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userName, setUserName] = useState('');
  const [searchitems, setSearchitems] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem('searchitems', searchitems);
    window.location.href = '/Searchitems';
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://64841f99ee799e3216264d01.mockapi.io/category');
        const data = response.data;

        if (data.length > 0) {
          setCategories(data);
          setSelectedCategory(data[0].name_category);
        }
      } catch (error) {
        console.log('Lỗi khi lấy danh mục:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios
        .get(`https://6471cfab6a9370d5a41ab469.mockapi.io/users/${userId}`)
        .then((response) => {
          const user = response.data;
          setUserName(user.name);
        })
        .catch((error) => {
          console.log('Lỗi khi lấy thông tin người dùng:', error);
        });
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserName('');
    alert('Đăng xuất thành công');
  };

  return (
    <>
      <div>
        <div id="header">
          <div className="header-top">
            <div className="container">
              <div className="pull-left auto-width-left">
                <ul className="top-menu menu-beta l-inline">
                  <li><a href><i className="fa fa-home" /> 101B, Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Nẵng</a></li>
                  <li><a href><i className="fa fa-phone" /> 0988 776 334</a></li>
                </ul>
              </div>
              <div className="pull-right auto-width-right">

                <ul className="top-details menu-beta l-inline">
                  {userName ? (
                    <>
                      <li>
                        <NavLink to="#">
                          <i className="fa fa-user" />
                          {userName}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" onClick={handleLogout}>
                          Đăng xuất
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/formRegister">Đăng kí</NavLink>
                      </li>
                      <li>
                        <NavLink to="/formLogin">Đăng nhập</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="clearfix" />
            </div> {/* .container */}
          </div> {/* .header-top */}
          <div className="header-body">
            <div className="container beta-relative">
              <div className="pull-left">
                <a href="index.html" id="logo"><img src="assets/dest/images/logo-dep.png" width="200px" alt /></a>
              </div>
              <div className="pull-right beta-components space-left ov">
                <div className="space10">&nbsp;</div>
                <div className="beta-comp">
                  <form role="search" method="get" id="searchform" onSubmit={handleSearch}>
                    <input
                      type="text"
                      className='form-control'
                      value={searchitems}
                      onChange={(e) => setSearchitems(e.target.value)}
                      placeholder="Nhập từ khóa..."
                    />
                    <button className="fa fa-search" type='submit' id="searchsubmit" />
                  </form>
                </div>
                <div className="beta-comp">
                  <div className="cart">
                    <div className="beta-select"><i className="fa fa-shopping-cart" /> Giỏ hàng (Trống) <i className="fa fa-chevron-down" /></div>
                    <div className="beta-dropdown cart-body">
                      <div className="cart-item">
                        <div className="media">
                          <a className="pull-left" href="#"><img src="assets/dest/images/products/cart/1.png" alt /></a>
                          <div className="media-body">
                            <span className="cart-item-title">Sample Woman Top</span>
                            <span className="cart-item-options">Size: XS; Colar: Navy</span>
                            <span className="cart-item-amount">1*<span>$49.50</span></span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item">
                        <div className="media">
                          <a className="pull-left" href="#"><img src="assets/dest/images/products/cart/2.png" alt /></a>
                          <div className="media-body">
                            <span className="cart-item-title">Sample Woman Top</span>
                            <span className="cart-item-options">Size: XS; Colar: Navy</span>
                            <span className="cart-item-amount">1*<span>$49.50</span></span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item">
                        <div className="media">
                          <a className="pull-left" href="#"><img src="assets/dest/images/products/cart/3.png" alt /></a>
                          <div className="media-body">
                            <span className="cart-item-title">Sample Woman Top</span>
                            <span className="cart-item-options">Size: XS; Colar: Navy</span>
                            <span className="cart-item-amount">1*<span>$49.50</span></span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-caption">
                        <div className="cart-total text-right">Tổng tiền: <span className="cart-total-value">$34.55</span></div>
                        <div className="clearfix" />
                        <div className="center">
                          <div className="space10">&nbsp;</div>
                          <a href="checkout.html" className="beta-btn primary text-center">Đặt hàng <i className="fa fa-chevron-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div> {/* .cart */}
                </div>
              </div>
              <div className="clearfix" />
            </div> {/* .container */}
          </div> {/* .header-body */}
          <div className="header-bottom" style={{ backgroundColor:'darkred'}}>
            <div className="container">
              <a className="visible-xs beta-menu-toggle pull-right" href="#"><span className="beta-menu-toggle-text">Menu</span> <i className="fa fa-bars" /></a>
              <div className="visible-xs clearfix" />
              <nav className="main-menu">
                <ul className="l-inline ov">
                  <li><NavLink to='/'>Trang chủ</NavLink></li>
                  <li><a href="#">Sản phẩm</a>
                    <ul className="sub-menu">
                      {categories.map((category) => (
                        <Category
                          id={category.id_category}
                          name={category.name_category}
                        />
                      ))}
                    </ul>
                  </li>
                  <li><a href="about.html">Giới thiệu</a></li>
                  <li><NavLink to='/Contact'>Liên hệ</NavLink></li>
                </ul>
                <div className="clearfix" />
              </nav>
            </div> {/* .container */}
          </div> {/* .header-bottom */}
        </div> {/* #header */}

      </div>
      <Outlet />
    </>
  );
}

export default Header;