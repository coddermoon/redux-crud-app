import React from 'react';
import {useDispatch} from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateTask } from '../features/TasksSlice';

const Edit = () => {


    const location = useLocation()
    const negivate = useNavigate()

    const notify = () => toast.success("succesfully up to date");

    const dispatch = useDispatch()
  

const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const hobby = form.hobby.value;
    const id = location.state.id

    const updateTaskInfo = {name,email,phone,hobby,id}
    dispatch(updateTask(updateTaskInfo))
    notify()
    negivate('/users')

}

    return (
        <div>
        <h2 className='text-center'>Update user info</h2>

     
    <form onSubmit={handleSubmit} className="form">

        <div className="control">
            <input type="text" name='name' defaultValue={location.state.name} placeholder="task title here"/>  <br />
            <input type="email" name='email' defaultValue={location.state.email} placeholder="task title here"/>  <br />
            <input type="tel" name='phone' defaultValue={location.state.phone} placeholder="task title here"/>  <br />
            <input type="hobby" name='hobby' defaultValue={location.state.hobby} placeholder="task title here"/>  <br />

           <div className="btnDiv">
           <button className='btn' type="submit" >Update </button>
           
           </div>
        </div>
    </form>





    </div>
    );
};

export default Edit;