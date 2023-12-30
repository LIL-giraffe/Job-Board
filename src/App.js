
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ViewDetails from './components/ViewDetails';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/details' element={<ViewDetails/>}></Route>
        <Route path='/forms' element={<ApplicationForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
