import Image from 'next/image'
import React from 'react'
import { useState } from "react"
import dynamic from 'next/dynamic'
import NftCard from "./Card_Legendary";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from 'react-intl';


// Import dynamic
const Carrusel = dynamic(() => import('../carrusel3d/carrusel'), { ssr: false })

// ------------------------- Import image -------------------------
import legend0 from '../../public/dragonkeeper/nft_legenday/0.webp'
import legend1 from '../../public/dragonkeeper/nft_legenday/1.webp'
import legend2 from '../../public/dragonkeeper/nft_legenday/2.webp'
import legend3 from '../../public/dragonkeeper/nft_legenday/3.webp'
import legend4 from '../../public/dragonkeeper/nft_legenday/4.webp'
import legend5 from '../../public/dragonkeeper/nft_legenday/5.webp'
import legend6 from '../../public/dragonkeeper/nft_legenday/6.webp'
import legend7 from '../../public/dragonkeeper/nft_legenday/7.webp'

import legend8 from '../../public/dragonkeeper/nft_legenday/8.webp'
import legend9 from '../../public/dragonkeeper/nft_legenday/9.webp'
import legend10 from '../../public/dragonkeeper/nft_legenday/10.webp'
import legend11 from '../../public/dragonkeeper/nft_legenday/11.webp'
import legend12 from '../../public/dragonkeeper/nft_legenday/12.webp'
import legend13 from '../../public/dragonkeeper/nft_legenday/13.webp'
import legend14 from '../../public/dragonkeeper/nft_legenday/14.webp'
import legend15 from '../../public/dragonkeeper/nft_legenday/15.webp'

import legend16 from '../../public/dragonkeeper/nft_legenday/16.webp'
import legend17 from '../../public/dragonkeeper/nft_legenday/17.webp'
import legend18 from '../../public/dragonkeeper/nft_legenday/18.webp'
import legend19 from '../../public/dragonkeeper/nft_legenday/19.webp'
import legend20 from '../../public/dragonkeeper/nft_legenday/20.webp'
import legend21 from '../../public/dragonkeeper/nft_legenday/21.webp'
import legend22 from '../../public/dragonkeeper/nft_legenday/22.webp'
import legend23 from '../../public/dragonkeeper/nft_legenday/23.webp'

import legend24 from '../../public/dragonkeeper/nft_legenday/24.webp'
import legend25 from '../../public/dragonkeeper/nft_legenday/25.webp'
import legend26 from '../../public/dragonkeeper/nft_legenday/26.webp'
import legend27 from '../../public/dragonkeeper/nft_legenday/27.webp'
import legend28 from '../../public/dragonkeeper/nft_legenday/28.webp'
import legend29 from '../../public/dragonkeeper/nft_legenday/29.webp'
import legend30 from '../../public/dragonkeeper/nft_legenday/30.webp'
import legend31 from '../../public/dragonkeeper/nft_legenday/31.webp'

import legend32 from '../../public/dragonkeeper/nft_legenday/32.webp'
import legend33 from '../../public/dragonkeeper/nft_legenday/33.webp'
import legend34 from '../../public/dragonkeeper/nft_legenday/34.webp'
import legend35 from '../../public/dragonkeeper/nft_legenday/35.webp'
import legend36 from '../../public/dragonkeeper/nft_legenday/36.webp'
import legend37 from '../../public/dragonkeeper/nft_legenday/37.webp'
import legend38 from '../../public/dragonkeeper/nft_legenday/38.webp'
import legend39 from '../../public/dragonkeeper/nft_legenday/39.webp'


// Array nft sold
const arrayTest = ['y']

const SoldNft = (id) => {
    var sold = false
    for (var i = 0; i < arrayTest.length; i++) {
        if (arrayTest[i] === id) {
            sold = true
        }
    }
    return sold
}

// Syiles Tailwind 
const style = {
    container: 'flex-col mt-8 items-center w-full justify-center   sm:mb-16',
    category_box: ' border rounded-md cursor-pointer shadow-lg mr-2 text-sm w-20 '
}


