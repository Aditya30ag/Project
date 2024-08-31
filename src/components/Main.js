import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate=useNavigate();
  const cameraonclick=()=>{
    navigate('/camerageter');
  }
  return (
    <>
    
    <div style={{position:"absolute",top:"-5px",left:"-0px",zIndex:"-1"}}>
      <img className="mainimg" src="backgroundimg1.jpg" alt="error" height="720px" width="730px" style={{opacity:"0.8"}}></img>
    </div>
    <div className='container camera' style={{height:"315px",width:"315px",display:"flex",justifyContent:"center",borderRadius:"50%",alignItems:"center",cursor:"pointer",marginTop:"180px",zIndex:"20"}} onClick={cameraonclick}>
        <img src="camera12.jpg" alt="error" height="300px" width="300px" style={{borderRadius:"50%",zIndex:"20"}}></img>
    </div>
    <div style={{marginLeft:"540px",height:"80px",width:"300px",position:"absolute",top:"80px",borderRadius:"10px",textAlign:"center",opacity:"0.9",textShadow:"12px -25px 20px 10px",zIndex:"20"}}><p style={{fontSize:"60px",fontFamily:"cursive",zIndex:"20",backgroundColor:"white",color:"black",opacity:"0.7",borderRadius:"12px"}}>Click me!</p></div>
    <div style={{position:"absolute",top:"-5px",right:"0px",zIndex:"-1"}}>
      <img src="backgroundimd2.jpg" alt="error" height="700px" width="700px" style={{opacity:"0.8"}}></img>
    </div>
    
    <div className="" style={{height:"755px",width:"100%",backgroundColor:"black",position:"absolute",top:"0px",opacity:"0.2",zIndex:"10"}}>
    </div>
    </>
  )
}
//<i className="fa-solid fa-arrow-trend-up" style={{marginLeft:"10px"}}></i>