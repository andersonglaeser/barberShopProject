import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';

//Components
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

//Pages
import Dashboard from '../../views/Dashboard/';
import ScheduleCalendar from '../../views/Schedule/Calendar';
import CustomersList from '../../views/Customers/List';
import ProfessionalsList from '../../views/Professionals/List';
import ProfessionalsScheduleGrid from '../../views/Professionals/ScheduleGrid';
import ServicesList from '../../views/Services/List';
import ConfigurationsBarberInfo from '../../views/Configurations/BarberInfo';
import ConfigurationsMyData from '../../views/Configurations/MyData';
import ConfigurationsPersonalize from '../../views/Configurations/Personalize';
import Login from '../../views/Login';
import Page404 from '../../views/Page404';
import Page500 from '../../views/Page500';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/schedule" name="Schedule" component={ScheduleCalendar}/>
                <Route path="/customers" name="Customers" component={CustomersList}/>
                <Route path="/professionals/list" name="Professionals" component={ProfessionalsList}/>
                <Route path="/professionals/schedule-grid" name="Schedule Grid" component={ProfessionalsScheduleGrid}/>
                <Route path="/services" name="Services" component={ServicesList}/>
                <Route path="/configurations/barber-info" name="Barber Info" component={ConfigurationsBarberInfo}/>
                <Route path="/configurations/my-data" name="My Data" component={ConfigurationsMyData}/>
                <Route path="/configurations/personalize" name="Personalize" component={ConfigurationsPersonalize}/>

                <Route path="/login" name="Login" component={Login}/>
                <Route path="/404" name="404 error" component={Page404}/>
                <Route path="/500" name="500 error" component={Page500}/>

                <Redirect from="/professionals" to="/professionals/list"/>
                <Redirect from="/configurations" to="/configurations/barber-info"/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
