import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

// =========== Imagenes =================

import dk_img1 from '../../public/dragonkeeper/img1.jpg'
import dk_img2 from '../../public/dragonkeeper/img2.jpg'
import dk_voice1 from '../../public/dragonkeeper/voice/ping.png'
import dk_voice2 from '../../public/dragonkeeper/voice/mayailnee.png'
import dk_voice3 from '../../public/dragonkeeper/voice/Danzi2.png'
import dk_voice4 from '../../public/dragonkeeper/voice/Bill.png'
import dk_voice5 from '../../public/dragonkeeper/voice/WangChao.png'
import dk_voice6 from '../../public/dragonkeeper/voice/Bayble.png'
import Cube from '../cube';


const DkProject = () => {
    return (

        <>

            <div className='flex flex-col w-10/12 gap-8 md:w-11/12' >
                <div className='flex flex-row w-full gap-8'>
                    <div className='flex flex-col gap-4 bg-white rounded-lg md:shadow-md'>
                        {/* ----------------- Project description ----------------- */}
                        <div className='flex flex-col justify-between p-3 text-justify bg-white rounded-lg shadow-md md:shadow-none text-primary'>
                            <h3 className='text-lg text-start may text-secondary'>PROYECTO</h3>
                            <div className=''>
                                <FormattedMessage
                                    id='dk.description'
                                    defaultMessage='description'
                                />
                            </div>
                            {/* Image_1 for mobile */}
                            <div className='rounded-lg md:hidden'>
                                <Image
                                    className='object-cover w-full h-full rounded-lg shadow-md md:hidden'
                                    src={dk_img1}
                                    alt="soldier"
                                />
                            </div>
                        </div>
                        {/* ----------------- Project story ----------------- */}
                        <div className='flex flex-col justify-between p-3 text-justify bg-white rounded-lg shadow-md md:shadow-none text-primary'>
                            <h3 className='text-lg text-start may text-secondary'>HISTORIA</h3>
                            <div className=''>
                                <FormattedMessage
                                    id='dk.story'
                                    defaultMessage='story'
                                />
                            </div>
                            {/* Image_2 for mobile */}
                            <div className='rounded-lg md:hidden'>
                                <Image
                                    className='object-cover w-full rounded-lg md:hidden'
                                    src={dk_img2}
                                    alt="panoramic"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image_1 */}
                    <div className='flex-row hidden rounded-lg shadow-lg md:flex'>
                        <Image
                            className='object-cover rounded-lg shadow-md'
                            src={dk_img1}
                            alt="soldier"
                        />
                    </div>
                </div>
                {/* Image_2 */}
                <div className='hidden rounded-lg shadow-lg md:flex'>
                    <Image
                        className='object-cover w-full rounded-lg'
                        src={dk_img2}
                        alt="panoramic"
                    />
                </div>
                {/* ----------------- CASTING ------------------ */}
                <div>
                    <h3 className='text-lg text-secondary text-start may'>CASTING VOICE</h3>
                    <div className='flex flex-col flex-wrap items-center justify-around gap-4 2xl:gap-10 lg:flex-nowrap lg:flex-row'>
                        {/* Voice-Ping */}
                        <div className='flex flex-col w-full p-3 bg-white rounded-lg shadow-lg sm:w-10/12 md:w-8/12 xl:w-4/12'>
                            <div className='flex flex-row items-center gap-4 mb-2 text-lg text-start text-primary'>
                                <div className='w-[5rem] h-[5rem] xl:w-[7rem] xl:h-[7rem]'>
                                    <Cube img='/dragonkeeper/voice/mayailnee.png' />
                                </div>
                                <p>Mayalinee Griffiths <FormattedMessage id='AS' defaultMessage='es'/> Ping</p>
                            </div>
                            <Image src={dk_voice1} alt='Ping' className='rounded-lg' />
                        </div>
                        {/* Voice-Danzi */}
                        <div className='flex flex-col w-full p-3 bg-white rounded-lg shadow-lg sm:w-10/12 md:w-8/12 xl:w-4/12'>
                            <div className='flex flex-row items-center gap-4 mb-2 text-lg text-start text-primary'>
                                <div className='w-[5rem] h-[5rem] xl:w-[7rem] xl:h-[7rem]'>
                                    <Cube img='/dragonkeeper/voice/Bill.png' />
                                </div>
                                <p>Bill Nighy <FormattedMessage id='AS' defaultMessage='es'/> Danzi</p>
                            </div>
                            <Image src={dk_voice3} alt='Ping' className='rounded-lg' />
                        </div>
                        {/* Voice-WangChao */}
                        <div className='flex flex-col w-full p-3 bg-white rounded-lg shadow-lg sm:w-10/12 md:w-8/12 xl:w-4/12'>
                            <div className='flex flex-row items-center gap-4 mb-2 text-lg text-start text-primary'>
                                <div className='w-[5rem] h-[5rem] xl:w-[7rem] xl:h-[7rem]'>
                                    <Cube img='/dragonkeeper/voice/Bayble.png' />
                                </div>
                                <p>Bill Bayley <FormattedMessage id='AS' defaultMessage='es'/> Wang Chao</p>
                            </div>
                            <Image src={dk_voice5} alt='Wang chao' className='rounded-lg' />
                        </div>

                    </div>
                </div>
                {/* ----------------- Credits -----------------  */}
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center w-full p-3 text-lg bg-white rounded-lg shadow-lg'>
                        <p>Director : Salvador Simó</p>
                        <p>Co-Director: Li Jianping</p>
                        <p>Producer: Larry Levene</p>
                        <p>Art Director: Elisa Castro</p>
                        <p>Animation Director: Abraham López</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DkProject;
