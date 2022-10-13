import React from 'react';
import dynamic from 'next/dynamic'
import { FormattedMessage } from 'react-intl';
import AppLayout from '../components/layout/AppLayout';
import Swich from '../components/toggleSwitch';
// import Premium from '../components/mint_page/Carousel_legendary';
import { BiArrowBack } from 'react-icons/bi'
import Roadmap from '../components/dragonKeeper/roadmapDK'
import Image from 'next/image'
import Link from 'next/link';
import NFTZone from '../components/mint_page/NFT_zone';
import DkProject from '../components/dragonKeeper/dkProject';
import Whitelist from '../components/mint_page/Whithelist';


// =========== Import dinamic =========== 
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

// =========== Import Image =================
import titulo from '../public/dragonkeeper/titulo.png'
import portada from '../public/dragonkeeper/portada.png'


const style = {
    section: 'w-full   md:px-6 xl:px-12 p-4 border-b flex flex-col items-center  text-center bord  bg-[#ffffffd8] pb-8 min-h-[45em]    max-w-screen-2xl    z-10',

}


function Proyecto() {


    return (
        <>
            <AppLayout>
                {/* {access? */}
                <div className='flex flex-col items-center justify-center w-full text-primary'>
                    <div className={style.section}>
                        {/*  ============================ buttons ============================ */}
                        <div className='grid items-center w-11/12 grid-cols-2 -mt-2 ' >
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
                        {/* ============================ Img - Title ============================ */}
                        <div className='flex justify-center w-7/12 mb-2 sm:w-2/5'>
                            <Image
                                src={titulo}
                                alt="Título película"
                            />
                        </div>
                        {/* ---------- WHITELIST ----------- */}
                        <div className='flex flex-col items-center justify-center w-11/12 mt-4 mb-8 '>
                            <p className='px-2 mb-2 bg-white  border-t-4 border-b-4 border-[#7b94b143]'>
                            <FormattedMessage id="wl.metamask.tittle1" defaultMessage=''/>
                                <span className='text-secondary'>WHITELIST</span>
                                <FormattedMessage id="wl.metamask.tittle2" defaultMessage=''/>
                            </p>
                            <div className='bg-white'>
                                <Whitelist />
                            </div>
                        </div>
                        {/* ============================ Video/Image ============================= */}
                        <div className='flex flex-col items-center w-11/12 p-2 border-t-2 border-b-2 border-primary'>
                            <div className='flex justify-center w-full '>
                                {/* <ReactPlayer
                                    url='https://www.youtube.com/watch?v=UYNH-_3SEPg'
                                    controls
                                /> */}
                                <Image
                                    className='rounded-lg'
                                    src={portada}
                                    alt='niña con dragón'
                                />
                            </div>
                            {/* ---- Sinopsis ---- */}
                            <div className='w-full mt-2 text-justify bg-white '>
                                <p><FormattedMessage id='dk.sipnosis1' defaultMessage='sipnosis' /></p>
                                <p><FormattedMessage id='dk.sipnosis2' defaultMessage='sipnosis' /></p>
                                <p><FormattedMessage id='dk.sipnosis3' defaultMessage='sipnosis' /></p>
                                <p><FormattedMessage id='dk.sipnosis4' defaultMessage='sipnosis' /></p>
                            </div>
                        </div>
                    </div>
                    {/* ============================ NFT ============================= */}
                    <div className={style.section}>
                        <NFTZone />
                    </div>
                    {/* ============================ Project ============================= */}
                    <div className={style.section}>
                        <h2 className='py-6 mb-8 text-3xl may'>
                            <FormattedMessage
                                id='dk.title.project'
                                defaultMessage='PROYECTO'
                            />
                        </h2>
                        <DkProject />
                    </div>
                    {/* ============================ ROADMAP ============================= */}
                    <div className={style.section}>
                        <h2 className='py-6 mb-8 text-3xl'>ROADMAP</h2>
                        <Roadmap />
                    </div>
                </div>
            </AppLayout>
        </>
    );
}

export default Proyecto;
