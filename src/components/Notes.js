import React from 'react';

const Notes = ({ firstname, lastname, phone, role, message }) => {
    return (
        <div className="notes">
           <p> 
               { firstname }
               &nbsp;
               { lastname }
               &nbsp;
               - 
               &nbsp;
               { role }
               &nbsp;
               |
               &nbsp;
               { phone }
               &nbsp;
               |
               &nbsp;
               <strong> { message } </strong>
            </p>
        </div>
    );
};

export default Notes;