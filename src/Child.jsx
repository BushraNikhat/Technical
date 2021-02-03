import React from "react";
import Sdata from "./Sdata.jsx";

const Child = (props) => {

  return (
    <>
      {Sdata.map((value, index) => {
       return(<div className="col-lg-4 col-sm-6 col-11  ">
        <div className="card mx-auto shadow">
          <img src={value.image} className="card-img-top" alt="pics" />
          <div className="card-body">
            <h3 className="card-title text-center">{value.title}</h3>
           
          </div>
        </div>
        </div>
       )
      })}
    </>
  );
};

export default Child;
