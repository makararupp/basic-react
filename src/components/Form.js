import React from 'react';

const Form = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const fullName = firstName + ' ' + lastName;

    // Corrected onChange handlers with logging to debug
    const handleFirstName = (e) => {
        console.log("handleFirstName triggered:", e);  // Log the event object
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        console.log("handleLastName triggered:", e);  // Log the event object
        setLastName(e.target.value);
    };

    return (
        <>
            <br />
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName} // Trigger onChange for first name
            />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName} // Trigger onChange for last name
            />
            <p>The full name is: {fullName}</p>
        </>
    );
};

export default Form;
