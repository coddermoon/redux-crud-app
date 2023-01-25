import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/TasksSlice";

const Users = () => {
    
  const users = useSelector((state) => state.taskReducer.tasks);
 

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2 className="text-center"> All Users</h2>

      <div className="container">
         <div className="cards">
            <div className="card">
              <h4 className="text-center ">No</h4>
              <h4 className="text-center">Name</h4>
              <h4 className="text-center ">email</h4>
              <h4 className="text-center ">phone</h4>
              <h4 className="text-center ">hobby</h4>
              <h4 className="text-center ">action</h4>
            </div>
  
            {users.map((user, index) => {
              const { id, name,email,phone,hobby } = user;
              return (
                <div className="card" key={id}>
                  <h4 className="text-center task no">{index + 1}</h4>
                 
                    <p  className="text-center bold">{name}</p>
                    <p className="text-center">{email}</p>
                    <p  className="text-center">{phone}</p>
                    <p  className="text-center">{hobby}</p>
                
  
                  <div className="text-center  btngrp">
                    <Link
                      to="/edit"
                      className="btn"
                      state={{ id,name,email,phone,hobby }}
                    >
                      edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn danger"
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

      </div>
    </div>
  );
};

export default Users;

