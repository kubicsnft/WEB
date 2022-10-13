import Image from 'next/image';
import React from 'react';

const Roadmap = () => {

    const style = {
        wraaper: 'flex flex-col items-center w-10/12  mb-8',
        row_l: 'flex flex-row justify-start md:items-center w-full ',
        row_r: 'flex md:flex-row flex-col justify-start md:items-center w-full ',
        text: 'w-9/12  text-xs text-start mb-6 shadow-md p-2 rounded-lg bg-white',
        text_m: 'flex justify-center w-10/12 mb-10 text-xs text-start  shadow-md p-2 rounded-lg bg-white text-primary',
        div6_l: 'hidden w-6/12 h-full border-l-2 flex justify-center  border-primary md:flex ',
        div6_r: 'hidden w-6/12 h-full border-r-2 flex justify-center  border-primary md:flex',
        forMobile_l: 'flex flex-col justify-start w-full   border-l-4 border-primary h-full md:hidden',
        forMobile_r: 'flex flex-col justify-start w-full   border-l-4 border-primary h-full md:hidden',
        forScreem: 'flex-row items-center justify-center hidden w-6/12 h-full border-r-2 border-primary md:flex',
        line: 'h-6  border-b-2 w-full border-primary',
        image_l: '-mr-4 md:h-24 h-16 ',
        image_r: ' -ml-4 md:h-24 h-12 -mt-1',
        phase:'  text-lg may text-primary'


    }
    return (
        <div className={style.wraaper}>
            {/* ================================================ left colums 1 ===========================================  */}
            <div className={style.row_l}>
                {/*------------- For Screem 💻 ------------*/}
                <div className={style.forScreem}>
                    <div className={style.image_l} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                    <div className={style.line}></div>

                </div>
                <div className={style.div6_l}></div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_l} >

                    <div className='flex flex-row w-2/12'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >
                            <div className='absolute -mt-4'>
                                <Image
                                    className=''
                                    src='/logos/logo_primary.png'
                                    width={66}
                                    height={63}
                                    alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={style.text_m} >
                        <div className='w-9/12'>
                            <p className='mt-3 mb-1 text-lg may '>phase 0 <span className='text-secondary'>✔</span></p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Social Networks Setup</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Website Kubics Landing Page</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitelisting</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitepaper</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ right colums 1 =========================================== */}
            <div className={style.row_r}>
                <div className={style.div6_r}>
                    <div className={style.text}>
                        <p className={style.phase}>phase 0 <span className='text-secondary'>✔</span></p>
                        <ul className=''>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Social Networks Setup</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Website Kubics Landing Page</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Whitelisting</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Whitepaper</li></div>
                        </ul>
                    </div>
                </div>
                <div className='flex-row items-center justify-center hidden w-6/12 h-full border-l-2 border-primary md:flex'>
                    <div className={style.line}></div>
                    <div className={style.image_r} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_r} >

                    <div className='flex flex-row w-full'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >

                            <Image
                                className=''
                                src='/logos/logo_primary.png'
                                width={47}
                                height={46.5}
                                alt='logo' />

                        </div>
                    </div>
                    <div className={style.text_m} >
                        <div className='w-9/12 '>
                            <p className={style.phase}>phase I <span className='text-secondary'>✔</span></p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> First Project Definition “Dragonkeeper”.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Website Kubics Main and Minting page.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Whitelisting</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Whitepaper</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ left colums 2 ===========================================  */}
            <div className={style.row_l}>
                {/*------------- For Screem 💻 ------------*/}
                <div className={style.forScreem}>
                    <div className={style.image_l} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                    <div className={style.line}></div>

                </div>
                <div className={style.div6_l}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase I <span className='text-secondary'>✔</span></p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> First Project Definition “Dragonkeeper”.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Website Kubics Main and Minting page.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Whitelisting</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Whitepaper</li></div>
                        </ul>
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_l} >

                    <div className='flex flex-row w-2/12'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >
                            <div className='absolute -mt-4'>
                                <Image
                                    className=''
                                    src='/logos/logo_primary.png'
                                    width={66}
                                    height={63}
                                    alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={style.text_m}>
                        <div className='w-9/12'>

                            <p className={style.phase}>Phase II - Q3 2022</p>
                            <ul className=''>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> Whitelist Release.</li></div>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> NFT Launch First Film project.</li></div>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> Art material, teasers release.</li></div>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> Discord activity.</li></div>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> Preparation Second Project.</li></div>
                                <div className='flex flex-row'><span className='mr-2'>▪</span><li> DAO setup.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ right colums 2 =========================================== */}
            <div className={style.row_r}>
                <div className={style.div6_r}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase II <span className='text-primary'>- Q3 2022</span></p>
                        <ul className=''>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Whitelist Release.</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> NFT Launch First Film project.</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Art material, teasers release.</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Discord activity.</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> Preparation Second Project.</li></div>
                            <div className='flex flex-row'><span className='mr-2'>▪</span><li> DAO setup.</li></div>
                        </ul>
                    </div>
                </div>
                <div className='flex-row items-center justify-center hidden w-6/12 h-full border-l-2 border-primary md:flex'>
                    <div className={style.line}></div>
                    <div className={style.image_r} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_r} >

                    <div className='flex flex-row w-full'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >

                            <Image
                                className=''
                                src='/logos/logo_primary.png'
                                width={47}
                                height={46.5}
                                alt='logo' />

                        </div>
                    </div>
                    <div className={style.text_m} >
                        <div className='w-9/12 '>
                            <p className={style.phase}>Phase III <span className='text-primary'>- Q1 2023</span></p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitelist Second Film Project.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Air drops to first project holders.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  End Q1 Second project Launch.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  First project exclusive material in Discord.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Third Project Preparation.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ left colums 3 ===========================================  */}
            <div className={style.row_l}>
                {/*------------- For Screem 💻 ------------*/}
                <div className={style.forScreem}>
                    <div className={style.image_l} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                    <div className={style.line}></div>

                </div>
                <div className={style.div6_l}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase III - Q1 2023</p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitelist Second Film Project.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Air drops to first project holders.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  End Q1 Second project Launch.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  First project exclusive material in Discord.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Third Project Preparation.</li></div>
                        </ul>
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_l} >

                    <div className='flex flex-row w-2/12'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >
                            <div className='absolute -mt-4'>
                                <Image
                                    className=''
                                    src='/logos/logo_primary.png'
                                    width={66}
                                    height={63}
                                    alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={style.text_m}>
                        <div className='w-9/12'>
                            <p className={style.phase}>Phase IV - Q2 2023</p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitelist Third Film Project.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Air drops project holders.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  End Q2 Second Third Launch.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Discord channel activity.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Ticket Rafles for “Dragonkeeper”.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ right colums 1 =========================================== */}
            <div className={style.row_r}>
                <div className={style.div6_r}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase IV - Q2 2023</p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Whitelist Third Film Project.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Air drops project holders.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  End Q2 Second Third Launch.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Discord channel activity.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Ticket Rafles for “Dragonkeeper”.</li></div>
                        </ul>
                    </div>
                </div>
                <div className='flex-row items-center justify-center hidden w-6/12 h-full border-l-2 border-primary md:flex'>
                    <div className={style.line}></div>
                    <div className={style.image_r} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_r} >

                    <div className='flex flex-row w-full'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >

                            <Image
                                className=''
                                src='/logos/logo_primary.png'
                                width={47}
                                height={46.5}
                                alt='logo' />

                        </div>
                    </div>
                    <div className={style.text_m} >
                        <div className='w-9/12 '>
                            <p className={style.phase}>Phase V - Q3 2023</p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> “Dragonkeeper” theatrical release.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> DAO follow up all projects.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Fourth Film Project Launch.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ left colums 2 ===========================================  */}
            <div className={style.row_l}>
                {/*------------- For Screem 💻 ------------*/}
                <div className={style.forScreem}>
                    <div className={style.image_l} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                    <div className={style.line}></div>

                </div>
                <div className={style.div6_l}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase V - Q3 2023</p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> “Dragonkeeper” theatrical release.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> DAO follow up all projects.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li>  Fourth Film Project Launch.</li></div>
                        </ul>
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_l} >

                    <div className='flex flex-row w-2/12'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >
                            <div className='absolute -mt-4'>
                                <Image
                                    className=''
                                    src='/logos/logo_primary.png'
                                    width={66}
                                    height={63}
                                    alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={style.text_m}>
                        <div className='w-9/12'>
                            <p className={style.phase}>Phase VI - Q3 2022</p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Fifth Film Project Launch.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> All associate activities.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ right colums 1 =========================================== */}
            <div className={style.row_r}>
                <div className={style.div6_r}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase VI - Q3 2022</p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Fifth Film Project Launch.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> All associate activities.</li></div>
                        </ul>
                    </div>
                </div>
                <div className='flex-row items-center justify-center hidden w-6/12 h-full border-l-2 border-primary md:flex'>
                    <div className={style.line}></div>
                    <div className={style.image_r} >
                        <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={128}
                            height={117}
                            alt='logo' />
                    </div>
                </div>
                {/*------------- For Mobile 📱 ------------*/}
                <div className={style.forMobile_r} >

                    <div className='flex flex-row w-full'>
                        <div className={style.line}></div>
                        <div className={style.image_r} >

                            <Image
                                className=''
                                src='/logos/logo_primary.png'
                                width={47}
                                height={46.5}
                                alt='logo' />

                        </div>
                    </div>
                    <div className={style.text_m} >
                        <div className='w-9/12 '>
                            <p className={style.phase}>Phase VII - Q4 2023</p>
                            <ul className=''>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Sixth Film Project Launch.</li></div>
                                <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> All associate activities.</li></div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ================================================ left colums 2 ===========================================  */}
            <div className={style.row_l}>
                {/*------------- For Screem 💻 ------------*/}
                <div className={style.forScreem}>
                </div>
                <div className={style.div6_l}>
                    <div className={style.text}>
                        <p className={style.phase}>Phase VII - Q4 2023</p>
                        <ul className=''>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> Sixth Film Project Launch.</li></div>
                            <div className='flex flex-row mb-1'><span className='mr-2'>▪</span><li> All associate activities.</li></div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ------------------------------------- */}
        </div>







    );
}

export default Roadmap;
