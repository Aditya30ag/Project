import './App.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress,setprogress]=useState(0);

  const showalert=()=>{
    setTimeout(()=>{
      setprogress(20);
    },100)
    setTimeout(()=>{
      setprogress(40);
    },200)
    setTimeout(()=>{
      setprogress(60);
    },300)
    setTimeout(()=>{
      setprogress(80);
    },400)
    setTimeout(()=>{
      setprogress(100);
    },500)
  }
  const handleonClick2=()=>{
    showalert();
  }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /></>
    },
    {
      path:"/about",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /></>
    },
    {
      path:"/services",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /></>
    },
    {
      path:"/contactus",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /></>
    },
    {
      path:"/login",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /><Login/></>
    },
    {
      path:"/signup",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='black'
      progress={progress}
      /><Signup/></>
    }
  ])
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
