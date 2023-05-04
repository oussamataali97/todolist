import React from 'react'
import { useState } from 'react'
import { useGetPostQuery,useDeletePostMutation,useAddTodoMutation} from '../api/apiSlice'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const date =moment().format('MMMM Do YYYY, h:mm:ss a');
    const navigate =useNavigate()
    const [name,setName]=useState('')
    const [body,setBody]=useState('')
    const [addTodo]=useAddTodoMutation()
    const uuid =uuidv4()

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo({id:uuid,name:name,body:body,date})
        toast.success('Post added successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
                navigate('/')
    }
  return (
    <div className='container add'>
        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-center fs-5 fw-b pt-5'>Add  Post</h1>
            <label htmlFor="nom" className='form-label'>Name:</label><br/>
            <input type="text" name='nom'  class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label htmlFor="body" className='form-label'>Body:</label><br/>
            <textarea  type="text" name='body' class="form-control" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

            <div class="d-grid mt-5 mb-3">

            <input type="submit" className='btn  btn-success mt-2' value="Create Todo" />
            </div>
        </form>
    </div>
  )
}

export default AddPost