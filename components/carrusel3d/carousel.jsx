import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import Cube3d from "../cube3d";
import Link from "next/link";
import { config } from "react-spring";




export default function Carrusel1() {


    const [desplegar, setDesplegar] = useState({
        desplegar: 'hidden',
        mas: 'inline cursor-pointer text-tertiary'
    });

    const changueText = () => {
        (desplegar.mas === 'inline cursor-pointer text-tertiary')
            ?
            setDesplegar({
                desplegar: 'block ',
                mas: 'hidden'
            })
            :
            setDesplegar({
                desplegar: 'hidden',
                mas: 'inline cursor-pointer text-tertiary'
            })
    }


    // Components
    // const Slid = (
    //     <Slider>
    //         <div id="slider" className="flex items-start justify-center w-full h-full gap-6 p-8 transition duration-700 ease-out ">
    //             <Slide index={0}>

    //                 <div className="p-6 bg-white ">
    //                     {/* <Link href='/dragonKeeper'> */}
    //                         <Image
    //                             className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
    //                             src='/cubos/Cubo_DK.png'
    //                             alt='dragon Keeper'
    //                             width={270}
    //                             height={250} />
    //                     {/* </Link> */}
    //                     <h3 className="tracking-widest text-center xl:text-xl text-secondary may">DRAGONKEEPER</h3>
    //                     <div className='w-full p-2 text-justify text-white rounded-lg bg-primary '>
    //                         Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.
    //                     </div>
    //                 </div>


    //             </Slide>
    //             <Slide index={1}>

    //                 <div className="p-6 bg-white ">
    //                     {/* <Link href=''> */}
    //                     <Image
    //                         className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
    //                         src='/cubos/Cubo_FUT.png'
    //                         alt='dragon Keeper'
    //                         width={270}
    //                         height={250} />
    //                     {/* </Link> */}
    //                     <h3 className="tracking-widest text-center xl:text-xl text-secondary may">EL FUTURO YA ESTA AQUÍ</h3>
    //                     <p className='w-full p-2 text-justify text-white rounded-lg bg-primary '>
    //                         Largometraje de imágen real dirigido por Juan Vicente Córdoba. A finales de los años 70 y principios de los 80 en Madrid algunas emisoras de radio estaban estrechamente vinculadas a la divulgación de lo que
    //                         <span id='{desplegar}' className={desplegar.desplegar}>
    //                         estaba fraguándose.Una peculiar explosión creativa que constituyó todo un fenómeno social que cobró su verdadera dimensión y su total plenitud en la calle.
    //                             <div onClick={changueText} id="menos" className="cursor-pointer text-tertiary">... [leer menos]</div>
    //                         </span>
    //                         <p onClick={changueText} className={desplegar.mas}>... [leer más]</p>
    //                     </p>
    //                 </div>


    //             </Slide>
    //             <Slide index={2}>

    //                 <div className="h-[29.4rem]  bg-white ">
    //                     <div className="flex flex-col items-center justify-center h-full rounded-lg ">
    //                         <Cube3d />
    //                         <h3 className="absolute mb-16 ml-8 text-2xl tracking-widest text-center -rotate-12 text-secondary may">COMING SOON...</h3>
    //                     </div>
    //                 </div>

    //             </Slide>
    //             <Slide index={3}>
    //                 <div className="h-[29.4rem]  bg-white ">
    //                     <div className="flex flex-col items-center justify-center h-full rounded-lg ">
    //                         <Cube3d />
    //                         <h3 className="absolute mb-16 ml-8 text-2xl tracking-widest text-center -rotate-12 text-secondary may">COMING SOON...</h3>
    //                     </div>
    //                 </div>
    //             </Slide>

    //         </div>
    //     </Slider>)

    const SlidMovil = (
        <Slider>
            <div id="slider" className="flex items-start justify-center w-full h-full transition duration-75 ease-in-out">
                <Slide index={0}>

                    <div className="flex flex-col items-center py-6">
                        {/* <Link href='/dragonKeeper'> */}
                        <Image
                            className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                            src='/cubos/Cubo_DK.png'
                            alt='dragon Keeper'
                            width={230}
                            height={210} />
                        {/* </Link> */}
                        <h3 className="text-center text-secondary may">DRAGONKEEPER</h3>
                        <div className='w-10/12 p-2 text-sm text-justify text-white border-t rounded-lg bg-primary'>
                            Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.
                        </div>
                    </div>


                </Slide>
                <Slide index={1}>

                    <div className="flex flex-col items-center py-6">
                        {/* <Link href=''> */}
                        <Image
                            className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                            src='/cubos/Cubo_FUT.png'
                            alt='dragon Keeper'
                            width={230}
                            height={210} />
                        {/* </Link> */}
                        <h3 className="text-center text-secondary may">EL FUTURO YA ESTA AQUÍ</h3>
                        <div className='w-10/12 p-2 text-sm text-justify text-white rounded-lg bg-primary '>
                            Largometraje de imágen real dirigido por Juan Vicente Córdoba.
                            A finales de los años 70 y principios de los 80 en Madrid algunas emisoras de radio estaban estrechamente vinculadas a la divulgación de lo que estaba fraguándose.
                            <span id='{desplegar}' className={desplegar.desplegar}>
                                Una peculiar explosión creativa que constituyó todo un fenómeno social que cobró su verdadera dimensión y su total plenitud en la calle.
                                <div onClick={changueText} id="menos" className="cursor-pointer text-tertiary">... [leer menos]</div>
                            </span>
                            <p onClick={changueText} className={desplegar.mas}>... [leer más]</p>
                        </div>
                    </div>


                </Slide>
                <Slide index={2}>

                    <div className="h-[26.9rem] ">
                        <div className="flex flex-col items-center justify-center h-full rounded-lg ">
                            <Cube3d />
                            <div className="absolute ml-8 text-2xl tracking-widest text-center mb-14 xl:text-3xl -rotate-12 text-secondary may">COMING SOON...</div>
                        </div>
                    </div>

                </Slide>
                <Slide index={3}>
                    <div className="h-[26.8rem] ">
                        <div className="flex flex-col items-center justify-center h-full rounded-lg ">
                            <Cube3d />
                            <div className="absolute ml-8 text-2xl tracking-widest text-center mb-14 xl:text-3xl -rotate-12 text-secondary may">COMING SOON...</div>
                        </div>
                    </div>
                </Slide>

            </div>
        </Slider>)

    const ButtomB = (
        <ButtonBack
            role="button"
            aria-label="slide backward"
            className="text-secondary absolute -left-2 z-30 p-1   rounded-full cursor-pointer top-[10rem] opacity-40 border-primary  hover:opacity-100 "
            id="prev">
            <svg
                width={20}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="#E1B649" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </ButtonBack>)

    const ButtomN = (
        <ButtonNext
            role="button"
            aria-label="slide forward"
            className="text-secondary absolute -right-2 z-30 p-1   rounded-full cursor-pointer top-[10rem] opacity-40 border-primary  hover:opacity-100 "
            id="prev">
            <svg 
                width={20}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#E1B649" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </ButtonNext>)



    return (
        <div className="relative w-11/12 h-full sm:w-full ">
            <div className="container max-w-screen-2xl ">
                <div className="flex items-center justify-center w-full h-full ">

                    {/* ==================== Carousel for desktop and large size devices ===================================*/}
                    {/* <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
                            <div className="relative flex justify-center w-full">
                                {ButtomB}
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden bg-white border rounded-lg shadow-lg shadow-gray-400">
                                    {Slid}
                                </div>
                                {ButtomN}
                            </div>
                        </CarouselProvider> */}
                    {/* ==================== Carousel for mobile and Small size Devices =================================*/}

                    <CarouselProvider className="block bg-white border rounded-lg shadow-lg w-12/12 lg:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={false}>
                        <div className="relative flex justify-center w-full">
                            {ButtomB}
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                {SlidMovil}
                            </div>
                            {ButtomN}
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
}
