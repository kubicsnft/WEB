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
// Images
import futuro from '../../public/cubos/elFuturo.png'
import dk from '../../public/cubos/dragonkeeper.png'
import mancha from '../../public/cubos/laMancha.png'
import caramelo from '../../public/cubos/carameloW.png'


export default function Slider(props) {

    const [goToSlide, setstateGoToSlide] = useState(0);

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        showNavigation: false,
        config: config.default,

    });

    // Read More button -------------------------
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
    // --------------------------------------------

    const slides = [
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center p-2 bg-white w-72 sm:w-96 ">
                    <Link href='/dragonKeeper'>
                        <Image
                            className="flex transition duration-300 ease-in-out cursor-pointer hover:scale-105"
                            src={dk}
                            alt='dragon Keeper'
                            height={300}
                        />
                    </Link>
                    <h3 className="text-lg tracking-widest text-center text-secondary text-shadow may">DRAGONKEEPER</h3>
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
                        className="flex transition duration-300 ease-in-out cursor-pointe over:scale-105"
                        src={futuro}
                        alt='El fututo ya está aquí'
                        height={300}
                    />
                    {/* </Link> */}
                    <h3 className="text-lg tracking-widest text-center text-secondary may">
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
                            />                            <div onClick={changueText} id="menos" className="cursor-pointer text-secondary">... [leer menos]</div>
                        </span>
                        <div onClick={changueText} className={desplegar.mas}>... [leer más]</div>
                    </div>
                    <h3 className="absolute  bg-[#7094b16e] rounded-lg mb-44  text-2xl tracking-widest text-center -rotate-12 p-4 text-white may">
                        <FormattedMessage
                            id="coming.soon"
                            default='COMING SOON'
                        />
                    </h3>
                </div>

        },
        {
            key: uuidv4(),
            content:

                <div className="flex flex-col items-center bg-white rounded-lg w-72 sm:w-96">
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointe over:scale-105"
                        src={caramelo}
                        alt='Caramelo world'
                        height={300}
                    />
                    <h3 className="text-lg tracking-widest text-center text-secondary text-shadow may">
                    <FormattedMessage
                            id="project.caramelo.tittle"
                            default='Palabras de caramelo'
                        />
                    </h3>
                    <div className='p-2 text-sm text-justify text-white rounded-lg shadow-lg w-5/5 shadow-gray-400 bg-primary '>
                        <FormattedMessage
                            id="project.caramelo"
                            default='Película de animación CG basada en la obra universal de Cervantes. En Desarrollo.'
                        />
                    </div>
                    <h3 className="absolute  bg-[#7094b16e] rounded-lg mb-44  text-2xl tracking-widest text-center -rotate-12 p-4 text-white may"><FormattedMessage
                        id="coming.soon"
                        default='COMING SOON'
                    />
                    </h3>
                </div>

        },
        {
            key: uuidv4(),
            content:
                <div className="flex flex-col items-center bg-white rounded-lg w-72 sm:w-96">
                    <Image
                        className="flex transition duration-300 ease-in-out cursor-pointe over:scale-105"
                        src={mancha}
                        alt='En un lugar de la Mancha'
                        height={300}
                    />
                    <h3 className="text-lg tracking-widest text-center text-secondary text-shadow may">
                    <FormattedMessage
                            id="project.mancha.tittle"
                            default='En un lugar de la Mancha'
                        />
                    </h3>
                    <div className='p-2 text-sm text-justify text-white rounded-lg shadow-lg w-5/5 shadow-gray-400 bg-primary '>
                        <FormattedMessage
                            id="project.mancha"
                            default='Película de animación CG basada en la obra universal de Cervantes. En Desarrollo.'
                        />
                    </div>
                    <h3 className="absolute  bg-[#7094b16e] rounded-lg mb-44  text-2xl tracking-widest text-center -rotate-12 p-4 text-white may"><FormattedMessage
                        id="coming.soon"
                        default='COMING SOON'
                    />
                    </h3>
                </div>

        },
    ]



    return (
        <div className="flex items-center justify-center w-11/12 h-full pb-8 xl:w-full">
            <div style={{ width: "90%", margin: "0 auto" }} className='flex-col items-center sm:h-[480px] h-[350px]'>
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={state.offsetRadius}
                    showNavigation={state.showNavigation}
                    animationConfig={state.config}
                />
                {/*-------- Buttoms ------- */}
                <div className='flex flex-row justify-center w-full mt-12 sm:mt-10 md:mt-4 text-secondary'>
                    {/* Button left */}
                    <div className="p-1 mr-10 text-3xl transition duration-300 ease-in-out rounded-full shadow-lg cursor-pointer hover:scale-125"
                        onClick={() => {
                            setstateGoToSlide(goToSlide - 1);
                        }}>
                        <MdOutlineArrowBackIosNew />
                    </div>

                    {/* button right */}
                    <div className="p-1 ml-10 text-3xl transition duration-300 ease-in-out rounded-full shadow-lg cursor-pointer hover:scale-125"
                        onClick={() => {
                            setstateGoToSlide(goToSlide + 1);
                        }}>
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>


        </div>
    );
}
