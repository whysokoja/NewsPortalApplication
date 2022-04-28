import React, { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import Button from "./Components/Button";
import {FaTimes} from 'react-icons/fa' 
import Task from "./Components/Task";
import PropTypes from 'prop-types'

const SignupForm = ({tasks , onDelete , onToggle}) => {
    const [suc, setSuc] = useState([
        {
            key: 1,
            id: 'uname',
            name: 'username',
            attb: 'Username',
            placeholder:'@abc',
            type:'text',
            value:''
        },
        {
            key: 2,
            id: 'fname',
            name:'firstname',
            attb: 'First name',
            placeholder:'abc',
            type:'text',
            value:''
        },
        {
            key: 3,
            id: 'lname',
            name:'lastname',
            attb: 'Last Name',
            placeholder:'xyz',
            type:'text',
            value:''
        },
        {
            key: 4,
            id: 'email',
            name:'email',
            attb: 'E-mail',
            type:'email',
            placeholder:'abc@xyz.com',
            pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            value:''
        },
        {
            key: 5,
            id: 'phn',
            name:'phone',
            attb: 'Phone',
            type:'tel',
            placeholder:'XXXX-XXXX-XXX',
            pattern:'[0-9]{11}',
            value:''
        },
        {
            key: 6,
            id: 'pass',
            name:'password',
            attb: 'Password',
            type:'password',
            placeholder:'********',
            pattern:'(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
            title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
            value:''
        },
    ]);

        // const handleInput = (e) => {
        //     const name = e.target.name;
        //     const value = e.target.value;
        //     console.log(name , value);
        //     setSuc({ ...suc, [name]:value });   
        // }
    return (
        <>
        <form>
            {suc.map((sucs) => (
                <div key={sucs.key}>
                <label>{sucs.attb}</label>
                <input type={sucs.type} autoComplete="off" name={sucs.name} id={sucs.id} placeholder={sucs.placeholder} pattern={sucs.pattern} title={sucs.title} /*value={sucs.value} onChange={(e) => setSuc(e.target.value)}*/></input>
                </div>
            ))}
            </form>
            <div>
                {tasks.map((task) =>(
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))}
            </div>
            {/* <form action=''>
                <div>
                    <label htmlFor="Username">Username</label>
                    <input type="text" autoComplete="off" name="username" id="uname" />
                </div>

                <div>
                    <label htmlFor="Fname">First Name</label>
                    <input type="text" autoComplete="off" name="firstname" id="fname" />
                </div>

                <div>
                    <label htmlFor="Lname">Last Name</label>
                    <input type="text" autoComplete="off" name="lastname" id="lname" />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" autoComplete="off" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" autoComplete="off" name="phone" id="phone" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete="off" name="password" id="password" />
                </div>

                <Button color='green' text='Register' />
            </form> */}
        </>
    )
}

export default SignupForm