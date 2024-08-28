import React, { useState } from 'react'
import img1 from './txt.png'

export default function About() {

  
  const [myStyle,setmyStyle]=useState({
    
    backgroundColor:'white',
    color:'black'
  })
  const [btntext,setbtntext]=useState("Dark")

  const toggleStyle=()=>{
    if(myStyle.color==='white')
    {
      setmyStyle({
        
        backgroundColor:'white',
        color:'black'
      })

      setbtntext("Dark")
    }

    else
    {
      setmyStyle({
        backgroundColor:'gray',
    color:'white'
      })

      setbtntext("Light")
    }
  }

  
  return (
    <div style={myStyle} >
      <div className="container col-xxl-8 px-4 py-5 " >
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-4">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={img1} className="d-block mx-lg-auto img-fluid" width="700" height="500"/>
      </div>
      <div className="col-lg-6 px-0">
        <h1 className="display-5 fw-bold lh-1 mb-3" >Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
       
        
      </div>
      <button className='btn btn-primary col-md-3' onClick={toggleStyle}>Enable {btntext} Mode</button>
    </div>
  </div>
  
    </div>
  )
}
