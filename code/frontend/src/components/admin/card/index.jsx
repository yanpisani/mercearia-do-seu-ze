import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className={`card-home`}>
      <div className={`row`}>
        <div
          className={`col d-flex justify-content-center align-items-center card-title`}
        >
          <b>{props.section}</b>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col d-flex justify-content-center align-items-center`}>
          <i className={`${props.icon} icon`} />
        </div>
      </div>
      <div>
        <Link
          className={`col d-flex justify-content-center align-items-center card-button`}
          to={props.to}
        >
          Editar
        </Link>
      </div>
    </div>
  );
}
