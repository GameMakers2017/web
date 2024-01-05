import { useEffect, useRef, useState } from "react";


const LogoSlider = () =>{
    
    const trainCompartment = ['1', '2', '3', '4', '5', '6'];

    return (
        
        <div className="train">
            <div className="show">
                {
                    trainCompartment.map((item, index) => (
                        <div
                          className='compartment'
                          key={index}
                          style={{
                            // transform: `translateX(-100px)`,
                            // transition: 'all 1s ease-in-out',
                          }}>
                          {item}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default LogoSlider;