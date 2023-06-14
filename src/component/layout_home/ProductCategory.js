import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from './showCard';
import Slider from './slider';
import { useParams } from 'react-router-dom';

async function fetchData() {
  try {
    const response = await axios.get('https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp');
    return response.data;
  } catch (error) {
    console.log('Lỗi khi lấy dữ liệu sản phẩm:', error);
    throw new Error('Xảy ra lỗi khi lấy dữ liệu sản phẩm');
  }
}

function ProductCategory() {
  const { id } = useParams();
  const id_item = parseInt(id);
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setProduct(data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchDataAsync();
  }, []);

  useEffect(() => {
    const filterProducts = async () => {
      const filtered = product.filter((item) => item.id_category === id_item);
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [product, id_item]);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  return (
    <div>
      <Slider />
      <div className="container">
        <div id="content" className="space-top-none">
          <div className="main-content">
            <div className="space60">&nbsp;</div>
            <div className="row">
              <div className="col-sm-12">
                <div className="beta-products-list">
                  <h4>Sản phẩm của tôi</h4>
                  <div className="beta-products-details">
                    <p className="pull-left"></p>
                    <div className="clearfix" />
                  </div>
                  <div className="row">
                    {filteredProducts.map((data) => (
                      <ShowCard
                        id={data.id}
                        name={data.name}
                        price={data.price}
                        image={"../" + data.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;