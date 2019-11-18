import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';

class BarberInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Nome da barbearia</Label>
                  <Input type="text" id="name" placeholder="Digite o nome da barbearia"/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <Input type="text" id="cep" placeholder="XXXXX-XXX"/>
                </FormGroup>
                <FormGroup>
                  <Col xs="8">
                    <Label htmlFor="address">Endereço</Label>
                    <Input type="text" id="address" placeholder="Digite o endereço"/>
                  </Col>
                  <Col xs="2">
                    <Label htmlFor="number">Número</Label>
                    <Input type="text" id="number" placeholder=""/>
                  </Col>
                  <Col xs="2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input type="text" id="complement" placeholder=""/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">Cidade</Label>
                      <Input type="text" id="city" placeholder="Digite a cidade"/>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <Label htmlFor="state">Estado</Label>
                    <Input type="text" id="state" placeholder="XX"/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">País</Label>
                  <Input type="text" id="country" placeholder="País"/>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="md" color="primary">Salvar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarberInfo;
