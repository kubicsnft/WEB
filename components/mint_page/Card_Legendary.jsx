import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';
import { MovingSquareLoader } from 'react-loaders-kit';






function CardPremium(props) {



    console.log(props.test)
    return (
        <div className="  bg-white p-1 flex flex-col items-cener rounded-lg shadow-md box  border-primary sm:shadow-[#7B94b1]  w-72 sm:w-96">
            {props.sold ? <div className='rounded-lg absolute z-10  w-full sm:h-[23.6rem] h-[19.2rem] bg-[#4d4c4c9a] left-0'></div> : ''}
            <div>
                <Image
                    className="flex rounded-md"
                    key={props.id}
                    src={props.image}
                    alt='nft image'
                    layout='responsive'
                    width={364}
                    height={273}
                />
                {/* {setLoading(false)} */}
            </div>
            <div className='flex flex-row justify-between w-full p-2 text-primary'>
                <div className="flex flex-col items-start justify-between gap-2">
                    <h3 className="text-sm font-bold">{props.title}</h3>
                    {/* <p className='text-sm text-start'>{props.description}</p> */}
                    <div className='z-20 w-44'>
                        <div className='flex items-center justify-center h-12 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div>
                        {/* {props.sold
                            ? <div className='flex items-center justify-center h-12 text-2xl font-bold tracking-widest text-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='sold'
                                defaultMessage='SOLD'
                                />
                            </div>
                            : <button className="text-sm shadow-md button learn-more" onClick={() => addToWhitelist()}>
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text" translate="no">
                                    Buy Now
                                </span>
                            </button>} */}
                    </div>
                </div>
                <div className=' text-start'>
                    <p>Price</p>
                    <p className='flex flex-row items-center ' >
                        <FaEthereum />0,5
                    </p>
                </div>
            </div>
        </div>
    );
};



export default CardPremium
