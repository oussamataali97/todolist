import React from 'react'
import { useGetPostQuery,useDeletePostMutation,useUpdateTodoMutation} from '../api/apiSlice'
import { ToastContainer, toast } from 'react-toastify';
import {AiFillDelete,AiFillSetting,AiFillCheckCircle} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'
import moment from 'moment/moment';


import {Link} from 'react-router-dom'


const Post = () => {
  const { data } = useGetPostQuery()
  const [deletePost]=useDeletePostMutation()
  console.log(data)
  const [updateTodo]=useUpdateTodoMutation()






  const handleUpdate =()=>{

  }
  const handleDelete =(id)=>{
if(window.confirm('Are you sure you want delete this todo ?')){
  if(deletePost(id)){
    toast.info('deleted seccessfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}


  }



  return (
    <div className="container ">
            <h1 className='text-center fs-5 fw-b pt-5'>Todo App</h1>
     <Link to='/add'> <button className='btn btn-primary'>Add Todo</button></Link>
    <div className='row  gap-1 d-flex'>
      <p className='text-center   text-5'>{data?.length > 0  ? `${data.length} Posts here` : 'No post Yet' }</p>
      {data?.map(ele => (
        <div className="col-md-3 flex-fill  py-4 box my-2 position-relative" key={ele?.id}>
            <p className='text-center fs-4'>{ele?.name.toLowerCase().substring(0,17)}</p>
            <p className='d-flex align-items-center'><BiTime size={20} className='mr-2'/> Created  {moment(ele?.date,'MMMM Do YYYY, h:mm:ss a').fromNow()} </p>
            <p>{ele?.body}</p>
            <span class={ele?.completed ? "badgee position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" : "badgee position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}>
            {ele?.completed ? 'Completed' : 'Not Completed'}
    <span class="visually-hidden">unread messages</span>
  </span>
            <button className='btn btn-dark m-2' onClick={()=>handleDelete(ele?.id)

            }><AiFillDelete/>  </button>
               <button className={!ele.completed ? 'btn btn-success m-2'  : 'btn btn-danger m-2'} onClick={()=>updateTodo({...ele,completed: !ele?.completed})

}>{ !ele.completed ? <AiFillCheckCircle/> : <MdCancel/>} {!ele.completed ? ''  : 'cancel'}</button>
                <Link to={`/edit/${ele.id}`}><button className='btn btn-info '><AiFillSetting/></button></Link>





        </div>
      ))}
     </div>
     </div>
  )
}

export default Post