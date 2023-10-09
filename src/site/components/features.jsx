import React from 'react';

export default function Features() {
    return (
        <section className="container">
            <div className="features" id="features">
                <div className="card-features">
                    <div className='text'>
                        <h3>saude</h3>
                        <p>foco de nosso projeto, é a saude sempre em primeiro lugar</p>
                    </div>
                    <img src="/imgs/FundoCard1.png" alt="" />
                </div>
                <div className="card-features">
                    <div className='text'>
                        <h3>bem estar</h3>
                        <p>o bem estar de saber que sua alimentação é a melhor</p>
                    </div>
                    <img src="/imgs/FundoCard2.png" alt="" />
                </div>
                <div className="card-features">
                    <div className='text'>
                        <h3>disposição</h3>
                        <p>disposição para tudo que a vida pode lhe oferecer</p>
                    </div>
                    <img src="/imgs/FundoCard3.png" alt="" />
                </div>
            </div>
        </section>
    );
}