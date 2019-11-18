import React, { Component } from 'react';
import {
  Table
} from 'reactstrap';

class List extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th>Cliente</th>
                  <th>Telefone</th>
                  <th>Data de nascimento</th>
                  <th className="text-center"><i className="icon-star"></i></th>
                  <th>Barbeiro</th>
                  <th>Último atendimento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  <td>
                    <div>(51) 99910.8062</div>
                  </td>
                  <td>
                    <div>andersonbglaeser@gmail.com</div>
                  </td>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/1.jpg'} className="img-avatar"/>
                    </div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  <td>
                    <strong>10/10/2018 às 17h00</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Avram Tarasios</div>
                  </td>
                  <td>
                    <div>(51) 99910.8062</div>
                  </td>
                  <td>
                    <div>andersonbglaeser@gmail.com</div>
                  </td>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/2.jpg'} className="img-avatar"/>
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                  </td>
                  <td>
                    <strong>12/10/2018 às 15h30</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Quintin Ed</div>
                  </td>
                  <td>
                    <div>(51) 99910.8062</div>
                  </td>
                  <td>
                    <div>andersonbglaeser@gmail.com</div>
                  </td>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/3.jpg'} className="img-avatar"/>
                    </div>
                  </td>
                  <td>
                    <div>Quintin Ed</div>
                  </td>
                  <td>
                    <strong>11/10/2018 às 16h30</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Alan Roberto</div>
                  </td>
                  <td>
                    <div>(51) 99910.8062</div>
                  </td>
                  <td>
                    <div>andersonbglaeser@gmail.com</div>
                  </td>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/6.jpg'} className="img-avatar"/>
                    </div>
                  </td>
                  <td>
                    <div>Pierre Nascimento</div>
                  </td>
                  <td>
                    <strong>10/10/2018 às 17h00</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Agapetus Tadeáš</div>
                  </td>
                  <td>
                    <div>(51) 99910.8062</div>
                  </td>
                  <td>
                    <div>andersonbglaeser@gmail.com</div>
                  </td>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/5.jpg'} className="img-avatar"/>
                    </div>
                  </td>
                  <td>
                    <div>Agapetus Tadeáš</div>
                  </td>
                  <td>
                    <strong>14/10/2018 às 10h00</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <br />
            <h3>Implementações</h3>
            - Dados cadastrais (mínimo possível)<br />
            - Visualização do histórico de atendimentos e com qual barbeiro por período.<br />
            - Automatizar processo de lembrete de retorno a barbearia (enviar sms).
      </div>
    )
  }
}

export default List;
