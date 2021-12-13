import React from 'react';

const closeHandler = () => {
    window.location.reload();
};

const Popup = ({firstname, lastname, phone, role, message, post }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h1> Your note:</h1>
                <div>
                    <p>First name: <span><strong>{firstname}</strong></span> </p>
                    <p>Last name: <span><strong>{lastname}</strong></span></p>
                    <p>Phonenumber: <span><strong>{phone}</strong></span></p>
                    <p>Role: <span><strong>{role}</strong></span></p>
                    <p>Message: <span><strong>{message}</strong></span></p>
                    <button onClick={post}>Yes, I am sure </button>
                    <button className="secondary" onClick={closeHandler}>Nope, don't want to post it</button>
                </div>
            </div>
        </div>
        );
    };

export default Popup;