import React from 'react';
import {  NavLink } from "react-router-dom";

function Item(props) {
    const { id, name, price, image, origin, date, onDelete } = props;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <img src={image} alt="Product" width={'100px'} height={'100px'}  />
            </td>
            <td>{origin}</td>
            <td>{date}</td>
            <td>
                <NavLink to={`/update/${id}`} className="btn btn-primary">Edit</NavLink>
                <button type="submit" onClick={() => onDelete(id)} className="btn btn-danger" name="delete_item_btn">Delete</button>
            </td>
        </tr>
        
    );
}

export default Item;