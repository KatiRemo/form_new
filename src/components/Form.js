import React from 'react'

const Form = ({submit, change}) => {
        return (
            <form onSubmit={submit}>
                <div> 
                <label htmlFor="firstname"> First name</label>
                <input type="text" name="firstname" id="firstname" required onChange={change} />
                </div>
                <div>
                <label htmlFor="lastname"> Last name</label>
                <input type="text" name="lastname" id="lastname" required onChange={change} />
                </div>
                <div>
                <label htmlFor="phone"> Phone number</label>
                <input type="phone" name="phone" id="phone" required onChange={change} />
                </div>
                <div>
                <label htmlFor="role"> Role</label>
                <select name="role" id="role" required onChange={change}>
                <option value="">Choose role</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="wannabe">Wannabe</option>
                </select>
                </div>
                <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required onChange={change}></textarea>   
                </div>
                <input type="submit" value ="send" />
            </form>
        );
    }

export default Form;