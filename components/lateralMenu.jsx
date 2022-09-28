import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router}-dom';

const LateralMenu = () => {
    const style = {
        item: 'w-full bg-primary   rounded px-1  mb-1 border border-white  text-white hover:text-[#E1B649] ease-in-out hover:translate-x-3 duration-300'
    }


    return (
        <div className='w-[8.5rem]'>
            <a href="#inicio">
                <div className={style.item} >
                    <FormattedMessage
                        id='menu.start'
                        defaultMessage='Inicio'
                    />
                </div>
            </a>
            <a href="#kubics?">
                <div className={style.item}>
                    <FormattedMessage
                        id='menu.k?'
                        defaultMessage='¿Que es kubics?'
                    />
                </div>
            </a>
            <a href="#proyectos">
                <div className={style.item}>
                    <FormattedMessage
                        id='menu.proyect'
                        defaultMessage='Proyectos'
                    />
                </div>
            </a>
            <a href="#nosotros">
                <div className={style.item}>
                    <FormattedMessage
                        id='menu.team'
                        defaultMessage='Equipo'
                    />
                </div>
            </a>
            <a href="#roadmap">
                <div className={style.item}>Roadmap</div>
            </a>
            <a href="#contacto">
                <div className={style.item}>
                    <FormattedMessage
                        id='menu.contact'
                        defaultMessage='Contacto'
                    />
                </div>
            </a>
        </div>
    );
}

export default LateralMenu;
