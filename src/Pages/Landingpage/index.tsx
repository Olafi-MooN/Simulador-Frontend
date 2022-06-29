import React from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    }
    return <>

        {/* navbar */}
        <nav className="navbar bg-light" id='getstarting-navbar'>
            <div className="container-fluid">
                <a className="navbar-brand"><img src="img/logo.png" className='img-fluid' alt="" /></a>
                <button id="show-login" type="button" className="btn btn-primay btn-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Entrar</button>
            </div>
        </nav>
        {/* end navbar */}

        {/* header */}
        <div className='landing-header-principal'>
            <div className="row gx-0" id='landig-header'>
                <div className="col-12 container-xxl col-md-5 d-flex justify-content-center align-items-center">
                    <div className="">
                        <h1 className='title'>O simulador de casos clínicos
                            perfeito para você
                        </h1>
                        <h3 className='text'>
                            O MedSim tem como foco auxiliar no aprendizado de futuros medicos(as) e enfermeiros(as) através da simulação de casos clínicos onde o aluno poderá ter a experiência de tomada de decisão como se estivesse atendendo um paciente real.
                        </h3>
                        <div className="btns-header">
                            <button className="btn btn-primary btn-2">Vamos lá</button>
                            <button className="btn btn-primary btn-4">Saiba mais</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 d-flex justify-content-center">
                    <img src="img/maingetstarting.png" alt="" className='img-fluid lp-main-img' />
                </div>
            </div>
        </div>

        {/* end header */}



        {/* img and texts*/}

        <div className="row gx-0 container-xxl body-lp" id=''>
            <div className="col-12 col-md-7 d-flex justify-content-center">
                <img src="img/getstarting3.png" alt="" className='img-fluid lp-img-1' />
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                <div className="">
                    <h1 className='title'>Tenha o controle total
                    </h1>
                    <h3 className='text'>
                        Nosso simulador conta com uma árvore de decisões completa onde você poderá executar diversas ações como o pedido de exames, monitoramentos e administração de medicamentos.
                    </h3>
                </div>
            </div>
        </div>

        <div className="row gx-0 container-xxl body-lp" id=''>
            <div className="col-12 col-md-5 order-2 order-md-1 d-flex justify-content-center align-items-center">
                <div className="">
                    <h1 className='title'>Simples e completo
                    </h1>
                    <h3 className='text'>
                        Com um design simplificado, o MedSim e muito fácil de utilizar, todas as opções no gerenciamento do caso são intuitivas e diretas. Buscamos deixar nossa interface limpa e visualmente agradável, trazendo assim uma excelente experiência de usuário.
                    </h3>
                </div>
            </div>
            <div className="col-12 col-md-7 order-1 order-md-2 d-flex justify-content-center">
                <img src="img/getstarting1.png" alt="" className='img-fluid lp-img-1' />
            </div>
        </div>

        <div className="row gx-0 container-xxl body-lp" id=''>
            <div className="col-12 col-md-7 d-flex justify-content-center">
                <img src="img/getstarting2.png" alt="" className='img-fluid lp-img-1' />
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                <div className="">
                    <h1 className='title'>Nosso trabalho não para
                        por aqui...
                    </h1>
                    <h3 className='text'>
                        Estamos sempre trabalhando para tornar o MedSim o mais completo possível, novos casos serão adicionados em breve, além de um complemento sistema de pontuação e uma área dedicada as estatísticas de usuário, fique ligado nas notas de atualização para ficar por dentro das novidades.
                    </h3>
                </div>
            </div>
        </div>

        {/* end img and texts */}


        {/* create account call */}
        <div className="paragraph-create-account d-flex align-items-center flex-column">
            <p className="text">Esta esperando o que? Crie sua conta agora mesmo!</p>
            <button type="button" className="btn btn-primary btn-1">Criar Conta</button>
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
                            <a href="https://joaoguimaraes.com" target="_blank" className="list-group-item">João V. Guimarães - TI (Front-end, UX/UI)</a>
                            <a href="" className="list-group-item">Ana Elisa - Medicina (Integrante Discente)</a>
                        </ul>
                        <ul className="list-group our-team">
                            <a href="" className="list-group-item">Ester Olivia - Medicina (Integrante Discente)</a>
                            <a href="" className="list-group-item">Lucas Eduardo - Medicina (Integrante Discente)</a>
                            <a href="" className="list-group-item">Yuri Corrêa - Medicina (Integrante Discente)</a>
                        </ul>
                    </div>
                </div>
                <h4 className="copyright">©MedSim 2022 Todos os direitos reservados.</h4>
            </div>
            {/* end links and copyright */}

        </footer>
        {/* end footer */}




        {/* create account form */}
        {/* <div className="col-12 d-flex flex-column align-items-center">
            <div className="create-account">
                <a href="#" className="bi bi-x d-flex flex-row-reverse" data-bs-dismiss="modal"></a>
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
        </div> */}
        {/* end create account form*/}

    </>
}

export { LandingPage };