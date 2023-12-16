import './App.css';
import SignUp from './component/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/login';
import Header from './component/header';
import Users from './component/users';
import { Routes, Route , useParams} from 'react-router-dom';
import Home from './component/home';

function App() {
  return (
    <>

<Header/>
      <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />

         
       </Routes>
      
    </>
  );
}

export default App;
