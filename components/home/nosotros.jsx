import React from 'react';
import { FormattedMessage } from 'react-intl';
import Cube from '../cube';

const Nosotros = () => {





    return (
        <>
            <div className='flex flex-wrap items-start justify-around w-full h-full felx-row sm:px-8 '>

                <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                    <div className='flex justify-center mb-4 w-52 h-52'>
                        <Cube link='' img='/team/Salvador.jpg' />
                    </div>
                    <p className='text-lg text-secondary may'>Salvador</p>
                    <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                        <FormattedMessage
                            id='team.salvador'
                            defaultMessage=''
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                    <div className='flex justify-center mb-4 w-52 h-52'>
                        <Cube link='' img='/team/Pedro.jpg' />
                    </div>
                    <p className='text-lg text-secondary may'>Pedro</p>
                    <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                        <FormattedMessage
                            id='team.pedro'
                            defaultMessage=''
                        />
                    </div>
                </div>

                <div className='flex flex-col items-center w-9/12 p-2 mb-8 sm:mb-0 sm:w-56'>
                    <div className='flex justify-center mb-4 w-52 h-52 backdrop-grayscale'>
                        <Cube link='' img='/team/Miguel.jpeg' />
                    </div>
                    <p className='text-lg text-secondary may'>Miguel</p>
                    <div className='w-full p-3 text-sm text-justify text-white rounded-lg shadow-lg shadow-gray-400 md:sm-48 bg-primary'>
                        <FormattedMessage
                            id='team.miguel'
                            defaultMessage=''
                        />
                    </div>
                </div>
                </div>
            </>
            );
}

            export default Nosotros;
