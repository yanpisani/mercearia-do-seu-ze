import React from 'react';
import './style.scss';
import eye from '../../assets/images/eye.png';
import trash from '../../assets/images/trash.png';

export default function TableComponent(props) {
  function RenderTable() {
    return (
      <div className="all-table">
        <table>
          <thead>
            <tr>
              {props.data.header.map((item) => {
                return <th>{item}</th>;
              })}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((row) => {
              return (
                <tr>
                  {row.map((item) => {
                    return <td>{item}</td>;
                  })}
                  <td className="icons">
                    <img
                      onClick={() => {
                        props.editFunction(row[0]);
                      }}
                      src={eye}
                    />
                    <img
                      onClick={() => {
                        props.deleteFunction(row[0]);
                      }}
                      src={trash}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>{RenderTable()}</div>;
}
