import Post from "./postslices/Post";
import {Routes,Route} from 'react-router-dom'
import EditPost from "./postslices/EditPost";
import AddPost from "./postslices/AddPost";
import NotFound from "./components/NotFound";
import { useGetTodoQuery,useGetPostQuery } from "./api/apiSlice";

function App() {
  const {data} = useGetPostQuery()
  return (
    <div className="App  text-white  container-fluid ">

      <p>Post created {data.length} </p>


      <Routes>
      <Route path="/add"  element={<AddPost/>} />
      <Route path="/edit/:id"  element={<EditPost/>} />
      <Route path="/" element={  <Post/>}/>
      <Route path="/*" element={  <NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
