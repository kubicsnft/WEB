import React, { useState } from 'react'
import Link from 'next/link'
import SocialNetworks from './SocialNetworks'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import ToggleSwitch from './toggleSwitch'



function MobileNav({ open, setOpen }) {
    return (
        <div className={`xl:hidden absolute  backdrop-blur-3xl  top-0 left-0 h-auto pb-4 w-full sm:w-80  z-50 border-b   shadow-lg transform ${open ? "-translate-y-0 mt-4" : "-translate-y-full "} transition-transform duration-150 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-row justify-end h-16 bg-white sm:justify-center sm: ">
                <div className='flex justify-end w-3/12 h-full text-xs scale-90 sm:hidden items-cemter text-primary'><ToggleSwitch /></div>
            </div>
            <div className="flex flex-col items-center justify-center px-4 ">
                <div className='flex flex-row items-center justify-center w-6/12 h-full sm:w-auto'>
                    {/* <Image src='/logos/logo_primary.png' alt='logo' width={57} height={50}/> */}
                    <Image src='/logos/logo_letras.png' alt='logo' width={200} height={79} />
                </div>
                {/* Pages Links  */}
                <div className='text-center '>
                    <Link href="#inicio" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='menu.start'
                                defaultMessage='Inicio'
                            />
                        </div>
                    </Link>
                    <Link href="#kubics?">
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='menu.k?'
                                defaultMessage='¿Que es kubics?'
                            />
                        </div>
                    </Link>
                    <Link href="#proyectos" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='menu.proyect'
                                defaultMessage='Proyectos'
                            />
                        </div>
                    </Link>
                    <Link href="#nosotros" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='menu.team'
                                defaultMessage='Equipo'
                            />
                        </div>
                    </Link>
                    <Link href="#roadmap" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            Roadmap
                        </div>
                    </Link>
                    <Link href="#contacto" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='menu.contact'
                                defaultMessage='Contacto'
                            />
                        </div>
                    </Link>
                    {/* <Link href="#whitepaper" >
                        <div
                            className=' bg-primary cursor-pointer rounded p-1  w-52 mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
                            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            <FormattedMessage
                                id='home.title2'
                                defaultMessage='PROYECTOS'
                            />Nuevo</div>
                    </Link> */}
                </div>
            </div>
            <div className='flex justify-center mt-8 '>
                <div className='w-44'><SocialNetworks /></div>
            </div>
        </div>
    )
}


const MenuMovil = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`sm:w-auto w-full  px-[1.2rem] h-[70px] lg:h-auto pt-[0.9rem] flex justify-start left-0  fixed -top-4 z-40 ${open ? "bg-white" : "backdrop-blur-3xl sm:backdrop-blur-none"} `} >
            <MobileNav open={open} setOpen={setOpen} />
            <div className='z-50 flex items-start h-full mt-4 mr-4'>
                <div className="z-50 flex flex-col items-center justify-between w-8 h-8 cursor-pointer sm:backdrop-blur-3xl xl:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
        </div>
    );
}

export default MenuMovil;
