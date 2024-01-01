
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ViewDetails from './components/ViewDetails';
import ApplicationForm from './components/ApplicationForm';
import Profile from './components/Profile'
import Inbox from './components/Inbox'
import About from './components/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/inbox' element={<Inbox/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
        <Route path='/details' element={<ViewDetails/>}></Route>
        <Route path='/forms' element={<ApplicationForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
