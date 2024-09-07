import React from 'react'

export default function Mainmarket(props) {
  return (
    <div className="col-md-2" style={{margin:"10px 10px 10px 10px"}} onClick={()=>{props.updatenote(props.note)}}>
        <div className="card my-3" style={{ backgroundColor: "#E4F1E8" }}>
          <img src={props.note.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.note.name}</h5>
            <p className="card-text">{props.note.title}</p>
            <p className="card-text">
              {"Seller-"}
              {props.note.seller}
            </p>
            <p className="card-text">
              {"Price-"}
              {props.note.price}
            </p>
            <div
              className="d-flex justify-content-end p"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <i className="fa-solid fa-cart-shopping "></i>
              <p
                style={{
                  cursor: "pointer",
                  marginTop: "10px",
                  marginLeft: "2px",
                }}
              >
                Add to the cart
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
