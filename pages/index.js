import React from "react";
import dynamic from 'next/dynamic'
import AppLayoutHead from '../components/layout/AppLayoutHead'
import LateralMenu from '../components/lateralMenu'
import SocialNetworks from '../components/SocialNetworks'
import Nosotros from '../components/home/nosotros'
import WhayIsKubics from '../components/home/whayIsKubics'
import MenuMovil from "../components/MenuMovil";
import { FormattedMessage } from "react-intl";
import TestRoadmap from "../components/test_Roadmap";
import CookieConsent from "react-cookie-consent";




//   Importación dinamica de carrusel3d.
const CarruselPro = dynamic(() => import('../components/carrusel3d/carruselPro'), { ssr: false })
const Carrusel1 = dynamic(() => import('../components/carrusel3d/carousel'), { ssr: false })

const style = {
  section: 'w-full  sm:px-4 md:px-6 xl:px-10  border-b flex flex-col items-center  text-center bord bg-[#ffffffe8]  pb-8 min-h-[45em]     max-w-screen-2xl    z-10',
  titulo: 'text-shadow mt-4 mb-6 text-2xl sm:text-3xl pt-14 sm-p-3 text-primary may',
  // separador: 'h-2  w-full bg-primary border-primary ',
}

export default function Home() {
  return (
    <>

      <AppLayoutHead>
        
        
        {/*========================= Menú lateral y redes sociales ========================= */}
        <MenuMovil />
        <div className='hidden xl:flex   relative  justify-between w-full max-w-[100em] bg-[#ffffffe1] pr-24 z-50'>
          <div>
            <div className='fixed -ml-8 bottom-10'><LateralMenu /></div>
          </div>
          <div>
            <div className='fixed w-32 -mr-2 bottom-10'><SocialNetworks /></div>
          </div>

        </div>

        {/*========================= Contenedor ========================= */}
        <div className='flex justify-center '>
          <div className='flex flex-col items-center w-full bg-white md:w-11/12 xl:w-10/12 shadow-gray-500'>
            {/*================= Sectión1: =================*/}
            <div className={style.section}>
              <h2 id='kubics?' className={style.titulo}>
                <FormattedMessage
                  id='home.title1'
                  defaultMessage='¿ QUÉ ES KUBICS ?'
                />
              </h2>
              <WhayIsKubics />
            </div>
            {/*================= Section 2: =================*/}
            <div className={style.section}>
              {/* <Proyectos /> */}

              <div>
                <h2 id='proyectos' className={style.titulo}>
                  <FormattedMessage
                    id='home.title2'
                    defaultMessage='PROYECTOS'
                  />
                </h2>
              </div>
              <div className='items-center justify-center hidden w-full h-full p-2 sm:flex'>
                <CarruselPro />
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 sm:hidden ">
                <Carrusel1 />
              </div>
            </div>
            {/*================= Section 3: ================= */}
            <div className={style.section}>

              <h2 id='nosotros' className={style.titulo}>
                <FormattedMessage
                  id='home.title3'
                  defaultMessage='EL EQUIPO'
                />
              </h2>
              <Nosotros />
            </div>
            {/*================= Section 4: ===================*/}
            <div className={style.section}>

              <h2 id='roadmap' className={style.titulo}>ROADMAP</h2>
              {/* <Roadmap /> */}
              <TestRoadmap />
            </div>
          </div>
        </div>
      </AppLayoutHead>
      {/* ----------------- Cokiees ----------------- */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Reject"
        enableDeclineButton
        onDecline={() => {
          alert("Not accepted!")
        }}
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B", height:'100px', display:'flex', alignItems:'center' }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ color: "#4e503b", background: "#918f8e",fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}
