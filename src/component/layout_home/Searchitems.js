import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from './showCard';

function Searchitems() {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState({
    searchValue: localStorage.getItem('searchitems') || '',
    searchByCategory: false
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp',
      data: null,
    })
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
        alert('Xảy ra lỗi');
      });
  }, []);

  useEffect(() => {
    const { searchValue } = search;
  
    const filteredProducts = products.filter(product =>
        (product.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        product.name_category?.toLowerCase().includes(searchValue?.toLowerCase()))
      );
  
    setFilteredProducts(filteredProducts);
  }, [products, search]);
  

  return (
    <div>
      <div className="container">
        <div id="content" className="space-top-none">
          <div className="main-content">
            <div className="space60">&nbsp;</div>
            <div className="row">
              <div className="col-sm-12">
                <div className="beta-products-list">
                  <h4>My Products</h4>
                  <div className="beta-products-details">
                    <p className="pull-left"></p>
                    <div className="clearfix" />
                  </div>
                  <div className="row">
                    {filteredProducts.map(data =>
                      <ShowCard
                        id={data.id}
                        name={data.name}
                        price={data.price}
                        image={data.image}
                      />
                    )}
                  </div>
                </div> {/* .beta-products-list */}
              </div>
            </div> {/* end section with sidebar and main content */}
          </div> {/* .main-content */}
        </div> {/* #content */}
      </div> {/* .container */}
    </div>
  );
}

export default Searchitems;
