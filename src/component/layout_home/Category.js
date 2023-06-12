import React from 'react';
import {  NavLink } from "react-router-dom";

function Category(props) {
    const { id, name} = props;

    return (
        <li><NavLink to={`/productCategory/${id}`}>{name}</NavLink></li>
    );
}

export default Category;