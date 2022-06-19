import React from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    }
    return <>

        {/* navbar */}
        <header className="landingpage-nav d-flex justify-content-between align-items-center">
            <h2 className="logo font-white">Simulador - IC</h2>
            <button id="show-login" type="button" className="btn btn-light btn-login m-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Entrar</button>
        </header>
        {/* end navbar */}

        {/* header */}
        <div className="header d-flex justify-content-between">
            <div className="header-text" data-aos="fade-up">
                <h1 className="header-title font-white">Simulador - IC</h1>
                <h3 className="font-white">
                    Proin volutpat, ex eu euismod pharetra, quam risus consequat libero, sit amet bibendum ipsum velit
                    vitae
                    ipsum.
                    <br />
                    <br />
                    Pellentesque tempor pulvinar volutpat. Nulla consectetur vulputate mollis. Proin blandit pharetra
                    augue,
                    sit amet porttitor massa pretium at.
                    <br />
                    <br />
                    Nam ullamcorper magna gravida metus tristique commodo id sit amet ex. Morbi volutpat, justo eget
                    auctor
                    pellentesque, enim erat tincidunt enim, vel consectetur nibh ipsum id mi.
                </h3>
            </div>
            <img src="img/10130.png" className="header-img" alt="" data-aos="zoom-in-left" />
        </div>
        {/* end header */}

        {/* create account form and description*/}
        <div className="row-create-account row d-flex justify-content-between gx-0">
            {/* create account form */}
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center" data-aos="fade-right" data-aos-easing="ease-in-sine">
                <div className="create-account">
                    <h2 className="title">Simulador - IC</h2>
                    <h3 className="subtitle">Crie uma conta usando seu e-mail:</h3>
                    <form className="create-account-form d-flex flex-column align-items-center">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nome de usuario</label>
                            <input type="text" className="form-control" id="username" />
                            <div id="usernamehelp" className="form-text">Nome de usuario não pode conter ESPAÇO.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" />
                            <div id="passwordhelp" className="form-text">Minimo 8 caracteres.</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Aceito os termos de uso</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-create">Criar conta</button>
                        <a className="have-account" href="#">Já possuo uma conta!</a>
                    </form>
                </div>
            </div>
            {/* end create account form*/}


            {/* create account description */}
            <div className="create-account-text col-12 col-lg-6 align-self-center" data-aos="fade-left" data-aos-easing="ease-in-sine">
                <h2 className="title">Lorem ipsum dolor</h2>
                <p className="text">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                    consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                    tincidunt augue. In molestie velit vel lorem convallis
                    tempus.
                    <br /><br />
                    Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                    consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                    tincidunt augue. In molestie velit vel lorem convallis
                    tempus.
                </p>
            </div>
            {/* end create account description*/}
        </div>
        {/* end create account form adn description*/}

        {/* body text one column */}
        <div className="text-container" id='text-one'>
            <div className="row">
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className="container">
                        <h2 className="title">Lorem ipsum dolor</h2>
                        <p className="text">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                            consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                            tincidunt augue. In molestie velit vel lorem convallis
                            tempus.
                            <br /><br />
                            Aliquam fermentum malesuada risus, aliquam aliquam libero tempor ac. Donec est arcu, consequat eu
                            magna sit amet, cursus consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Praesent elit ante, consequat suscipit posuere at, rhoncus nec
                            odio.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-5 img-col">
                    <img className='img-fluid' src="img/medicine1.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="text-container" id='text-two'>
            <div className="row">
                <div className="col-12 col-md-5 img-col">
                    <img className='img-fluid' src="img/medicine2.svg" alt="" />
                </div>
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className="container">
                        <h2 className="title">Lorem ipsum dolor</h2>
                        <p className="text">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                            consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                            tincidunt augue. In molestie velit vel lorem convallis
                            tempus.
                            <br /><br />
                            Aliquam fermentum malesuada risus, aliquam aliquam libero tempor ac. Donec est arcu, consequat eu
                            magna sit amet, cursus consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Praesent elit ante, consequat suscipit posuere at, rhoncus nec
                            odio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-container" id='text-three'>
            <div className="row">
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className="container">
                        <h2 className="title">Lorem ipsum dolor</h2>
                        <p className="text">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                            consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                            tincidunt augue. In molestie velit vel lorem convallis
                            tempus.
                            <br /><br />
                            Aliquam fermentum malesuada risus, aliquam aliquam libero tempor ac. Donec est arcu, consequat eu
                            magna sit amet, cursus consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Praesent elit ante, consequat suscipit posuere at, rhoncus nec
                            odio.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-5 img-col">
                    <img className='img-fluid' src="img/medicine4.svg" alt="" />
                </div>
            </div>
        </div>
        {/* end body text one column */}


        {/* create account call */}
        <div className="paragraph-create-account d-flex align-items-center flex-column">
            <p className="text">Esta esperando o que? Crie sua conta agora mesmo!</p>
            <button type="button" className="btn btn-primary btn-paragraph-ca">Criar Conta</button>
        </div>
        {/* end create account call */}

        {/*login popup*/}
        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="container-popup active" data-aos="zoom-in">
                        <div className="box-login active">
                            <a href="#" className="bi bi-x" data-bs-dismiss="modal"></a>
                            <p className="title-box-login">Simulador - IC</p>
                            <p className="subtitle-box-login">Faça Login usando seu e-mail:</p>
                            <form className="form-login d-flex flex-column align-items-center">
                                <div className="mb-3 d-flex flex-column">
                                    <label htmlFor="email" className="form-label align-self-start">E-mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3 d-flex flex-column">
                                    <label htmlFor="password" className="form-label align-self-start">Senha</label>
                                    <input type="password" className="form-control" id="password" />
                                    <a id="" className="link-ca-small" href="#">Esqueci minha senha.</a>
                                </div>
                                <button className="btn btn-primary btn-login" data-bs-dismiss="modal" onClick={handleLogin}>Login</button>
                                <Link className="link-ca" to="/home">Ainda não possuo uma conta</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*end login popup*/}
    </>
}

export { LandingPage };