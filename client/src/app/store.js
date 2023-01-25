import {configureStore} from '@reduxjs/toolkit'
import  taskReducer from '../features/TasksSlice'

const store = configureStore(
    {
        reducer:{
            taskReducer: taskReducer
        }
    }
)
export default store