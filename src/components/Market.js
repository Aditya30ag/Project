import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "./Modal";
import Mainmarket from "./Mainmarket";
//import { Link} from "react-router-dom";

export default function Market(props) {
  const navigate=useNavigate();
  const ref = useRef("null");
  const refclose = useRef("null");
  const [notes, setnotes] = useState({
    name:"",
    title: "",
    seller: "",
    price: "",
    img:"",
  });
  const onchange=(e)=>{
    setnotes({...notes,[e.target.name]:e.target.value})
  }
  const updatenote = (note) => {
    ref.current.click();
    setnotes({
      name:note.name,
      title: note.title,
      seller:note.seller,
      price:note.price,
      img:note.img
    });
  }
  const buybtn=()=>{
    navigate("/market/buynow");
  }
  return (
    <>
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }}
      >
        More on a Crop
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{marginTop:"50px"}}
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{background:"linear-gradient(#E4F1E8,white)"}}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              More ...
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
              <Modal notes={notes} onchange={onchange}/>
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
                onClick={buybtn}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {props.notes.length===0 && "Add a Note"}
        {props.notes.map((note) => {
          return (
            <Mainmarket key={note.name} updatenote={updatenote} note={note} />
          );
        })}
    </>
  );
}
