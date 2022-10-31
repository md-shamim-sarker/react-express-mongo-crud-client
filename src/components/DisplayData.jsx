import React, {useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const DisplayData = () => {
    // R from CRUD
    const [displayUsers, setDisplayUsers] = useState(useLoaderData());

    // D from CRUD
    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                setDisplayUsers(remainingUsers);
                console.log(`${user.firstName} ${user.lastName} is deleted successfully!!!`);
            });
    };

    return (
        <>
            <h2>Display User Information</h2>
            <Link to={"/insertData"}><button>Insert New Data</button></Link>
            {
                displayUsers.map(user => <p key={user._id}>
                    {user.firstName} {user.lastName}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(user)}>Delete</button>
                </p>)
            }
        </>
    );
};

export default DisplayData;