import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import Cube3d from "../cube3d";
import Link from "next/link";
import { config } from "react-spring";
import { FormattedMessage } from "react-intl";




export default function Carrusel1() {


    const [desplegar, setDesplegar] = useState({
        desplegar: 'hidden',
        mas: 'inline cursor-pointer text-secondary'
    });

    const changueText = () => {
        (desplegar.mas === 'inline cursor-pointer text-secondary')
            ?
            setDesplegar({
                desplegar: 'block ',
                mas: 'hidden'
            })
            :
            setDesplegar({
                desplegar: 'hidden',
                mas: 'inline cursor-pointer text-secondary'
            })
    }


    // Components


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
                            <FormattedMessage
                                id="project.dragon"
                                default=''
                            />                        </div>
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
                        <h3 className="text-center text-secondary may">
                            <FormattedMessage
                                id="project.title.futuro"
                                default=''
                            />
                        </h3>
                        <div className='w-10/12 p-2 text-sm text-justify text-white rounded-lg bg-primary '>
                            <FormattedMessage
                                id="project.futuro1"
                                default=''
                            />
                            <span id='{desplegar}' className={desplegar.desplegar}>
                                <FormattedMessage
                                    id="project.futuro2"
                                    default=''
                                />
                                <div onClick={changueText} id="menos" className="cursor-pointer text-secondary">... [leer menos]</div>
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
