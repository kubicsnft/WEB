import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import Cube from "react-3d-cube";

const SocialNetworks = (props) => {

    var color = 'text-white bg-[#7B94b1]'
    var text = ''

    if (props.color)
        color = props.color
    if (props.text)
        text = props.text


    const style = {
        icono: 'text-2xl p-1 flex justify-center border border-white rounded-lg hover:shadow-xl  hover:text-[#E1B649] transition  hover:scale-110 ease-in-out  duration-500',
    }

    style.icono = style.icono + color

    return (
        <div className='w-full '>
            <div className='flex flex-row justify-between w-full '>
                <a href="https://mobile.twitter.com/Kubics_NFT">
                    <div className={`${style.icono} ${color} ${text} `} >
                        <AiOutlineTwitter />
                    </div>
                </a>
                <a href="http://discord.gg/WpYwyCgNmu">
                    <div className={`${color} ${text} ${style.icono} `} >
                        <SiDiscord />
                    </div>
                </a>
                <a href="https://www.instagram.com/kubics_nft/">
                    <div className={`${color} ${text} ${style.icono}`} >
                        <AiFillInstagram />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SocialNetworks;
