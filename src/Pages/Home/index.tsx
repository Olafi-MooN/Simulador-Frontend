import React from 'react';
import { CaseCards, ICaseCardsModel } from '../../Components/CaseCards';

const Home = () => {
  const casosList: ICaseCardsModel[] = [
    { id: 1, description: 'Homem de 45 anos, agricultor, vem à UBS desacompanhado, queixando-se de dor nas costas.', title: 'Doutor(a), estou com muita dor nas costas', scenery: 'Cenário: Unidade básica de saúde.' ,img: 'img/heart.png'},
    { id: 1, description: 'Mulher de 32 anos, dona de casa, vem à UBS acompanhada, queixando-se de febre.', title: 'Doutor(a), estou com muita febre e dor de cabeça', scenery: 'Cenário: Unidade básica de saúde.' ,img: 'img/temperature2.png'},
    { id: 1, description: 'Criança de 12 anos, estudante, vem à UBS acompanhada, com fortes dores na barriga.', title: 'Doutor(a), minha barriga doi muito', scenery: 'Cenário: Unidade básica de saúde.' ,img: 'img/report.png'},
    { id: 1, description: 'Homem de 70 anos, aposentado, vem à UBS desacompanhado, queixando-se de dor nos rins', title: 'Doutor(a), meus rins estão me matando', scenery: 'Cenário: Unidade básica de saúde.' ,img: 'img/symptoms.png'}
  ];

  return <>
    {/* title */}
    <h1 className="home-title">Dashboard</h1>
    {/* end title */}

    {/* main row (cards and statistics) */}
    <div className="row gx-0">

      {/* cards column*/}
      <div className="col-12 col-xl-7 cases-card-col">
        {casosList.map(item => <CaseCards img={item.img}  description={item.description} id={item.id} scenery={item.scenery} title={item.title} key={item.id} />)}
      </div>

      {/* space between coluns */}
      <div className="col-12 col-xl-1"></div>
      {/* end space between coluns */}

      {/* statistics */}
      <div className="col-12 col-xl-4 d-flex justify-content-center">
        <div className="teste align-self-start">
          <h5 className="estatisticas-title">Estatisticas</h5>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-check2-circle icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos concluidos: <span>1</span></h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-award icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Bem sucedidos: <span>0</span></h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-exclamation-diamond icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Falhas: <span>1</span></h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-exclamation-triangle icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com mais falhas: <span>1</span></h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-clock icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com maior duração: <span>1</span></h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-clock-history icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com menor duração: <span>1</span></h6>
          </div>
        </div>
      </div>
      {/* end statistics */}
    </div>
    {/* end main row (cards and statistics) */}
    <br></br>
    <br></br>
    <br></br>
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
        <div className="col-12 col-xl-3">
          <h3 className="col-title">Paginas</h3>
          <ul className="list-group">
            <a href="" className="list-group-item">Home</a>
            <a href="" className="list-group-item">Estatisticas</a>
            <a href="" className="list-group-item">Sobre</a>
          </ul>
        </div>
        <div className="col-12 col-xl-3">
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

export { Home };