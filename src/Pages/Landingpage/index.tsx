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
            <img src="/img/logo.png" className='img-fluid logo' width={150}></img>
            <button id="show-login" type="button" className="btn btn-light btn-login m-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Entrar</button>
        </header>
        {/* end navbar */}

        {/* header */}
        <div className="header d-flex justify-content-around">
            <div className="header-text align-self-center" data-aos="fade-up" id="center-content position-header">
                <h1 className="header-title font-white">MedSim - Casos Clínicos</h1>
                <h3 className="font-white">
                    Como um simulador de Casos Clínicos, a ferramenta apresenta uma nova maneira de entedermos o paciente.
                </h3>
            </div>
            <img src="img/10130.png" className="header-img" alt="" data-aos="zoom-in-left" />
        </div>
        {/* end header */}

        {/* create account form and description*/}
        <div className="row-create-account row d-flex justify-content-between gx-0" id="center-content">
            {/* create account form */}
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center" data-aos="fade-right" data-aos-easing="ease-in-sine">
                <div className="create-account">
                    <h2 className="title">MedSim</h2>
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
                <h2 className="title">Simples e Prático</h2>
                <p className="text center-text">Revoluciona o aprendizado com conteúdos práticos e dinâmicos, auxiliando ainda mais os alunos no processo de entendimento de um caso.
                    <br /><br />
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
                        <h2 className="title center-text">Preenchimento Dinâmico</h2>
                        <p className="text center-text">Possibilitando ao corpo docente realizar um cadastro de casos clínicos de forma prática e dinâmica, facilitando sua análise e correção.
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
                        <h2 className="title">Feito por Alunos para Alunos</h2>
                        <p className="text center-text">Desenvolvido com a união de estudantes de Medicina e Tecnologia, focado na praticidade e usabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-container" id='text-three'>
            <div className="row">
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className="container">
                        <h2 className="title">Auxiliando o aprendizado</h2>
                        <p className="text center-text">Através de uma gama de exames e condutas que possibilitarão a identificação e cura dos pacientes.
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
                            <p className="title-box-login">MedSim</p>
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
        {/* footer */}
        <footer className="footer">
            {/* title and social icons */}
            <div className="header-footer d-flex justify-content-between">
                <h2 className="title font-white">MedSim</h2>
                <div className="social-icons">
                    <div className="social-icons">
                        <a href="#" className="bi bi-instagram social-icon"></a>
                        <a href="#" className="bi bi-linkedin social-icon"></a>
                        <a href="#" className="bi bi-github social-icon"></a>
                        <a href="#" className="bi bi-envelope-fill social-icon"></a>
                    </div>
                </div>
            </div>
            {/* end title and social icons */}

            {/* links and copyright */}
            <div className="row gx-0">
                <div className="col-12 col-xl-6">
                    <h3 className="col-title">Recursos</h3>
                    <ul className="list-group">
                        <a href="" className="list-group-item">Protótipo</a>
                        <a href="" className="list-group-item">Artigo</a>
                        <a href="" className="list-group-item">Código Fonte</a>
                    </ul>
                </div>
                <div className="col-12 col-xl-6">
                    <h3 className="col-title">Nosso Time</h3>
                    <div className="container-our-team d-flex justify-content-between">
                        <ul className="list-group our-team">
                            <a href="" className="list-group-item">Flavio - (Orientador)</a>
                            <a href="" className="list-group-item">Alan - TI (Back-end)</a>
                            <a href="" className="list-group-item">Alef Santos - TI (Full-stack)</a>
                            <a href="" className="list-group-item">João V. Guimarães - TI (Front-end, UX/UI)</a>
                            <a href="" className="list-group-item">Ana Elisa - Medicina (Integrante Discente)</a>
                        </ul>
                        <ul className="list-group our-team">
                            <a href="" className="list-group-item">Ester Olivia - Medicina (Integrante Discente)</a>
                            <a href="" className="list-group-item">Lucas Eduardo - Medicina (Integrante Discente)</a>
                            <a href="" className="list-group-item">Yuri Corrêa - Medicina (Integrante Discente)</a>
                            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
                            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
                        </ul>
                    </div>
                </div>
                <h4 className="copyright">©MedSim 2022 Todos os direitos reservados.</h4>
            </div>
            {/* end links and copyright */}

        </footer>
        {/* end footer */}

    </>
}

export { LandingPage };