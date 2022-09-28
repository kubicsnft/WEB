import React from "react";
import Image from 'next/image';
import Link from 'next/link'



function Cube(props) {

  const style ={
    cubeOn:'flex  h-full w-full cube    cursor-pointer z-50 ',
    cubeOff:'flex h-full w-full cube  '
  }
    
  
    return (
        <Link href={props.link} >
          {props.img
            ? 
            <div 
                className={style.cubeOn} >
              <div 
                  className='w-full h-full duration-150 ease-in ef-img' 
                  style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `100% 100%`}} >
              </div>
            </div>
            
            :<div className={style.cubeOff} ></div>
          }
        </Link>
    );
  }
  
  export default Cube