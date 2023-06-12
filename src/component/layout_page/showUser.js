import React from 'react';

function ShowUser(props) {
    const { id, name, phone, avatar, address, email, password} = props;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>
                <img src={avatar} alt="Product" width={'100px'} height={'100px'}  />
            </td>
            <td>{email}</td>
            <td>{password}</td>
        </tr>
        
    );
}

export default ShowUser;