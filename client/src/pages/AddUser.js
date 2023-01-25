import React from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addTask } from '../features/TasksSlice';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

    const negivate = useNavigate()

    const notify = () => toast.success("succesfully added");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const hobby = form.hobby.value;

        const newTask = {name,email,phone,hobby, id:uuidv4('id')}
        dispatch(addTask(newTask))
        notify()
        negivate('/users')
    }
    return (
        <div>
            <h2 className='text-center'>Add user </h2>

         
        <form onSubmit={handleSubmit} className="form">

            <div className="control">
                <input type="text" name='name' placeholder="your name"/>  <br />
                <input type="email" name='email' placeholder="your email"/>  <br />
                <input type="tel" name='phone' placeholder="your phone"/>  <br />
                <input type="text" name='hobby' placeholder="your hobby"/>  <br />
                
               <div className="btnDiv">
               <button className='btn' type="submit" >Submit</button>
               
               </div>
            </div>
        </form>


 


        </div>
    );
};

export default AddUser;