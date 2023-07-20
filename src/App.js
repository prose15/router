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
import { useState } from 'react';

function App() {
  const title = "Prose Favorite Songs";
  const [content,setContent] = useState([{
    id : 1,
    topic : "First song",
    content : "Kannukullae unnai vaithen.. kannammaNaan kangal mooda maatten adi sellama..Naan kangal mooda maattaen adi sellama.. Adi neethaan yen santhosham Poovellaam unn vaasam Nee pesum pechellaam Naan ketkum sangeetham Unn punnagai naan semikindra selvamadiNee illai endraal naanum ingae ezhaiyadi"
  },
  {
    id : 2,
    topic : "Second favorite",
    content : "Pani kooda unmel padum velaiyil Kulir thaangidamal dhegam nadungumae Malar kooda unnai thodum velaiyil Poo endru thaanae sooda ninaikumae Amutham undu vaazhnthaal aayul mudivathillai Un azhagai paarthu vaazhnthaal amutham thevai illai Unnai thedum pothu idhayam ingu sugamaaga tholainthadhae"
  },
  {
    id : 3,
    topic : "third favorite",
    content : "Idhu varai illadha unarvidhu Idhayathil undana kanavidhu Palithidum annalai thedidum padal kettaiyo Moodamal moodi maraithadhu Thaanaga poothu varughudhu Thedamal thedi kidaithadhu ingaeee"
  }])
  return (
    <div className="App">
      <Header
      title={title}
      />
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Home/>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <About/>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Postpage/>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">POST 1</a></li>
            <li><a class="dropdown-item" href="#">POST 2</a></li>
            <li><a class="dropdown-item" href="#">POST 3</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">NEW POST</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Post
content={content}
setContent={setContent}/>












      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/postpage">Postpage</Link></li>
        </ul>
      </nav> */}
      <Footer/>
        {/* <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/newpost" element={<Newpost/>}/>
          <Route path='/postpage' element={<Postlayout/>}>
             <Route index element={<Postpage/>}/>
             <Route path=":id" element={<Post  />}/>
             <Route path="newpost" element={<Newpost/>}/>
          </Route>   
          <Route path="*" element={<Missing/>}/>
        </Routes> */}
    </div>
  );
}

export default App;
