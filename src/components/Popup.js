import React, { Component } from 'react';

const Popup = (props) => {
    return (
        <div class="popup" onclick="myFunction()">
            <h1> Your note</h1>
            <br/>
            <p>Firstname:<span>{props.first}</span> </p>
            <p>Lastname:<span>{props.last}</span></p>
            <p>Phone:<span>{props.phone}</span></p>
            <p>Role:<span>{props.role}</span></p>
            <p>Message:<span>{props.message}</span></p>
            <br/>
            <button>YES, I AM SURE</button>
            <button id="button2">NOPE, DON'T WANT TO POST IT</button>
        </div>
        );
    };

export default Popup;