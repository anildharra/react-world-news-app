import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
 
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCol,
  MDBFooter,
  MDBIcon,
  MDBInput
} from 'mdbreact';
 
import SectionContainer from '../components/sectionContainer';
import SelectCountry from '../SelectCountry';
import './HomePage.css';

class NavbarPage extends Component {
  state = {
    collapseID: '',
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false 
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  callFromChildComponent =() => {
    console.log("callFromChildComponent()")
    this.setState({
      modal1: false
    });
  };
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { modal1,modal2,modal3} = this.state;
     
    return (
      
      <div className="main-nav-bar">
      
              
              <MDBBtn gradient="peach" size="sm" rounded onClick={this.toggle(1)}>Search</MDBBtn>
              <MDBModal isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(1)}
            >
               
            </MDBModalHeader>
            <MDBModalBody>
            <h2 style={{ color:'#000',textAlign:'left'}} >Select Country and category to load latest top News.</h2>
            <SelectCountry triggerParentUpdate={this.callFromChildComponent} />
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='mailto:anilishu2006@gmail.com'> anilishu2006@gmail.com </a>
            </p>
            </MDBModalFooter>

            
          </MDBModal>

          <MDBBtn gradient="purple" size="sm" rounded onClick={this.toggle(2)}>Contact</MDBBtn>
                 
                  
                 <MDBBtn gradient="blue" size="sm" rounded onClick={this.toggle(3)}>About</MDBBtn>

                 <MDBModal isOpen={modal2} toggle={this.toggle(2)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(2)}
            >
               
            </MDBModalHeader>
            <MDBModalBody>
             
            <MDBCol md='6'>
            <SectionContainer>
              
                <p className='h5 text-center mb-4'>Write to us</p>
                <div className='grey-text text-left'>
                  <MDBInput
                    label='Your name'
                    icon='user'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput
                    label='Your email'
                    icon='envelope'
                    group
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput
                    label='Subject'
                    icon='tag'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput
                    type='textarea'
                    rows='2'
                    label='Your message'
                    icon='pencil-alt'
                  />
                </div>

                <div className='text-center py-4 mt-3'>
                <div className='text-center'>
                    <MDBBtn color='primary' onClick={this.toggle(2)}>Send</MDBBtn>
                </div>
            </div> 
                 
               
            </SectionContainer>
          </MDBCol>
            </MDBModalBody>
                       
          </MDBModal>



          <MDBModal isOpen={modal3} toggle={this.toggle(3)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(3)}
            >
               
            </MDBModalHeader>
            <MDBModalBody>
            <MDBRow>
        <MDBCol>
          <SectionContainer
            header=''
            className='justify-content-center d-flex'
          >
            <MDBCard style={{ width: '22rem' }}>
              <MDBCardImage
                className='img-fluid'
                src='nature.jpg'
                waves
              />
              <MDBCardBody>
                 
                <MDBCardText className='text-left'>
                  <h6>&nbsp;</h6>
                  <h6 style={{ color:'#0000ff',textAlign:'left'}}>&nbsp;&nbsp;Kumar Anil</h6>
                <h4>Full Stack Developer, Cloud Solutioning Architect</h4>
                <h5>Highlights</h5>
<ul>
<li>Known for writing efficient, maintainable and reusable code that preserves privacy and security.</li>
<li>Proficient in object-oriented design, problem solving, complexity analysis, and debugging.</li>
<li>Expert in the interaction between eLearning automation Tool development.</li>
<li>Identifies best practices for the design, development and implementation of learning content while demonstrating creativity, flexibility and innovation in course design.</li>
<li>Regarded as a self-motivated and well organized team player.</li>
<li>Provided oversight and mentorship to a team of developers.</li>
<li>Proficient in Communications, teamwork, organization, sense of urgency and leadership.</li>
<li>Exceptional written, verbal, critical thinking, problem solving, and interpersonal communication skills.</li>
</ul>
             
                </MDBCardText>
                 
              </MDBCardBody>
              <MDBFooter color='indigo'>
            <h6 className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='mailto:anilishu2006@gmail.com'> anilishu2006@gmail.com </a>
            </h6>
          </MDBFooter>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
              
            </MDBModalBody>
                 
          </MDBModal>
          <strong className='header-text-color' style={{ paddingLeft:'5px' }}>World News</strong>
      </div>
           
 
      
    );
  }
}

export default NavbarPage;
