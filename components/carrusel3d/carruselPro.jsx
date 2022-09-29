import React, { Component, useEffect, useState } from "react";
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Cube3d from "../cube3d";
import Link from 'next/link'
import Image from "next/image";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FormattedMessage } from "react-intl";



export default function Slider(props) {

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        showNavigation: false,
        config: config.default,

    });

    const [desplegar, setDesplegar] = useState({
        desplegar: 'hidden',
        mas: 'inline cursor-pointer text-secondary'
    });

    const changueText = () => {
        (desplegar.mas === 'inline cursor-pointer text-secondary')
            ?
            setDesplegar({
                desplegar: 'block',
                mas: 'hidden'
            })
            :
            setDesplegar({
                desplegar: 'hidden',
                mas: 'inline cursor-pointer text-secondary'
            })
    }


    const slides = [
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center p-2 bg-white w-72 sm:w-96 ">
                    {/* <Link href='/dragonKeeper'> */}
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                        src='/cubos/Cubo_DK.png'
                        alt='dragon Keeper'
                        width={250}
                        height={250} />
                    {/* </Link> */}
                    <h3 className="text-xl tracking-widest text-center text-secondary text-shadow">DRAGONKEEPER</h3>
                    <div className='p-2 text-sm text-justify text-white rounded-lg shadow-lg w-5/5 shadow-gray-400 bg-primary '>
                        <FormattedMessage
                            id="project.dragon"
                            default=''
                        />
                    </div>
                </div>
        },
        {
            key: uuidv4(),
            content:

                <div className="flex flex-col items-center bg-white rounded-lg w-72 sm:w-96 ">
                    {/* <Link href=''> */}
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-105"
                        src='/cubos/Cubo_FUT.png'
                        alt='dragon Keeper'
                        width={250}
                        height={250} />
                    {/* </Link> */}
                    <h3 className="text-xl tracking-widest text-center text-secondary">
                        <FormattedMessage
                            id="project.title.futuro"
                            default=''
                        />
                    </h3>
                    <div className='w-full p-2 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 bg-primary '>
                        <FormattedMessage
                            id="project.futuro1"
                            default=''
                        />
                        <span id='{desplegar}' className={desplegar.desplegar}>
                            <FormattedMessage
                                id="project.futuro2"
                                default=''
                            />
                            <div onClick={changueText} id="menos" className="cursor-pointer text-secondary">
                                <FormattedMessage
                                    id="readLess"
                                    default=''
                                />
                            </div>
                        </span>
                        <div onClick={changueText} className={desplegar.mas}>
                            <FormattedMessage
                                id="readMore"
                                default=''
                            />
                        </div>
                    </div>
                </div>
        },
        {
            key: uuidv4(),
            content:

                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-80 w-72 sm:w-96">
                    <Cube3d />
                    <h3 className="absolute mb-16 ml-8 text-2xl tracking-widest text-center -rotate-12 text-secondary may">COMING SOON...</h3>
                </div>

        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-80 w-72 sm:w-96">
                    <Cube3d />
                    <h3 className="absolute mb-16 ml-8 text-2xl tracking-widest text-center -rotate-12 text-secondary may">COMING SOON...</h3>
                </div>
        },
    ]



    return (
        <div className="flex flex-col items-center justify-start w-11/12 h-full xl:w-full ">
            <div style={{ width: "90%", height: "450px", margin: "0 auto" }} className=''>
                <Carousel
                    slides={slides}
                    goToSlide={state.goToSlide}
                    offsetRadius={state.offsetRadius}
                    showNavigation={state.showNavigation}
                    animationConfig={state.config}
                />
                {/* ------ buttons --------- */}
            <div className='flex flex-row justify-center w-full text-secondary'>
                {/* Button left */}
                <div className="mr-10 text-3xl transition duration-300 ease-in-out cursor-pointer hover:scale-150"
                    onClick={() => {
                        setState({ goToSlide: state.goToSlide - 1 });
                    }}>
                    <MdOutlineArrowBackIosNew />
                </div>
                {/* button right */}
                <div className="ml-10 text-3xl transition duration-300 ease-in-out cursor-pointer hover:scale-150"
                    onClick={() => {
                        setState({ goToSlide: state.goToSlide + 1 });
                    }}>
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
            </div>
        </div>
    );
}
