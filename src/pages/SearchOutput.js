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
import queryString from 'query-string';


class SearchOutPut extends React.Component {
  

  scrollToTop = () => window.scrollTo(0, 0);
  jsonData ='';
  newsContent =[];
  countryName ='';
  categoryName='';
  state = {
    jsonLoaded: false,
    reload:false,
    countryName:'',
    categoryName:'',
    NoNewsFoundColor:'#ff0000'

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
        //console.log(response);
        //console.log(response.data);
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
    console.log("SearchOutput.js :- componentDidMount()");
    //console.log(this.props);
    //console.log("#############################");
    //console.log(this.props.location.search);
    //console.log("this.props.location.query.to ="+this.props.location.key);
    
    const values = queryString.parse(this.props.location.search)
  //console.log(values.countryCode) //  
  //console.log(values.category) //  
  const countryCode = values.countryCode;
  const category = values.category;
  this.setState({
    categoryName:category,
    countryName:values.Country
  })  
   
  //console.log("SearchOutput.js :- componentDidMount() this.countryName ="+this.countryName +", this.categoryName = " + this.categoryName );
  config.GOOGLE_API_URL = `http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=`;
    console.log("componentDidMount() config.GOOGLE_API_URL ="+ config.GOOGLE_API_URL);
    this.getApiData();
  }

  componentWillReceiveProps (nextProps) {
    const { location } = this.props
    const { location: nextLocation } = nextProps

    if (nextLocation.pathname === location.pathname &&
        nextLocation.search === location.search &&
        nextLocation.hash === location.hash &&
        nextLocation.key !== location.key) {
      this.setState({ reload: true }, () => this.setState({ reload: false }));
      const values = queryString.parse(this.props.location.search)
  console.log("componentWillReceiveProps() values.countryCode ="+values.countryCode) //
  console.log("componentWillReceiveProps() values.category ="+values.category) //    
     
  const countryCode = values.countryCode;
  const category = values.category;
  config.GOOGLE_API_URL = `http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=`;
    console.log("componentWillReceiveProps() $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    this.getApiData();
    }
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
        jsonLoaded: true,
        NoNewsFoundColor:'#ff0000'  
      })
      const temp = this.NoNewsFound();
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
  NoNewsFound =()=>{
    console.log("NoNewsFound() this.state.countryName ="+ this.state.countryName);
    console.log("NoNewsFound() this.state.categoryName ="+ this.state.categoryName);
    console.log("NoNewsFound() this.state.NoNewsFoundHeight ="+ this.state.NoNewsFoundHeight);
    const myStyles ={
      color:this.state.NoNewsFoundColor
    }
    return (
      <span>
        {this.state.countryName  === '' ? <div>Loading...</div>
        : <span style={{myStyles}}>No news Found for Country: {this.state.countryName} and Category : {this.state.categoryName} </span>
         }
          
      </span>
    )
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
                    News from Country : {this.state.countryName} 
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

                    : <div style={{color: this.state.NoNewsFoundColor}}><h6>
                      {this.NoNewsFound()}
                      </h6>
                      </div>
                    }
                    

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
    );
  }
}

export default SearchOutPut;
