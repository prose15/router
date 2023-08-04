import { Routes,Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import { Home } from './Home';
import { About } from './About';
import { Newpost } from './Newpost';
import { Postpage } from './Postpage';
import {Post} from "./Post";
import { Missing } from './Missing';
import { Postlayout } from './Postlayout';
import { Header } from './Header';
import { Footer } from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { Nav } from './Nav';
import api from "./api/api"
import Editpage from './Editpage';

function App() {
  const navigate = useNavigate();
  const handleEdit = async (id) =>{
    const updatedSong = {id, topic : editTitle , body : editBody};
    try{
      const response = await api.put(`/contents/${id}`,updatedSong)
      setContent(content.map(content=>content.id===id ? {...response.data}: content));
      console.log(response.data);
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();
    console.log(content.length)
     const id = content.length ? content[content.length -1].id + 1 : 1;
     console.log(content.length)
     const newsong = {id, topic : newSongTitle , body : newSongBody};
     try{
      const response = await api.post('/contents',newsong)
      console.log(response)
      const allsongs = [...content , response.data];
      setContent(allsongs);
      setNewSongTitle('');
      setNewSongBody('');
      navigate('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }
  const handleDelete = async (id) =>{
    try{
      await api.delete(`/contents/${id}`)
    
    const postList = content.filter(contents => contents.id !== id);
    setContent(postList);
    navigate('/');
  }
  catch(err){
    console.log(`Error: ${err.message}`);
  }
}
  

  const title = "Prose Favorite Songs";
  const [search,setSearch] = useState('');
  const [searchResults,setSearchSearchResults] = useState([]);
  const [newSongTitle,setNewSongTitle] = useState('');
  const [newSongBody,setNewSongBody] = useState('');
  const [content,setContent] = useState([]);
  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');

  useEffect(()=>{
    const filterResults = content.filter((content) => ((content.body).toLowerCase()).includes(search.toLowerCase())|| ((content.topic).toLowerCase()).includes(search.toLowerCase()));
    setSearchSearchResults(filterResults.reverse());
  },[content,search])

  useEffect(()=>{
    const fetchPosts = async() =>{
      try{
        const response = await api.get('/contents');
        setContent(response.data);
      }
      catch(err){
        if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
      else{
        console.log(`Error: ${err.message}`);
      }
    }
  }

fetchPosts();
}, [])
  return (
    <div className="App">
      <Header
      title={title}
      />
      <Nav
      search={search}
      setSearch ={setSearch}/>
      <Routes>
        <Route path='/' element = {<Home
        content={searchResults}/>}/>
        <Route path='/postpage'>
          <Route index element={<Postpage
          newSongTitle={newSongTitle}
          setNewSongTitle={setNewSongTitle}
          newSongBody={newSongBody}
          setNewSongBody={setNewSongBody}
          handlesubmit={handlesubmit}/>}/>
          <Route path=":id" element={<Newpost content={content} handleDelete={handleDelete}/>} />
        </Route>
        <Route path='/edit/:id' element ={
        <Editpage
          content={content}
          handleEdit={handleEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody}
          />}/>
        <Route path="/about" element ={<About/>}/>
        <Route path='/*' element ={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
