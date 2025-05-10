/*import React from "react";
import "./Compass.css";

const Compass = ({ degree }) => {
  return (
    <div className="compass">
      <div className="arrow" style={{ transform: `rotate(${degree}deg)` }}></div>
      <div className="directions">
        <span className="north">N</span>
        <span className="east">E</span>
        <span className="south">S</span>
        <span className="west">W</span>
        <span className="ne">NE</span>
        <span className="nw">NW</span>
        <span className="se">SE</span>
        <span className="sw">SW</span>
      </div>
    </div>
  );
};

export default Compass;
*/

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Compass.css";
import compassBg from "../../assets/Compass.svg";

const Compass = ({ degree }) => {
    const [preDegree, setPreDegree] = useState(0);
    const arrowRef = useRef(null);

    useEffect(() => {
        console.log(preDegree);
        gsap.to(arrowRef.current, {
            rotation: degree,
            duration: 2,
            ease: "power4.out", // Smooth inertia effect
        });
        setPreDegree(degree);
    }, [degree]);

    return (
        <div className="compass">
            <img src={compassBg} alt="compass background" className="compass-bg" />
            <div ref={arrowRef} className="arrow"> </div>
            
        </div>
    );
};

export default Compass;