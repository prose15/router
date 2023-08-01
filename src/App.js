import { Routes,Route, Link } from 'react-router-dom';
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

function App() {
  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(content.length)
     const id = content.length ? content[content.length -1].id + 1 : 1;
     console.log(content.length)
     const newsong = {id, topic : newSongTitle , body : newSongBody};
     const allsongs = [...content , newsong]
     setContent(allsongs);
     setNewSongTitle('');
     setNewSongBody('');
  }
  const handleDelete =(e)=>{

  }
  const title = "Prose Favorite Songs";
  const [search,setSearch] = useState('');
  const [searchResults,setSearchSearchResults] = useState([]);
  const [newSongTitle,setNewSongTitle] = useState([]);
  const [newSongBody,setNewSongBody] = useState([]);
  const [content,setContent] = useState([{
    id : 1,
    topic : "First song",
    body : "Kannukullae unnai vaithen.. kannammaNaan kangal mooda maatten adi sellama..Naan kangal mooda maattaen adi sellama.. Adi neethaan yen santhosham Poovellaam unn vaasam Nee pesum pechellaam Naan ketkum sangeetham Unn punnagai naan semikindra selvamadiNee illai endraal naanum ingae ezhaiyadi"
  },
  {
    id : 2,
    topic : "Second favorite",
    body : "Pani kooda unmel padum velaiyil Kulir thaangidamal dhegam nadungumae Malar kooda unnai thodum velaiyil Poo endru thaanae sooda ninaikumae Amutham undu vaazhnthaal aayul mudivathillai Un azhagai paarthu vaazhnthaal amutham thevai illai Unnai thedum pothu idhayam ingu sugamaaga tholainthadhae"
  },
  {
    id : 3,
    topic : "third favorite",
    body : "Idhu varai illadha unarvidhu Idhayathil undana kanavidhu Palithidum annalai thedidum padal kettaiyo Moodamal moodi maraithadhu Thaanaga poothu varughudhu Thedamal thedi kidaithadhu ingaeee"
  }])
  useEffect(()=>{
    const filterResults = content.filter((content) => ((content.body).toLowerCase()).includes(search.toLowerCase())|| ((content.topic).toLowerCase()).includes(search.toLowerCase()));
    setSearchSearchResults(filterResults.reverse());
  },[content,search])
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
        
        <Route path='/newpost' element={<Newpost/>}/>
        <Route path='/postpage'>
          <Route index element={<Postpage
          newSongTitle={newSongTitle}
          setNewSongTitle={setNewSongTitle}
          newSongBody={newSongBody}
          setNewSongBody={setNewSongBody}
          handlesubmit={handlesubmit}/>}/>
          <Route path=":id" element={<Newpost content={content} handleDelete={handleDelete}/>} />
        </Route>
        <Route path="/about" element ={<About/>}/>
        {/* <Route path='/*' element ={<Missing/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
