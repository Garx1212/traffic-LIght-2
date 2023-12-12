import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
  const [selectedColor, setselectedColor] = useState("amarillo");

  return (
    <div className="imagen">
    <div className="semaforo d-flex justify-content-center my-5">
      <div className="Traffic-light">
        <div
          onClick={() => setselectedColor("rojo")}
          className={"light rojo" + (selectedColor === "rojo" ? " glow" : "")}
          ></div>
        <div
          onClick={() => setselectedColor("amarillo")}
          className={
            "light amarillo" + (selectedColor === "amarillo" ? " glow" : "")
          }
          ></div>
        <div
          onClick={() => setselectedColor("verde")}
          className={"light verde" + (selectedColor === "verde" ? " glow" : "")}
          ></div>
      </div>
    </div>
  </div>        
  );
}

export default Home;
