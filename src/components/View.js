import React, { Component } from 'react';

const View = (props) => {
    return (
        <div>
            <h1> Check your input</h1>
            <br/>
            <p>Firstname:<span>{props.first}</span> </p>
            <p>Lastname:<span>{props.last}</span></p>
            <p>Phone:<span>{props.phone}</span></p>
            <p>Role:<span>{props.role}</span></p>
            <p>Message:<span>{props.message}</span></p>
        </div>
        );
    };

export default View;