import React from 'react'
import { Link } from "react-router-dom";

export default function Welcomecontent() {
  return (
    <>
    <div classsName="container my-4" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:"20",position:"absolute",top:"260px",left:"340px",textAlign:"center"}}>
    <div style={{fontSize:"70px",backgroundColor:"white",borderRadius:"8px",marginBottom:"20px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Times New Roman",paddingLeft:"20px",paddingRight:"20px"}}><div>Welcome to appname<img style={{height:"70px",borderRadius:"50%",marginLeft:"30px"}} src="/logo.jpg" alt="Description" /></div></div>
    <Link to="/login" className="welcomebtn" style={{height:"40px",width:"150px",textDecoration:"none",color:"Black",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center"}}>Get started<i className="fa-solid fa-arrow-right" style={{marginLeft:"10px"}}></i></Link>
    </div>
    </>
    
  )
}
