import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Welcome() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
        
          <img className="mainimg" src="anuty.jpg" alt="error" style={{ height: "100vh", width: "100%", opacity: "0.8" }} />
        
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="/img2.jpg" alt="error" height="740px" width="100%" style={{ height: "100vh", width: "100%", opacity: "0.8" }}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img3.jpg" alt="error" height="740px" width="100%" style={{ height: "100vh", width: "100%", opacity: "0.8" }}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img4.jpg" alt="error" height="740px" width="100%" style={{ height: "100vh", width: "100%", opacity: "0.8" }}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}