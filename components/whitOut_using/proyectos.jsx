import React from 'react';
import Cube from '../cube';


const style = {
    container: '',
    header: 'mb-8 mt-4 text-3xl',
    wraaper: 'h-4/5 max-h-full w-full flex flex-wrap flex-row justify-around overflow-auto barra-scroll scroll-smooth py-4 ',
    cube: 'mr-8 mb-4 '  
    


}


const Proyectos = () => {
    return (
        <>
            <h2 className={style.header}>PROYECTOS</h2>
            <div className={style.wraaper}>
                <div className={style.cube}>
                    <Cube link='./test' imag='/img.png' />
                </div>
                <div className={style.cube}>
                    <Cube link='./test' imag='/img.png' />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
                <div className={style.cube}>
                    <Cube link='./test'  />
                </div>
            </div>
        </>
    );
}

export default Proyectos;
