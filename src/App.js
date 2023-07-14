import { Routes,Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Newpost } from './Newpost';
import { Postpage } from './Postpage';
import {Post} from "./Post";
import { Missing } from './Missing';
import { Postlayout } from './Postlayout';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/postpage">Postpage</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/newpost" element={<Newpost/>}/>
          <Route path='/postpage' element={<Postlayout/>}>
             <Route index element={<Postpage/>}/>
             <Route path=":id" element={<Post  />}/>
             <Route path="newpost" element={<Newpost/>}/>
          </Route>   
          <Route path="*" element={<Missing/>}/>
        </Routes>
    </div>
  );
}

export default App;