function Carousel(props) {


    // ------- Categorys of arrays -------
    const gold = [
        {
            key: uuidv4(),
            content: <NftCard
                id='0'
                image={legend0}
                title='Dragonkeeper Legendary 0'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('0')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='1'
                image={legend1}
                title='Dragonkeeper Legendary 1'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('1')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='2'
                image={legend2}
                title='Dragonkeeper Legendary 2'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('2')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='3'
                image={legend3}
                title='Dragonkeeper Legendary 3'
                // // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('3')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='4'
                image={legend4}
                title='Dragonkeeper Legendary 4'
                // // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('4')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='5'
                image={legend5}
                title='Dragonkeeper Legendary 5'
                // // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('5')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='6'
                image={legend6}
                title='Dragonkeeper Legendary 6'
                // // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('6')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='7'
                image={legend7}
                title='Dragonkeeper Legendary 7'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('7')}
            />
        }]
    const bronce = [
        {
            key: uuidv4(),
            content: <NftCard
                id='8'
                image={legend8}
                title='NFT Dragonkeeper Legendary 8'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('8')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='9'
                image={legend9}
                title='NFT Dragonkeeper Legendary 9'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('9')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='10'
                image={legend10}
                title='NFT Dragonkeeper Legendary 10'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('10')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='11'
                image={legend11}
                title='NFT Dragonkeeper Legendary 11'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('11')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='12'
                image={legend12}
                title='NFT Dragonkeeper Legendary 12'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('12')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='13'
                image={legend13}
                title='NFT Dragonkeeper Legendary 13'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('13')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='14'
                image={legend14}
                title='NFT Dragonkeeper Legendary 14'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('14')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='15'
                image={legend15}
                title='NFT Dragonkeeper Legendary 15'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('15')}
            />
        }]
    const silver = [
        {
            key: uuidv4(),
            content: <NftCard
                id='16'
                image={legend16}
                title='NFT Dragonkeeper Legendary 16'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('16')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='17'
                image={legend17}
                title='NFT Dragonkeeper Legendary 17'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('17')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='18'
                image={legend18}
                title='NFT Dragonkeeper Legendary 18'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('18')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='19'
                image={legend19}
                title='NFT Dragonkeeper Legendary 19'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('19')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='20'
                image={legend20}
                title='NFT Dragonkeeper Legendary 20'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('20')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='21'
                image={legend21}
                title='NFT Dragonkeeper Legendary 21'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('21')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='22'
                image={legend22}
                title='NFT Dragonkeeper Legendary 22'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('22')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='23'
                image={legend23}
                title='NFT Dragonkeeper Legendary 23'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('23')}
            />
        }]
    const stone = [
        {
            key: uuidv4(),
            content: <NftCard
                id='32'
                image={legend32}
                title='NFT Dragonkeeper Legendary 32'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('32')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='33'
                image={legend33}
                title='NFT Dragonkeeper Legendary 33'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('33')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='34'
                image={legend34}
                title='NFT Dragonkeeper Legendary 34'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('34')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='35'
                image={legend35}
                title='NFT Dragonkeeper Legendary 35'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('35')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='36'
                image={legend36}
                title='NFT Dragonkeeper Legendary 36'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('36')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='37'
                image={legend37}
                title='NFT Dragonkeeper Legendary 37'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('37')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='38'
                image={legend38}
                title='NFT Dragonkeeper Legendary 38'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('38')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='39'
                image={legend39}
                title='NFT Dragonkeeper Legendary 39'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('39')}
            />
        }]
    const marble = [
        {
            key: uuidv4(),
            content: <NftCard
                id='24'
                image={legend24}
                title='NFT Dragonkeeper Legendary 24'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('24')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='25'
                image={legend25}
                title='NFT Dragonkeeper Legendary 25'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('25')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='26'
                image={legend26}
                title='NFT Dragonkeeper Legendary 26'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('26')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='27'
                image={legend27}
                title='NFT Dragonkeeper Legendary 27'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('27')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='28'
                image={legend28}
                title='NFT Dragonkeeper Legendary 28'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('28')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='29'
                image={legend29}
                title='NFT Dragonkeeper Legendary 29'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('29')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='30'
                image={legend30}
                title='NFT Dragonkeeper Legendary 30'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('30')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='31'
                image={legend31}
                title='NFT Dragonkeeper Legendary 31'
                // connectFunction = {connectFunction}
                // connected={connected}
                sold={SoldNft('31')}
            />
        }]


    const [category, setCategory] = useState(gold);
    const [categoryButton, setCategoryButton] = useState('gold');

    // category changue 
    const changueA = () => {
        setCategory(gold)
        setCategoryButton('gold')
    }
    const changueB = () => {
        setCategory(bronce)
        setCategoryButton('bronce')
    }
    const changueC = () => {
        setCategory(silver)
        setCategoryButton('silver')
    }
    const changueD = () => {
        setCategory(marble)
        setCategoryButton('marble')
    }
    const changueE = () => {
        setCategory(stone)
        setCategoryButton('stone')
    }
    // ----------------

    const CarruselSize = (props) => {
        return (<Carrusel category={props.category} radius={props.radius} />)
    }

    return (
        <>
            <div className={style.container}>
                {/* --------- Description --------- */}
                <div className='flex flex-col items-start '>
                    <h2 className='w-full mb-4 text-lg border-b may text-secondary text-start'>LEGENDARY CATEGORY</h2>
                    <div className='flex flex-col justify-center w-full pl-6 mb-8 items-star'>
                        <ul className='mb-2 list-disc text-start'>
                            <li className='mb-2'><FormattedMessage id='nft.legendary1' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary2' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary3' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary4' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary5' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary6' default='description' /></li>
                            <li className='mb-2'><FormattedMessage id='nft.legendary7' default='description' /></li>
                        </ul>

                    </div>
                </div>
                {/* --------- Categorys --------- */}

                <div className='flex flex-row justify-center p-1 '>
                    <div
                        className={`${style.category_box}${categoryButton === 'gold' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueA}
                    >
                        Gold
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'bronce' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueB}
                    >
                        Bronce
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'silver' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueC}
                    >
                        Platinum
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'marble' ? "font-bold border-secondary shadow-lg  shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueD}
                    >
                        Marble
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'stone' ? "font-bold border-secondary shadow-lg  shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueE}
                    >
                        Stone
                    </div>
                </div>
                {/* -------------- Carousel ---------- */}
                {/* Carousel xl */}
                <div className='mt-4 md:hidden' >
                    <CarruselSize category={category} radius={1} />
                </div>
                {/* Carousel md */}
                <div className='hidden mt-4 md:flex xl:hidden'>
                    <CarruselSize category={category} radius={2} />
                </div>
                {/* Carousel sm */}
                <div className='hidden mt-4 xl:flex'>
                    <CarruselSize category={category} radius={4} />
                </div>



            </div>
        </>
    )
}

export default Carousel
