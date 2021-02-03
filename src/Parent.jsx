import React from "react";
import Child from "./Child.jsx"

const Parent=()=>{

    return (
        <>
        <section className="Parent" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto d-block">
              <h1 className="text-center large-heading text-danger mb-5">Project</h1>
              <div className="row gy-3 mb-3">
                <Child />
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Parent;