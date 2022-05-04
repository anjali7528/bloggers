import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";


function App() {
  return (
    <div className="App">
     <TopBar/>
     {/* <Home/> */}
     {/* <Single/> */}
     <Write/>
    </div>
  );
}

export default App;

