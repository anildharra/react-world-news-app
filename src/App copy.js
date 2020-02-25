import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';
import SelectCountry from './SelectCountry';
import myphoto from './assets/my.png';

import NavBarPage from './pages/NavbarPage';

class App extends Component {
  state = {
    collapseID: ''
  };

  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <NavBarPage />
          <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <img src={myphoto} style={{ height: '5.5rem', width: '4.5rem' }} alt=''/>
              <strong className='align-middle'>World Latest Top News</strong>
             
            </MDBNavbarBrand>
            

            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Contact Us</strong>
                  </MDBNavLink>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>About</strong>
                  </MDBNavLink>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Help</strong>
                  </MDBNavLink>

                </MDBNavItem>
                 
                
              </MDBNavbarNav>
            </MDBCollapse>
            <SelectCountry />
          </MDBNavbar>
          {collapseID && overlay}
          
          <main style={{ marginTop: '0.1rem' }}>
            <Routes />
          </main>
          <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='mailto:anilishu2006@gmail.com'> anilishu2006@gmail.com </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
