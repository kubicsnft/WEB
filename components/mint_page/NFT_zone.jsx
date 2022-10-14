import React from 'react';
import Carousel_Legend from './Carousel_legendary';
import NftCard from "./Card_Legendary";
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';

// import gif categorys
import ultraRare from '../../public/dragonkeeper/gif/ultraRare.gif'
import rare from '../../public/dragonkeeper/gif/rare.gif'
import uncommon from '../../public/dragonkeeper/gif/uncommon.gif'
import common from '../../public/dragonkeeper/gif/common.gif'



const NFTZone = () => {



    return (

        <div className='flex-col mt-5  lg:p-12 sm:p-10 p-4 items-center w-11/12  mb-4 rounded-lg border-2 shadow-lg shadow-[#7B94b1] bg-[#ffffff]  border-primary' >
            <div className='md:absolute md:w-6/12 w-12/12  bg-[#7094b16e] rouded-lg md:left-1/4 -mt-20 md:text-2xl tracking-widest text-center -rotate-6 px-10 p-4 text-white may'>
                <FormattedMessage
                    id='imminent'
                    defaultMessage='IMINENTE'
                />
            </div>
            <h2 className='mb-4 text-3xl font-bold'>NFTs</h2>

            {/* --------- Description --------- */}
            <div className='mb-8 text-justify' >
                <FormattedMessage
                    id='nft.description'
                    default='description'
                />
                <p className='mt-4'>
                    <FormattedMessage
                        id='nft.description2'
                        default='description'
                    />
                </p>
            </div>
            {/* =========================== LEGENDARY Category =========================== ) */}
            <div className='mb-32'>
                <Carousel_Legend />
            </div>
            {/* =========================== ULTRA RARE Category =========================== */}
            <div className='flex flex-col items-center justify-around w-full gap-5 mb-20 text-justify rounded-lg sm:p-4 lg:gap-10 sm:shadow-md lg:items-start lg:flex-row'>
                <div className='w-full text-lg border-b text-start may text-secondary lg:hidden'>ULTRA RARE</div>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={ultraRare}
                        alt='nft image'
                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Ultra Rare </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.4
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col lg:items-start items-center justify-between lg:w-auto sm:w-[26.5rem] h-12/12'>
                    <div className='hidden w-full mb-6 text-lg border-b may text-secondary text-start lg:flex'>ULTRA RARE</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare1' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare2' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare3' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare4' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare5' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare6' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.ultrarare7' default='description' /></li>
                    </ul>
                    <div className='flex items-center mt-4 text-center ml- w-52'>
                        {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button> */}
                        <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== RARE Category =========================== */}
            {/* --------------- For Mobile --------------- */}
            <div className='flex flex-col items-center justify-around w-full gap-5 mb-20 text-justify rounded-lg lg:hidden sm:p-4 lg:gap-10 sm:shadow-md lg:items-start lg:flex-row'>
                <div className='w-full text-lg border-b text-start may text-secondary lg:hidden'>RARE</div>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={rare}
                        alt='nft image'

                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Rare </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.3
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col lg:items-start items-center justify-between lg:w-auto sm:w-[26.5rem] h-12/12'>
                    <div className='hidden w-full mb-6 text-lg border-b may text-secondary text-start lg:flex'>RARE</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li className='mb-2'><FormattedMessage id='nft.rare1' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.rare2' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.rare3' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.rare4' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.rare5' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.rare6' default='description' /></li>

                    </ul>
                    <div className='flex items-center mt-4 text-center ml- w-52'>
                        {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button> */}
                        <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- For Screen --------------- */}
            <div className='flex-col items-center justify-around hidden w-full p-4 mb-20 text-justify rounded-lg shadow-md lg:flex lg:items-start lg:flex-row'>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-center justify-between h-12/12 '>
                    <div className='flex flex-col items-start justify-center w-full mb-8'>
                        <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>RARE</div>
                        <ul className='ml-8 list-disc text-start'>
                            <li className='mb-2'><FormattedMessage id='nft.rare1' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.rare2' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.rare3' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.rare4' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.rare5' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.rare6' default='description' /></li>
                        </ul>
                        <div className='flex items-center mt-4 text-center ml- w-52'>
                            {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text " translate="no">
                                    Buy Now
                                </span>
                            </button> */}
                            <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                                <FormattedMessage
                                    id='imminent'
                                    defaultMessage='IMINENTE'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT CARD ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={rare}
                        alt='nft image'

                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Rare </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== UNCOMMON Category =========================== */}
            <div className='flex flex-col items-center justify-around w-full gap-5 mb-20 text-justify rounded-lg sm:p-4 lg:gap-10 sm:shadow-md lg:items-start lg:flex-row'>
                <div className='w-full text-lg border-b text-start may text-secondary lg:hidden'>UNCOMMON</div>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={uncommon}
                        alt='nft image'

                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Uncommon </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.2
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col lg:items-start items-center justify-between lg:w-auto sm:w-[26.5rem] h-12/12 p-4' >
                    <div className='hidden w-full mb-6 text-lg border-b may text-secondary text-start lg:flex'>UNCOMMON</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li className='mb-2'><FormattedMessage id='nft.uncommon1' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.uncommon2' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.uncommon3' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.uncommon4' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.uncommon5' default='description' /></li>

                    </ul>
                    <div className='flex items-center mt-4 text-center ml- w-52'>
                        {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button> */}
                        <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================== COMMON Category =========================== */}
            {/* --------------- For Mobile --------------- */}
            <div className='flex flex-col items-center justify-around w-full gap-5 mb-20 text-justify rounded-lg sm:p-4 lg:hidden lg:gap-10 sm:shadow-md lg:items-start lg:flex-row'>
                <div className='w-full text-lg border-b text-start may text-secondary lg:hidden'>COMMON</div>
                {/* ----------- NFT card ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={common}
                        alt='nft image'

                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d]'>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Common </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.18
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col lg:items-start items-center justify-between lg:w-auto sm:w-[26.5rem] h-12/12'>
                    <div className='hidden w-full mb-6 text-lg border-b may text-secondary text-start lg:flex'>COMMON</div>
                    <ul className='ml-8 list-disc text-start'>
                        <li className='mb-2'><FormattedMessage id='nft.common1' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.common2' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.common3' default='description' /></li>
                        <li className='mb-2'><FormattedMessage id='nft.common4' default='description' /></li>
                    </ul>
                    <div className='flex items-center mt-4 text-center ml- w-52'>
                        {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text " translate="no">
                                Buy Now
                            </span>
                        </button> */}
                        <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                            <FormattedMessage
                                id='imminent'
                                defaultMessage='IMINENTE'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- For Screen --------------- */}
            <div className='flex-col items-center justify-around hidden w-full p-4 mb-20 text-justify rounded-lg shadow-md lg:flex lg:items-start lg:flex-row'>
                {/* ----------- NFT DESCRIPTION ----------- */}
                <div className='flex flex-col items-center justify-between h-12/12 '>
                    <div className='flex flex-col items-start justify-center w-full mb-8'>
                        <div className='w-full mb-6 text-lg border-b may text-secondary text-start'>COMMON</div>
                        <ul className='ml-8 list-disc text-start'>
                            <li className='mb-2'><FormattedMessage id='nft.common1' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.common2' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.common3' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.common4' default='description' /></li>
                        </ul>
                        <div className='flex items-center mt-4 text-center ml- w-52'>
                            {/* <button className="bg-white shadow-lg button learn-more" onClick='' >
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text " translate="no">
                                    Buy Now
                                </span>
                            </button> */}
                            <div className='flex items-center justify-center h-12 px-5 text-sm font-bold tracking-widest border text-primary border-secondary -rotate-6 may'>
                                <FormattedMessage
                                    id='imminent'
                                    defaultMessage='IMINENTE'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------- NFT CARD ----------- */}
                <div className='flex flex-col p-1 bg-white border-2 rounded-lg'>
                    <Image
                        className="w-full rounded-md"
                        src={common}
                        alt='nft image'

                    />
                    <div className='flex flex-row justify-between w-full p-2 txt-[#5d5d5d] '>
                        <div className=" text-start">
                            <h3 className="font-bold ">Dragonkeeper Common </h3>
                        </div>
                        <div className=' text-start'>
                            <p>Price</p>
                            <p className='flex flex-row items-center ' >
                                <FaEthereum />0.18
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NFTZone;
