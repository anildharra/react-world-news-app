import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon
} from 'mdbreact';
import './HomePage.css';
import axios from 'axios';
import config from '../config';
import newsTag from '../newsTag';
import world_news_logofrom from '../assets/world-news-logo.png';


class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  jsonData ='';
  newsContent =[];
  contentArr =["fdgfgfdgdfg","fgfsdfsdfdssdfds","3243535355","<div>dsdvvdvdv</div","111111"]
  state = {
    jsonLoaded: false
  };

   loadApi = () => {
    try {
      return axios.get(config.GOOGLE_API_URL+config.GOOGLE_API_KEY)
    } catch (error) {
      console.error(error)
    }
  }

   getApiData =  () => {
    const getdata = this.loadApi()
      .then(response => {
       // console.log(response);
       // console.log(response.data);
        //const dataObj = JSON.parse(response.data);
        this.jsonData = response.data;
        //searchFlag = false;
        //loadfile1();
        this.parseJsonData();

        })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount(){
    console.log("componentDidMount()");
    console.log(this.props);
    console.log("#############################");
    console.log(this.props.location.search);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    this.getApiData();
  }

  ///////////////////////////////////////////////////
  parseJsonData =()=>{
    console.log("parseJsonData() BEGIN");
    console.log("parseJsonData() jsonData.totalResults ="+this.jsonData.totalResults);
    let newsDataArr =[];
    
    if(this.jsonData.totalResults === undefined || this.jsonData.totalResults === 'undefined' ) {
      return false;

    }

     
    const articles = this.jsonData.articles.map(el=>{
        let authorN ="N/A";
        if(el.author == null){
            authorN ="N/A"
        }else {
            authorN = el.author;
        }
        //console.log( el.title);
         
        newsDataArr.push({author:authorN,
            title:el.title,
            description:el.description,
            url:el.url,
            urlToImage:el.urlToImage,
            publishedAt:el.publishedAt,
            content:el.content

        })
         

    })
   
    console.log("parseJsonData() newsDataArr.length ="+newsDataArr.length);
    let str1 ='';

    const templateNews1 = newsDataArr.map(el => {
         
       str1 = "<div class='w3-third w3-container w3-margin-bottom'>";
      str1 += "<a href='"+el.url+"' target='_blank' ><img src='"+el.urlToImage;
      str1 += "' alt='' style='width:100%' class='w3-hover-opacity' /></a>";
      str1 += "<div class='w3-container w3-white'>";
      str1 += "<p><b>"+el.author+"</b></p>";
      str1 += "<p><h6>"+el.publishedAt+"</h6></p>";
      str1 += "<p>"+el.description+"</p>";
      str1 += "<p>"+el.content+"</p>";

      str1 += "</div>";
      str1 += "</div>";
        return str1;

    });
     
    if(this.jsonData.totalResults>0 && str1!=='') {
      this.newsContent = newsDataArr;
      this.setState({
        jsonLoaded: true  
      })
      
      console.log("parseJsonData() this.state.jsonLoaded =========="+ this.state.jsonLoaded);
      //console.log("parseJsonData() this.newsContent =========="+ this.newsContent.toString());
    }
    console.log("parseJsonData() END");
     //return str1;

  }
  //////////////////////////////////////////////////////////////////////////
  renderNews =() =>{
    console.log("renderNews() BEGIN");
    //console.log("renderNews() this.state.jsonLoaded ="+ this.state.jsonLoaded);
    //console.log("renderNews() this.state.newsContent ="+ this.newsContent);
     
    if( !this.state.jsonLoaded){
      return false;
    }  
    let arr = this.newsContent.map((item,i)=>{
      return (
        <div>
            {item}
        </div>
      )
    })
    return arr;

  }
  render() {
    return (
      <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <div className='mt-3 mb-5'>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol
              md='10'
              className='mx-auto float-none white z-depth-1 py-2 px-2'
            >
              <MDBCardBody className='text-center'>
                <h3 className='h2-responsive mb-4'>
                  <strong className='font-weight-bold'>
                    <img
                      src={world_news_logofrom}
                      style={{ height: '15%', width: '10%' }} alt=''
                      className='pr-2'
                    />
                    World news
                  </strong>
                </h3>
                <MDBRow />
                <p>You can select Country and category to get latest Top World News.</p>
                
                 
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' className='mt-4'>
               
              <hr className='my-5' />
               


                    {this.newsContent.length >0 
                      ? this.newsContent.map((item,i) => {
                      let temp=<div>AK</div>;
                      if(i%3 === 0) {
                        temp = newsTag.readDataWithRowMethod(item,i);
                        //console.log("IF temp ===="+ typeof temp );
                        //console.log(temp);
                    } else {
                        temp = newsTag.readDataWithoutRowMethod(item,i);
                        //console.log("else temp ===="+ typeof temp );
                        //console.log(temp);
                    }

                    return (temp)
                    })

                    : <div>Loading...</div>
                    }






            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
    );
  }
}
 

export default HomePage;
