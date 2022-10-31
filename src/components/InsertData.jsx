import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const InsertData = () => {
    const {register, handleSubmit, resetField} = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // C from CRUD
    const onSubmitHandler = user => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            console.log(`${user.firstName} ${user.lastName} is inserted successfully!!!`);
            setMessage(`${user.firstName} ${user.lastName} is inserted successfully!!!`);
            resetField("firstName");
            resetField("lastName");
            setErrorMessage('');
        }).catch(error => {
            console.error(error.message);
            setErrorMessage('Insert Data failed!!!');
            setMessage('');
        });
    };

    const onFocusHandler = () => {
        setMessage('');
        setErrorMessage('');
    };

    return (
        <>
            <h2>Insert Data</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input onFocus={onFocusHandler} {...register('firstName')} placeholder='First Name' /><br />
                <input onFocus={onFocusHandler} {...register('lastName')} placeholder='Last Name' /><br />
                <button type="submit">Submit</button>
                <Link to={"/"}><button>Display</button></Link>
            </form>
            <p style={{color: "green"}}>{message}</p>
            <p style={{color: "red"}}>{errorMessage}</p>
        </>
    );
};

export default InsertData;