import React from "react";
import Image from 'next/image';
import Link from 'next/link'



function Cube(props) {

  const style ={
    cubeOn:'flex  h-full w-full cube  box   z-50 ',
    cubeOff:'flex  h-full w-full cube  box'
  }
    
  
    return (
        <>
          {props.img
            ? <div 
            className={style.cubeOn}>
              <img src={props.img} width='100%' height={100} className='object-cover duration-150 ease-in ef-img'alt="cubo"/>
            </div>
            : <div className={style.cubeOff} ></div>
          }
        </>
    );
  }
  
  export default Cube