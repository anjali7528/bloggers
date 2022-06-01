import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Context } from "./context/Context";
import {useContext} from 'react'
import Single from "./components/pages/single/Single";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
     <TopBar/>
     <Routes>
     <Route exact path="/" element={<Home />}/>
     <Route path="/register" element={user ? <Home/> : <Register />}/>
     <Route path="/login" element={user ? <Home/> : <Login />}/>
     <Route path="/write" element={user ? <Write />: <Register/>}/>
     <Route path="/settings" element={user ?<Settings />: <Register/>}/>
     <Route path="/post/:postId" element={<Single />}/>
     <Route path="/contact" element={user ?<Sidebar />: <Register/>}/>

     </Routes>
    </Router>
  );
}

export default App;
