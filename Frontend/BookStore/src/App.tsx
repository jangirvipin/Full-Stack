import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./components/course"
import Signup from "./components/Signup"
import Conatact from "./components/Contact"
import { Toaster } from "react-hot-toast"


function App() {
  

  return (
    <>
    <div className="dark:bg-slate-800 dark:text-white">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Conatact />} />
    </Routes>
    <Toaster />
    </BrowserRouter>
    </div>
   
   
    
    </>
  )
}

export default App
