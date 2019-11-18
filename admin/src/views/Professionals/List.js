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
              <th className="text-center"><i className="icon-star"></i></th>
              <th>Barbeiro</th>
              <th>Telefone</th>
              <th className="text-center">Total de atendimentos</th>
              <th>Último cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/avatars/1.jpg'} className="img-avatar"/>
                </div>
              </td>
              <td>
                <div>Yiorgos Avraamu</div>
              </td>
              <td>
                <div>(51) 99910.8062</div>
              </td>
              <td className="text-center">
                54
              </td>
              <td>
                <div className="small text-muted">Anderson Glaeser</div>
                <strong>10/10/2018 às 17h00</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/avatars/2.jpg'} className="img-avatar"/>
                </div>
              </td>
              <td>
                <div>Avram Tarasios</div>
              </td>
              <td>
                <div>(51) 99910.8062</div>
              </td>
              <td className="text-center">
                23
              </td>
              <td>
                <div className="small text-muted">Carlos Souza</div>
                <strong>12/10/2018 às 15h30</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/avatars/3.jpg'} className="img-avatar"/>
                </div>
              </td>
              <td>
                <div>Quintin Ed</div>
              </td>
              <td>
                <div>(51) 99910.8062</div>
              </td>
              <td className="text-center">
                22
              </td>
              <td>
                <div className="small text-muted">Bruno Macedo</div>
                <strong>11/10/2018 às 16h30</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/avatars/6.jpg'} className="img-avatar"/>
                </div>
              </td>
              <td>
                <div>Pierre Nascimento</div>
              </td>
              <td>
                <div>(51) 99910.8062</div>
              </td>
              <td className="text-center">
                54
              </td>
              <td>
                <div className="small text-muted">Marcelo Eduardo</div>
                <strong>10/10/2018 às 17h00</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/avatars/5.jpg'} className="img-avatar"/>
                </div>
              </td>
              <td>
                <div>Agapetus Tadeáš</div>
              </td>
              <td>
                <div>(51) 99910.8062</div>
              </td>
              <td className="text-center">
                11
              </td>
              <td>
                <div className="small text-muted">Anderson Glaeser</div>
                <strong>14/10/2018 às 10h00</strong>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
        <h3>Implementações</h3>
        - Serviços que realiza com preço e duração.<br />
        - Turnos de trabalho em cada dia da semana.<br />
        - Criar no menu uma página para acessar a grade de horários de todos os profissionais com filtros.
        - Exclusão de profissional (ao fazer isso se tiver agendamentos, não permitir)<br />
        - Edição de dados do profissional
        - Visualização do histórico de atendimentos por período.
      </div>
    )
  }
}

export default List;
