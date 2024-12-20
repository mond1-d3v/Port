/**
 * @copyright 2024 Xharda Mondi
 * @license Apache-2.0
 */

<<<<<<< HEAD
import { ReactLenis } from '../lenis-scroll/lenis-main/packages/react';
=======
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Working from "./components/Working";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {

    useEffect(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger:{
                    trigger: element,
                    start:"-200 bottom",
                    end: "bottom 80%",
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                
            });
        });
    }, []);

    return (
<<<<<<< HEAD
        <ReactLenis root>
=======
        <>
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Working />
                <Contacts />
            </main>
            <Footer />
<<<<<<< HEAD
        </ReactLenis>
=======
        </>
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
    );
}

export default App;