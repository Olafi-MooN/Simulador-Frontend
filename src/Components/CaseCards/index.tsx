import React from "react";
import { Link } from "react-router-dom";

export interface ICaseCardsModel {
  id: string | number;
  title: string;
  description: string;
  scenery: string;
  img: string;
}

const CaseCards: React.FC<ICaseCardsModel> = ({ description, id, scenery, title, img}) => {
  return (
    <>
      <div className="container-sm card-caso d-flex justify-content-between" key={id}>
        <div className="row gx-0 ">
          <div className="col-12 col-xl-3 d-flex justify-content-center align-items-center">
            <img src={img} alt="" className="image" />
          </div>
          <div className="col-12 col-xl-9">
            <div className="content d-flex flex-column justify-content-start align-self-center">
              <h3 className="title">
                {title}
              </h3>
              <h4 className="text-caso">
                {description}
              </h4>
              <h6 className="text-caso-1">
                {scenery}
              </h6>
            </div>
          </div>
        </div>
        <Link to={`/quiz/${id}`} className="select-caso d-flex justify-content-center align-items-center flex-column">
          <i className="bi bi-arrow-right-circle-fill icon-enter-caso"></i>
          <p className="text-enter-caso">Entrar</p>
        </Link>
      </div>
    </>
  )
}

export { CaseCards };