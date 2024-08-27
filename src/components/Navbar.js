import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  const a=()=>{
    props.handleonClick2();
  }
  //const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light navbar-expand-lg my-2">
      <div className="container-fluid mx-4">
        <div className="btn-group">
          <button
            type="button"
            style={{
              backgroundColor: "white",
              border: "none",
              fontSize: "20px",
            }}
            className=" "
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start my-4">
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <hr></hr>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <hr></hr>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a}type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/home" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
                onClick={a}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/home" ? "nav-link active" : "nav-link"
                }
                to="/about"
                onClick={a}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/services"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/services"
                onClick={a}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/contactus"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/contactus"
                onClick={props.handleonClick2}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {!localStorage.getItem('token')?
        <>
        <Link
          className={
            location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
          aria-current="page"
          to="/Login"
          onClick={a}
        >
          Login
        </Link>
        <Link
          className={
            location.pathname === "/signup" ? "nav-link active mx-4" : "nav-link mx-4"
          }
          aria-current="page"
          to="/signup"
          onClick={a}
        >
          SignUp
        </Link>
        </>
        :<><Link
        className={
          location.pathname ==="/logout" ? "nav-link active mx-4" : "nav-link mx-4"
        }
        aria-current="page"
        to="/"
        onClick={a}
      >
        Logout
      </Link></>
      }
      </div>
    </nav>
  );
}
