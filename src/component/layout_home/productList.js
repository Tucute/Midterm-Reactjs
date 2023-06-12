import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isEditFormVisible: false,
      product: {},
      searchValue: '',
      searchByCategory: false,
    };

  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange = (id) => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(response => {
        const data = response.data;
        this.setState({ product: data, isEditFormVisible: true });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState(prevState => ({
  //     product: {
  //       ...prevState.product,
  //       [name]: value
  //     }
  //   }));
  // }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      product: {
        ...(prevState.product || {}),
        [name]: value
      }
    }));
  }
  

  onSave = (event) => {
    event.preventDefault();
    const { product } = this.state;
    axios
      .put(`http://localhost:3000/products/${product.id}`, product)
      .then(response => {
        window.alert('Cập nhật sản phẩm thành công');
        this.setState({ isEditFormVisible: false });
        this.updateProductList();
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
      });
  }

  onClear = () => {
    this.setState({ product: {}, isEditFormVisible: false });
  }
  updateProductList() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(res => {
        window.location.reload();
        window.alert('Xóa sản phẩm thành công');
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleSearch = (e) => {
    const { name, value, type, checked } = e.target;
    const searchValue = type === 'checkbox' ? this.state.searchValue : value;
    const searchByCategory = name === 'searchByCategory' ? checked : this.state.searchByCategory;
    this.setState({ searchValue, searchByCategory });
  };
  // handleSearch = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const searchValue = type === 'checkbox' ? this.state.searchValue : value;
  //   const searchByCategory = name === 'searchByCategory' ? checked : this.state.searchByCategory;
  //   this.setState({ searchValue, searchByCategory });
  // };
  // handleSearch = (e) => {
  //   const { name, checked } = e.target;
  //   const searchByCategory = name === 'searchByCategory' ? checked : this.state.searchByCategory;
  //   this.setState({ searchByCategory });
  // };


  render() {
    const { products, searchValue, product, isEditFormVisible, searchByCategory } = this.state;
    const filteredProducts = products.filter(product =>
      (product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.name_category.toLowerCase().includes(searchValue.toLowerCase())) &&
      (!searchByCategory || product.category.toLowerCase().includes(searchValue.toLowerCase()))
    );

    // const filteredProducts = products.filter(product =>
    //   product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    //   (!searchByCategory || product.name_category.toLowerCase().includes(searchValue.toLowerCase()))
    // );

    // const filteredProducts = products.filter(product =>
    //   product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    //   (!searchByCategory || product.name_category === 'sản phẩm mới')
    // );
    return (

      <div className='container'>
        <br />
        <Link to="/add-product" className='btn btn-primary'>Thêm sản phẩm</Link>
        
        <div className="form-group">
          <label>Search:</label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder='Nhập từ khóa tìm kiếm sản phẩm'
            onChange={this.handleSearch}
          />
        </div>
        <label>
          <input
            type="checkbox"
            name="searchByCategory"
            checked={searchByCategory}
            onChange={this.handleSearch}
          />
          Tìm kiếm theo danh mục
        </label>
        <table className='table table-striped'>
          <thead className="thead-dark">
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Xuất xứ</th>
              <th>Tình trạng hàng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.name_category}</td>
                <td><img src={product.image} alt="Product" width={'100px'} /></td>
                <td>{product.origin}</td>
                <td>{product.tinhtranghang}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => this.onChange(product.id)}>Sửa</button>
                  <button className='btn btn-danger' onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {isEditFormVisible && (
          <div>
            <div id="wrapper">
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="contentt">
                  <div className="panel panel-warning col-md-8 ml">
                    <div className="container">
                      <div className="panel-body mt-4">
                        <form onSubmit={this.onSave}>
                          <div className="form-group">
                            <label>Tên Sản phẩm :</label>
                            <input type="text" name="name" value={product.name} onChange={this.handleChange} className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Giá Sản phẩm ($) :</label>
                            <input type="number" name="price" value={product.price} onChange={this.handleChange} className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Chọn Ảnh :</label>
                            <input type="file" name="image" ref={(input) => { this.image = input }} onChange={this.handleChange} className="form-control" />
                          </div>
                          <label>Loại sản phẩm:</label>
                          <select className="form-control" name="name_category" value={product.name_category} onChange={this.handleChange} required="required">
                            <option value="sản phẩm mới">mới</option>
                            <option value="sản phẩm hot">hot</option>
                            <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                          </select>
                          <div className="form-group">
                            <label>Màu bánh :</label>
                            <input type="text" name="color" value={product.color} onChange={this.handleChange} className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Nguyên liệu :</label>
                            <input type="text" name="material" value={product.material} onChange={this.handleChange} className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Hạn sử dụng :</label>
                            <input type="date" name="expiry_date" value={product.expiry_date} onChange={this.handleChange} className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Xuất xứ :</label>
                            <input type="text" name="origin" value={product.origin} onChange={this.handleChange} className="form-control" />
                          </div>
                          <label>Tình trạng hàng :</label>
                          <select className="form-control" name="tinhtranghang" value={product.tinhtranghang} onChange={this.handleChange} required="required">
                            <option value={true}>Còn hàng</option>
                            <option value={false}>Hết hàng</option>
                          </select>
                          <div className="form-group">
                            <label>Mô tả :</label>
                            <input type="text" name="description" value={product.description} onChange={this.handleChange} className="form-control" />
                          </div>
                          <br />
                          <div className="text-center">
                            <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                            <button type="button" onClick={this.onClear} className="btn btn-primary">Clear</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
