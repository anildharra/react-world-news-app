
  import React from 'react'
  import CustomComponent from './CustomComponent';
  import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBAnimation,
    MDBBtn
  } from 'mdbreact';



  const  readDataWithRow = {
     

    readDataWithRowMethod: function(item,i) {
      //console.log("readDataWithRowMethod() ");
       
      const fadeEffectArr = ["fadeInUp","fadeInLeft","fadeInRight"];
      const rnd = parseInt(Math.random()*3);
      const fadeEffect = fadeEffectArr[rnd];


      return <CustomComponent key={i} >
         

         <MDBRow id='categories'>                           
      <MDBCol md='4'> 
      <MDBAnimation reveal type={fadeEffect}>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={item.urlToImage}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon
                icon='css3'
                brand
                className='pink-text pr-2'
              />
              <strong>{item.title}</strong>
            </MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
            <MDBBtn href={item.url}
              target="_blank" tag="a" role="button" color="primary">More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
    </MDBRow>`


        </CustomComponent>
    },
      



     readDataWithoutRowMethod: function(item,i) {
      //console.log("readDataWithoutRowMethod() ");
      const fadeEffectArr = ["fadeInUp","fadeInLeft","fadeInRight"];
      const rnd = parseInt(Math.random()*3);
      const fadeEffect = fadeEffectArr[rnd];

      return <CustomComponent key={i} >
         

                                 
      <MDBCol md='4'> 
      <MDBAnimation reveal type={fadeEffect}>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={item.urlToImage}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon
                icon='css3'
                brand
                className='pink-text pr-2'
              />
              <strong>{item.title}</strong>
            </MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
            <MDBBtn href={item.url}
              target="_blank" tag="a" role="button" color="primary">More</MDBBtn>
             
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        </CustomComponent>
    }


}

  
  //////////////////////////////////

//let  TAGWITHOUTROW = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=';

//let TAGWITHROW =`<MDBCardText key='0'>ggggggggggggggg</MDBCardText>`
/*
module.exports = {
   
  TAGWITHOUTROW,
  TAGWITHROW
  }

  */

 export default readDataWithRow;


