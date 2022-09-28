import styles from '../../styles/AppLayout.module.css'
import React from 'react'
import Head from 'next/head'
import Header from '../containers/header'
import Footer from '../containers/footer'

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function AppLayout({ children }) {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    const style = {
        main: 'px-4 sm:px-8 md:px-12 pb-12 '
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>KUBICS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={`${styles.main}${style.main}`}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "radial-gradient(circle, rgba(220,220,220,1) 0%, rgba(169,169,170,0.8550770650056898) 100%)",
                            },
                        },
                        fpsLimit: 20,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 0,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 1,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#7B94b1",
                            },
                            links: {
                                color: "#7B94b1",
                                distance: 260,
                                enable: true,
                                opacity: 1,
                                width: 1,
                            },
                            collisions: {
                                enable: false,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "square",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                {children}
            </main>
            <footer id='contacto' className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}
