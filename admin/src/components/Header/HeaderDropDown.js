import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool
};
const defaultProps = {
  notif: false,
  accnt: false
};

class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropNotif() {
    const itemsCount = 3;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-bell"></i><Badge pill color="danger">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Você tem {itemsCount} notificações</strong></DropdownItem>
          <DropdownItem><i className="icon-user-follow text-success"></i> Cliente Anderson G. cadastrado</DropdownItem>
          <DropdownItem><i className="icon-user-unfollow text-danger"></i> Cliente João B. deletado</DropdownItem>
          <DropdownItem><i className="icon-basket-loaded text-primary"></i> Novo agendamento para Anderson G. com Pierre N.</DropdownItem>

          <DropdownItem header tag="div" className="text-center"><strong>Situação da barbearia</strong></DropdownItem>

          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Atendimentos realizados</b></small>
            </div>
            <small className="text-muted">34893</small>
          </DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Clientes atendidos</b></small>
            </div>
            <small className="text-muted">2932</small>
          </DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Profissionais</b></small>
            </div>
            <small className="text-muted">6</small>
          </DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Serviços cadastrados</b></small>
            </div>
            <small className="text-muted">320</small>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/> Pierre Nascimento
          &nbsp;&nbsp;
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Configurações</strong></DropdownItem>
          <DropdownItem href={'#/configurations/barber-info'}><i className="fa fa-home"></i> Informações da barbearia</DropdownItem>
          <DropdownItem href={'#/configurations/my-data'}><i className="fa fa-user"></i> Meus dados</DropdownItem>
          <DropdownItem href={'#/configurations/personalize'}><i className="fa fa-wrench"></i> Personalizar</DropdownItem>
          
          <DropdownItem divider/>

          <DropdownItem><i className="fa fa-lock"></i> Sair</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {notif, accnt} = this.props;
    return (
      notif ? this.dropNotif() :
      accnt ? this.dropAccnt() : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;

export default HeaderDropdown;
