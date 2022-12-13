import './UserForm.css'
import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName);
    const [age, setAge] = useState(props.user.age);

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userBody = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        props.onAddUser(userBody);
    }

    return (
        <form className='user-form' onSubmit={submitHandler}>
            <div className="new-item__controls">
                <div className="new-item__controls">
                    <label>שם פרטי</label>
                    <input type='text' value={firstName} onChange={firstNameChangeHandler} />
                </div>
                <div className="new-item__controls">
                    <label>שם משפחה</label>
                    <input type='text' value={lastName} onChange={lastNameChangeHandler} />
                </div>
                <div className="new-item__controls">
                    <label>גיל</label>
                    <input type='number' min="10" step="0.5" value={age} onChange={ageChangeHandler} />
                </div>
              
            </div>
            <div className="new-item__actions">
                <button type="submit">הוסף משתמש</button>
            </div>
        </form>
    );



}

export default UserForm;