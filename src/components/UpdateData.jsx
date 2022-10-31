import React from 'react';
import {useForm} from 'react-hook-form';
import {useLoaderData, useNavigate} from 'react-router-dom';

const UpdateData = () => {
    const {register, handleSubmit} = useForm();
    const storedUser = useLoaderData();
    const navigate = useNavigate();

    // U from CRUD
    const onUpdateHandler = user => {
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            console.log(`${user.firstName} ${user.lastName} is updated successfully!!!`);
            navigate("/");
        }).catch(err => console.log(err));
    };

    return (
        <>
            <h2>Update Data</h2>
            <form onSubmit={handleSubmit(onUpdateHandler)}>
                <input defaultValue={storedUser.firstName} {...register('firstName')} /><br />
                <input defaultValue={storedUser.lastName} {...register('lastName')} /><br />
                <button type="submit">Update</button>
            </form>
        </>
    );
};

export default UpdateData;