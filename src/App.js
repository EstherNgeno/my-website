import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from "./components/sections/About";
import Projects from "./components/sections/Projects"

function App() {
  return (
    <div className='plg:px-20 bg-gradient-to-b scroll-smooth from-fuchsia-200 via-fuchsia-100 to-fuchsia-50 dark:bg-gradient-to-b dark:from-fuchsia-950 dark:via-fuchsia-950 dark:to-black transition-colors'>
      <Navbar />
      <Home id="home" />
      <div className="pt-5 pb-5 flex flex-col sm:flex-row gap-2 items-center justify-center px-1 py-1 lg:px-5 item-center">
      <div className="w-4/5 h-1 flex item-center justify-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 "></div>      
      </div>
      <About id="about" />
      <div className="pt-5 pb-5 flex flex-col sm:flex-row gap-2 items-center justify-center px-1 py-1 lg:px-5 item-center">
      <div className="w-4/5 h-1 flex item-center justify-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 "></div>  
      </div> 
      <Projects id="projects" />   
    </div>
  );
}

export default App;
