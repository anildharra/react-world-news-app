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
import HeaderImage from './HeaderImage';


import NavBarPage from './pages/NavbarPage';

class App extends Component {
  state = {
    collapseID: '',
    apiloadcounter:0,
    countryCode:'',
    category:''
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
    console.log(" apiloadcounter ="+ this.state.apiloadcounter);
    console.log(" countryCode ="+ this.state.countryCode);
    console.log(" category ="+ this.state.category);
     
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
        <div id="header-container" className='fluid'>
          <HeaderImage />

        <NavBarPage />
        </div>
        
        <div className='fluid'>
         
           
          
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
