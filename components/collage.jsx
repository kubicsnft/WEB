import Image from 'next/image'
import React from 'react'

function collage() {
  const style = {
    container: ' absolute h-auto w-52  transition ease-in-out duration-300 delay-100 border-8 shadow-2xl hover:shadow-black hover:scale-110 hover:z-10 border-slate-200 ',
    photo1: 'translate-y-28 translate-x-48  rotate-6 hidden xl:block',
    photo2: 'translate-y-40 -translate-x-48  -rotate-12 hidden xl:block',

    photo3: 'md:-translate-y-0 md:translate-x-16 -translate-y-16 sm:translate-x-14 trnaslate-x-8 -rotate-6 ',
    photo4: 'md:-translate-x-28 md:rotate-6 sm:-translate-x-8 rotate-6 translate-y-6',

    photo5: 'translate-y-36 sm:rotate-3 -rotate-6',
  }
  return (
    <>
      <div className=' justify-center w-full h-[24em] md:mt-10 mt-20  hidden sm:flex '>
        <div className={`${style.container}${style.photo1}`} >
          <Image
            src='/animals/Tiburon_04.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo2}`} >
          <Image
            src='/animals/Conejo_family.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo3}`} >
          <Image
            src='/animals/RatonBlanco_01.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo4}`} >
          <Image
            src='/animals/Cangrejo_02.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo5}`} >
          <Image
            src='/animals/Ardilla_01.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
      </div>
      <div className='flex justify-center w-full h-[22em] mt-24 sm:hidden '>
        <div className={`${style.container}${style.photo3}`} >
          <Image
            src='/animals/RatonBlanco_01.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo4}`} >
          <Image
            src='/animals/Cangrejo_02.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
        <div className={`${style.container}${style.photo5}`} >
          <Image
            src='/animals/Ardilla_01.png'
            className=''
            width={190}
            height={150}
            layout="responsive"
            alt='nft image'
          />
        </div>
      </div>
    </>
  )
}

export default collage
