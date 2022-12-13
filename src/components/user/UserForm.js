import './UserForm.css'

import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/user';


const UserForm = (props) => {

    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName);
    const [age, setAge] = useState(props.user.age);

    // useEffect(() => {
    //     setFirstName(props.user.firstName);
    //     setLastName(props.user.lastName);
    //     setAge(props.user.age);

    // });

    console.log(firstName)

    const firstNameChangeHandler = (event) => {
        console.log(event);
        setFirstName(event.target.value);
    }
    const lastNameChangeHandler = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userBody = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        console.log(userBody)
        props.onAddUser(userBody);
        setFirstName('');
        setAge('');
        setLastName('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>שם פרטי</label>
                    <input type='text' value={firstName} onChange={firstNameChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>שם משפחה</label>
                    <input type='text' value={lastName} onChange={lastNameChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>גיל</label>
                    <input type='number' min="10" step="0.5" value={age} onChange={ageChangeHandler} />
                </div>
              
            </div>
            <div className="new-expense__actions">
                <button type="submit">הוסף משתמש</button>
            </div>
        </form>
    );



}

export default UserForm;