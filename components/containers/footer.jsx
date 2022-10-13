import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../public/logos/logo_loop_SO.gif'
import Newsletters from '../Newsletter';
import SocialNetworks from '../SocialNetworksFooter';

const style = {
    container: '',
    header: 'mb-8 mt-4 text-3xl may',
    wraaper: ' w-full  flex flex-col items-between justify-between  h-5/6',

}

const Footer = () => {
    return (
        <>
            <h2 className={style.header}>
                <FormattedMessage
                    id='home.title4'
                    defaultMessage='CONTACTO'
                /></h2>
            <div className={style.wraaper}>
                <div className='grid content-center h-full text-center'>
                    <div className='md:hidden'>
                        <Image src={logo} width={124} height={110} alt="logo" />
                    </div>
                    <div className='hidden md:block'>
                        <Image src={logo} width={144} height={130} alt="logo" />
                    </div>
                    <div className='flex flex-col items-center self-center justify-center h-full justify-self-center'>
                        <div className='flex flex-col items-center p-8 rounded-lg shadow-lg sm:px-16'>
                            <div className='mb-2 text-lg'>info@kubics.com</div>
                            <SocialNetworks color='bg-white' text='text-primary' />
                        </div>
                    </div>
                </div>
                <div className='w-full mb-4 scale-90 text-scondary'>
                    <Newsletters color='butt-color2' />
                </div>
            </div>
        </>
    );
}

export default Footer;
