import React from 'react';
import Header from '../../site/components/header';

export default function Login() {
    return (
        <div>
            <Header />
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form>
                            <div className='form-text'>
                                <h1>Nutriview</h1>
                                <h3>Please sign in</h3>
                            </div>
                            <div className='form-item'>
                                <input type="email" className='form-email' id='form-email' placeholder='name@example.com'/>
                                <label htmlFor="form-email">Email address</label>
                            </div>
                            <div className='form-item'>
                                <input type="password" className='form-password' id='form-password' placeholder='Password'/>
                                <label htmlFor="form-password">Password</label>
                            </div>
                            <button className='form-button'>Sing in</button>
                            <p>&copy; Desenvolvido por Nutriview</p>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}