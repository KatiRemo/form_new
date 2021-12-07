import React from 'react';

const View = ({firstname, lastname, phone, role, message}) => {
    return (
        <div className="view">
            <div className="notepad">
                <br/>
                <p>Firstname:<span>{firstname}</span></p>
                <p>Lastname:<span>{lastname}</span></p>
                <p>Phone:<span>{phone}</span></p>
                <p>Role:<span>{role}</span></p>
                <p>Message:<span>{message}</span></p>
            </div>
        </div>
        );
    };

export default View;