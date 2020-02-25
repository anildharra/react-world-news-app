import React, { Component } from "react";
 
import {
    MDBContainer,
    MDBInputGroup,
    MDBBtn,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownToggle,
    MDBIcon,
    MDBCol,
    MDBInput,
    MDBRow
  } from 'mdbreact';
  //import DocsLink from '../components/docsLink';
  //import SectionContainer from '../components/sectionContainer';
  //import DocsLink from './components/docsLink';
  import SectionContainer from './components/sectionContainer';
   import { useHistory } from "react-router-dom";
  //import { browserHistory } from 'react-router-dom';
  //import { browserHistory, Route, Switch } from 'react-router-dom';

const SelectCountry =(props)=> {
    let history = useHistory();
    const  Styles = () => {
        const style = document.createElement('style');
        style.innerHTML = `
          .inpGroup .dropdown .dropdown-menu .dropdown-item:hover{
            background-color: #f8f9fa ;
            color: #16181b !important;
            box-shadow: 0 0 0 rgba(0,0,0,0) ;
          }
    
    
          .custom-input-group.input-group input {
            border: 1px solid #bdbdbd;
          }
          .custom-input-group.input-group input[type=text]:focus:not([readonly]).lime-border  {
            border: 1px solid #cddc39;
            box-shadow: none;
          }
          .custom-input-group.input-group input {
            border: 1px solid #bdbdbd;
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }
          .custom-input-group.input-group input[type=text]:focus:not([readonly]).red-border  {
            border: 1px solid #ef9a9a;
            box-shadow: none;
          }
          .custom-input-group.input-group input[type=text]:focus:not([readonly]).amber-border  {
            border: 1px solid #ffca28;
            box-shadow: none;
          }
          .custom-input-group.input-group input[type=text]:focus:not([readonly]).blue-border  {
            border: 1px solid #64b5f6;
            box-shadow: none;
          }
          .custom-input-group.input-group input {
            border: 1px solid #bdbdbd;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
          }
          .custom-input-group.input-group input[type=text]:focus:not([readonly]).purple-border  {
            border: 1px solid #ce93d8;
            box-shadow: none;
          }
          
          `;
        const firstScriptTag = document.querySelector('script');
        firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
      };
      const toggle = nr => () => {
          console.log("toggle() BEGIN");
          //const history = useHistory();
         let countryCodeVal =  document.getElementById("countryCode").value;
         let categoryVal =  document.getElementById("category").value;
         
         let selectedIndexOption = document.getElementById("countryCode").selectedIndex;
         let splitArr = (document.getElementsByTagName("option")[selectedIndexOption].innerHTML).split("(+")[0];

         let CountryText = splitArr;
               //props.category="cn";
               //browserHistory.push(`/search?countryCode=${countryCodeVal}&category=${categoryVal}`);
               //this.props.history.push(`/search?countryCode=${countryCodeVal}&category=${categoryVal}`);
               const rnd = Math.floor(Math.random()*9999);
              // history.pushState(null, '/');
               //history.pushState(null, '/search');
               history.replace(`/force/redirectTEmporary?key=${Math.random()}`);
                setTimeout(()=>{
                    console.log("setTimeout() CALL");
                    history.push(`/search?countryCode=${countryCodeVal}&category=${categoryVal}&rnd=${rnd}&Country=${CountryText}`);
                },1000);
                props.triggerParentUpdate();
               console.log("toggle() END");
            }
      Styles();
    return (
      
        <SectionContainer header=''>
             <form action="/search?">
              
          <MDBInputGroup
            containerClassName='mb-3'
            prepend='Country'
            inputs={
               
    <select defaultValue="IN" id="countryCode" className='browser-default custom-select'>
		<option value="AR" >Argentina (+54)</option>
		<option value="AU" >Australia (+61)</option>
		<option value="AT" >Austria (+43)</option>
		<option value="BE" >Belgium (+32)</option>
		<option value="BR" >Brazil (+55)</option>
		<option value="BG" >Bulgaria (+359)</option>
		<option value="CA" >Canada (+1)</option>
		<option value="CN" >China (+86)</option>
		<option value="CO" >Colombia (+57)</option>		 
		<option value="CU" >Cuba (+53)</option>
		<option value="EG" >Egypt (+20)</option>
		<option value="FR" >France (+33)</option>
		<option value="DE" >Germany (+49)</option>
		<option value="GR" >Greece (+30)</option>
		<option value="HK" >Hong Kong (+852)</option>
		<option value="HU" >Hungary (+36)</option>
		<option value="IN" defaultValue>India (+91)</option>
		<option value="ID" >Indonesia (+62)</option>
		<option value="IE" >Ireland (+353)</option>
		<option value="IL" >Israel (+972)</option>
		<option value="IT" >Italy (+39)</option>
		<option value="JP" >Japan (+81)</option>
		<option value="LV" >Latvia (+371)</option>
		<option value="LT" >Lithuania (+370)</option>
		<option value="MY" >Malaysia (+60)</option>
		<option value="MX" >Mexico (+52)</option>
		<option value="MA" >Morocco (+212)</option>
		<option value="NL" >Netherlands (+31)</option>
		<option value="NZ" >New Zealand (+64)</option>
		<option value="NG" >Nigeria (+234)</option>
		<option value="NO" >Norway (+47)</option>
		<option value="PH" >Philippines (+63)</option>
		<option value="PL" >Poland (+48)</option>
		<option value="PT" >Portugal (+351)</option>
		<option value="RO" >Romania (+40)</option>
		<option value="RU" >Russia (+7)</option>
		<option value="SA" >Saudi Arabia (+966)</option>
		<option value="CS" >Serbia (+381)</option>
		<option value="SG" >Singapore (+65)</option>
		<option value="SK" >Slovak Republic (+421)</option>
		<option value="ZA" >South Africa (+27)</option>
		<option value="ES" >Spain (+34)</option>
		<option value="SE" >Sweden (+46)</option>
		<option value="CH" >Switzerland (+41)</option>
		<option value="TW" >Taiwan (+886)</option>
		<option value="TH" >Thailand (+66)</option>
		<option value="TR" >Turkey (+90)</option>
		<option value="GB" >UK (+44)</option> 
		<option value="UA" >Ukraine (+380)</option>
		<option value="AE">United Arab Emirates (+971)</option>
		<option value="US" >USA (+1)</option> 
		<option value="VE" >Venezuela (+58)</option>
		 </select>
            }
          />
 
          <MDBInputGroup
            containerClassName='mb-3'
            append='Category'
            inputs={
              <select id="category" defaultValue="business" className='browser-default custom-select'>
                  <option value="government" >Government</option>
                <option value="business"  defaultValue>Business</option>
                <option value="entertainment"  >Entertainment</option>
                <option value="health" >Health</option>
                <option value="science" >Science</option>
                <option value="sports" >Sports</option>
                <option value="technology" >Technology</option>

              </select>
            }
          />
               
            <div className='text-center py-4 mt-3'>
                <div className='text-center'>
                    <MDBBtn color='primary' onClick={toggle(1)}>Search</MDBBtn>
                </div>
            </div> 
            </form>
        </SectionContainer>
      
      
    );
 
}

export default SelectCountry;