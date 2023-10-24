import React from 'react';

export default function Features() {
    return (
        <section className="container">
            <div className="features" id="features">
                <div className="card-features">
                    <div className='text'>
                        <h3>Disposição</h3>
                        <p>Disposição para tudo que a vida pode lhe oferecer.</p>
                    </div>
                    <img src="/imgs/FundoCard1.png" alt="" />
                </div>
                <div className="card-features">
                    <div className='text'>
                    <h3>Saúde</h3>
                    <p>Saúde é o estado de completo bem-estar físico, mental e social e não somente a ausência de doença.</p>   
                    </div>
                    <img src="/imgs/FundoCard2.png" alt="" />
                </div>
                <div className="card-features">
                    <div className='text'>
                        <h3>Constância </h3>
                        <p>Constância é o segredo para inserir bons hábitos ao seu cotidiano.</p>
                    </div>
                    <img src="/imgs/FundoCard3.png" alt="" />
                </div>
            </div>
        </section>
    );
}