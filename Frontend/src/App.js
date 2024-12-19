import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ProjectDetails from "./Components/ProjectDetails";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import State from "./Components/State";
import{BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <State/> */}
      {/* <Skills/> */}
      {/* <Resume/> */}
      {/* <Portfolio/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project-datails/:id" element={<ProjectDetails/>}/>
        
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
