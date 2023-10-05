import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Features from './components/features';

export default function Site() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Features />
                <h1>Hello world</h1>
            </main>
        </>
    );
}