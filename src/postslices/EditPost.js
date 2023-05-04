import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { useGetTodoQuery,useUpdateTodoMutation } from '../api/apiSlice'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const EditPost = () => {
    const {id}=useParams()
    const navigate =useNavigate()
    console.log(id,'hhh')
    const { data } = useGetTodoQuery(id)
    console.log(data)
    const [name,setName]=useState('')
    const [body,setBody]=useState('')
    const [UpdateTodo]= useUpdateTodoMutation()
    useEffect(()=>{
        setName(data?.name)
        setBody(data?.body)
    },[data])

    const NewEntry = {...data,name,body}

    const handleSubmit = (e)=>{
        e.preventDefault()
        UpdateTodo(NewEntry)
        toast.success('Todo Edited successfully', {
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
    <div className='container'>
                    <h1 className='text-center fs-5 fw-b pt-5'>Edit  Todo</h1>

        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="nom" className='form-label'>Name:</label><br/>
            <input type="text" name='nom' value={name} onChange={(e)=>setName(e.target.value)}  class="form-control" /><br/>
            <label htmlFor="body" className='form-label'>Body:</label><br/>
            <textarea  type="text" name='body' value={body} onChange={(e)=>setBody(e.target.value)} class="form-control" ></textarea>
            <div class="d-grid mt-5 mb-3">
            <input type="submit" className='btn  btn-success mt-2' value="Edit" />
            </div>
        </form>
    </div>
  )
}

export default EditPost