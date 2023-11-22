import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Features from './components/features';
import TrocaInfos from './components/trocaInfos';
import AboutUs from './components/aboutUs';
import { InstagramLogo, Envelope } from '@phosphor-icons/react/dist/ssr';

export default function Site() {

    return (
        <>
            <Header />
            <main>
                <Banner />
                <Features />
                <TrocaInfos />
                <AboutUs />
            </main>
            <footer>
                <a href="#">Back to top</a>
                <div className="footer-text">
                    <p class="mb-1">NutriView.</p>
                    <p><Envelope size={20} />NutriView@gmail.com</p>
                    <p><InstagramLogo size={20} /> @NutriView</p>
                </div>
            </footer>
        </>
    );
}