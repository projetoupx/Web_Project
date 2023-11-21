import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Features from './components/features';
import TrocaInfos from './components/trocaInfos';
import AboutUs from './components/aboutUs';

export default function Site() {

    return (
        <>
            <Header />
            <main>
                <Banner />
                <Features />
                <TrocaInfos />
                <AboutUs/>
                <h1>Hello world</h1>
            </main>
        </>
    );
}