import React, { Component, useState } from 'react';

function Search() {

    const [search, setSearch] = useState({
        searchValue: '',
        searchByCategory: false
    })
    const handleSearch = (e) => {
        const { name, value, type, checked } = e.target;
        const searchValue = type === 'checkbox' ? search.searchValue : value;
        const searchByCategory = name === 'searchByCategory' ? checked : search.searchByCategory;

        setSearch({ searchValue, searchByCategory });
    };
    const { products, searchValue, searchByCategory } = search;
    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            product.name_category.toLowerCase().includes(searchValue.toLowerCase())) &&
        (!searchByCategory || product.category.toLowerCase().includes(searchValue.toLowerCase()))
    );
    return (
        <div className='container'>
            <div className="form-group">
                <label>Search:</label>
                <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    placeholder='Nhập từ khóa tìm kiếm sản phẩm'
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
}

export default Search;