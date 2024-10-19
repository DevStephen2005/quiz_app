import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for styles
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/register' element={<Signup />} ></Route>
        <Route path='/quiz' element={<Quiz />} ></Route>

      </Routes>
      <ToastContainer className='toast close' />
    </Router>
  )
}

export default App
