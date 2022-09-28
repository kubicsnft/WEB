import React from 'react';
import dynamic from 'next/dynamic'
import { FormattedMessage } from 'react-intl';
import AppLayout from '../components/layout/AppLayout';
import Swich from '../components/toggleSwitch';
import Premium from '../components/mint_page/premium';
import { BiArrowBack } from 'react-icons/bi'
import ReactPlayer from 'react-player';
import Roadmap from '../components/home/roadmap'
import Image from 'next/image'
// import Cube from '../components/cube';
import Link from 'next/link';
// =========== Imagenes =================
import titulo from '../public/titulo.png'
import dragon1 from '../public//nft/dragon1.png'
import dragon2 from '../public//nft/dragon2.png'
import dragon3 from '../public//nft/dragon3.png'
import dragon4 from '../public//nft/dragon4.png'


const style = {
    section: 'w-full  sm:px-4 md:px-6 xl:px-10  border-b flex flex-col items-center  text-center bord  bg-[#ffffffd8] pb-8 min-h-[45em]    max-w-screen-2xl    z-10',
    separador: 'h-1  w-4/5 border-b-2 border-primary',
}

// Importación dinamica para Carrusel3d
const Carrusel3d = dynamic(() => import('../components/carrusel3d/carrusel3d'), { ssr: false })

const Proyecto = () => {
    return (
        <>
            <AppLayout>
                <div className='flex flex-col justify-center w-full '>
                    <div className={style.section}>
                        {/*  =========== buttons =============== */}
                        <div className='grid items-center w-full grid-cols-2' >
                            <div className="text-lg text-start">

                                <Link href='/'>
                                    <div className='w-8 p-1 ml-4 text-xl text-center transition duration-300 ease-in-out border-2 rounded-full cursor-pointer border-primary text-secondary hover:-translate-x-2'>
                                        <BiArrowBack />
                                    </div>
                                </Link>

                            </div>
                            <div className="flex justify-end">
                                <Swich />
                            </div>
                        </div>
                        {/* ============= Img - Title =========== */}
                        <div className='flex justify-center w-2/5 mb-2'>
                            <Image
                                src={titulo}
                                alt="Título película"
                            />
                        </div>
                        {/* ============= Video ============== */}
                        <div className='flex flex-col items-center w-4/5 p-2 border-t-2 border-b-2 border-primary'>
                            <div className='flex justify-center w-full '>
                                {/* <ReactPlayer
                                    url='https://www.youtube.com/watch?v=UYNH-_3SEPg'
                                    controls
                                /> */}
                            </div>
                            {/* ---- Sinopsis ---- */}
                            <div className='w-full mt-2 text-justify'>
                                <p>
                                    Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.
                                </p>
                                <p>
                                    Basada en el primer libro de la colección Dragonkeeper de Carol Wilkinson, best seller internacional y dirigida por el galardonado director español Salvador Simó.
                                </p>
                                <p>
                                    Dragonkeeper cuenta una historia que transcurre durante la dinastía Han en la antigua China.  Ping es una joven niña  que vive como esclava en una remota fortaleza y en las mazmorras de esa fortaleza se  custodian a los últimos Dragones imperiales.
                                </p>
                                <p>
                                    Ping ayudará a escapar a Danzi ,el último dragón, y recuperará el huevo de dragón de las manos del enfermo emperador y su malvado consejero Diao. Esta historia es  un viaje donde Ping conocerá su poder interior y aceptará su destino como la última cuidadora de dragones …  los llamados Dragonkeepers.
                                </p>
                            </div>
                        </div>

                        {/* ============== NFT =============== */}
                        <div className='flex-col mt-8 items-center w-4/5 p-6 mb-8 rounded-xl shadow-lg shadow-[#7B94b1] bg-gray-100  border-primary' >
                            <h2 className='mb-8 text-3xl '>NFTs</h2>
                            {/* ------Carousel(category A) */}
                            <div className=''>
                                <div>Category A</div>
                                <Carrusel3d />
                            </div>
                            {/* --------- Categorys --------- */}
                            <div className='flex flex-row justify-between mt-24'>
                                <div className='w-56 mr-2 border-2 rounded-lg cursor-pointer border-primary box'>
                                    <div className='mb-2'>Category B</div>
                                    <Image src={dragon1} className='object-cover duration-150 ease-in ef-img' alt='nft' />
                                </div>
                                <div className='w-56 mr-2 border-2 rounded-lg cursor-pointer border-primary box'>
                                    <div className='mb-2'>Category C</div>
                                    <Image src={dragon2} className='object-cover duration-150 ease-in ef-img' alt='nft' />
                                </div>
                                <div className='w-56 mr-2 border-2 rounded-lg cursor-pointer border-primary box'>
                                    <div className='mb-2'>Category D</div>
                                    <Image src={dragon3} className='object-cover duration-150 ease-in ef-img' alt='nft' />
                                </div>
                                <div className='w-56 mr-2 border-2 rounded-lg cursor-pointer border-primary box'>
                                    <div className='mb-2'>Category E</div>
                                    <Image src={dragon4} className='object-cover duration-150 ease-in ef-img' alt='nft' />
                                </div>
                            </div>
                            
                            {/* ---------- Button Mint ------------ */}
                            <div className='flex justify-center mt-10'>
                                
                                <button className="mt-4 learn-more button" onClick={() => addToWhitelist()}>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text" translate="no">PÁGINA DE MINTEO</span>
                                </button>
                            </div>
                        </div>
                        {/* <div className={style.separador}></div> */}
                        <div>
                            <h2 className='py-6 mb-8 text-3xl'>ROADMAP PROYECTO</h2>
                            <Roadmap />
                        </div>
                        <div>
                            <h2 className='mt-8 mb-8 text-3xl'>PROYECTO</h2>

                        </div>
                    </div>
                    <div className={style.section}>
                                <Premium/>
                    </div>
                </div>

            </AppLayout>
        </>
    );
}

export default Proyecto;
