import React, { Component } from 'react';
import {Doughnut, Line} from 'react-chartjs-2';
import {
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table
} from 'reactstrap';

const brandPrimary = '#fad551';
const brandWarning = '#383e4b';
const brandSuccess = '#4dbd74';
const brandInfo = '#67c2ef';
const brandDanger = '#f86c6b';

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 31;
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
var data6 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(80, 250));
  data2.push(random(50, 150));
  data3.push(random(60, 120));
  data4.push(random(30, 100));
  data5.push(random(20, 100));
  data6.push(random(20, 100));
}

const mainChart = {
  labels: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10', '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10', '18/10', '19/10', '20/10', '21/10', '22/10', '23/10', '24/10', '25/10', '26/10', '27/10', '28/10', '29/10', '30/10', '31/10'],
  datasets: [
    {
      label: 'Corte de cabelo',
      backgroundColor: convertHex(brandPrimary, 5),
      borderColor: brandPrimary,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'Barba',
      backgroundColor: convertHex(brandWarning, 10),
      borderColor: brandWarning,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'Corte + barba',
      backgroundColor: convertHex(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data3
    },
    {
      label: 'Progressiva',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data4
    },
    {
      label: 'Corte na máquina',
      backgroundColor: convertHex(brandDanger, 10),
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data5
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

const financialChart = {
  labels: ['Agosto', 'Setembro', 'Outubro'],
  datasets: [
    {
      label: 'Valores recebidos',
      backgroundColor: 'transparent',
      borderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    }
  ]
}

const financialChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      },
      ticks: {
        fontColor: "white"
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        fontColor: "white",
        stepSize: Math.ceil(500 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

const doughnut = {
  labels: [
    'Clientes recorrentes',
    'Clientes novos'
  ],
  datasets: [{
    data: [230, 50],
    backgroundColor: [
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <CardTitle className="mb-0">Movimento na barbearia</CardTitle>
                    <div className="small text-muted">Outubro / 2018 (Top 5 dos serviços)</div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                  <Line data={mainChart} options={mainChartOpts} height={300}/>
                </div>
              </CardBody>
              <CardFooter>
                <ul>
                  <li>
                    <div className="text-muted">Corte de cabelo</div>
                    <strong>293</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">Barba</div>
                    <strong>243</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="100"/>
                  </li>
                  <li>
                    <div className="text-muted">Corte + barba</div>
                    <strong>186</strong>
                    <Progress className="progress-xs mt-2" color="success" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">Progressiva</div>
                    <strong>54</strong>
                    <Progress className="progress-xs mt-2" color="info" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">Corte na máquina</div>
                    <strong>12</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="100"/>
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Card className="bg-info">
              <CardBody>
                <Row>
                  <Col sm="12">
                    <CardTitle className="mb-0">Financeiro / Entradas</CardTitle>
                    <div className="small text-muted"><span className="text-white">Valores recebidos pelos serviços</span></div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 224 + 'px', marginTop: 40 + 'px'}}>
                  <Line data={financialChart} options={financialChartOpts} />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col sm="6">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <CardTitle className="mb-0">Clientes</CardTitle>
                    <div className="small text-muted">Outubro / 2018</div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 254 + 'px', marginTop: 10 + 'px'}}>
                  <Doughnut data={doughnut} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><i className="icon-star"></i></th>
                  <th>Barbeiro</th>
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
          </Col>

          <Col sm="6">
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th>Cliente</th>
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
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;