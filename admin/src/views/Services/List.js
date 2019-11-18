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
                  <th>Serviço</th>
                  <th>Duração padrão</th>
                  <th>Preço padrão</th>
                  <th className="text-center">Atendimentos mês atual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>Corte de cabelo</div>
                  </td>
                  <td>
                    <div>00:40</div>
                  </td>
                  <td>
                    <div>R$40.00</div>
                  </td>
                  <td className="text-center">
                    <strong>20</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Barba</div>
                  </td>
                  <td>
                    <div>00:40</div>
                  </td>
                  <td>
                    <div>R$35.00</div>
                  </td>
                  <td className="text-center">
                    <strong>14</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Corte + Barba</div>
                  </td>
                  <td>
                    <div>01:00</div>
                  </td>
                  <td>
                    <div>R$60.00</div>
                  </td>
                  <td className="text-center">
                    <strong>29</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Progressiva</div>
                  </td>
                  <td>
                    <div>00:40</div>
                  </td>
                  <td>
                    <div>R$80.00</div>
                  </td>
                  <td className="text-center">
                    <strong>2</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Corte máquina</div>
                  </td>
                  <td>
                    <div>00:20</div>
                  </td>
                  <td>
                    <div>R$20.00</div>
                  </td>
                  <td className="text-center">
                    <strong>18</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <br />
            <h3>Implementações</h3>
            - Cadastro dos serviços com preço e duração padrão, no entanto na agenda do barbeiro, pode-se definir o preço e duração especifica para cada um.<br />
            - Edição e exclusão dos serviços.
            - Visualização do histórico de atendimentos por período.
      </div>
    )
  }
}

export default List;
