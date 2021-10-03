import "./Title.css"

import React from 'react';

import logo from "../../Images/7.jpg"

const Title = () => {
    return (
        <>
        <div className="mb-5 mt-5" >
                   
                
                    <div className="d-flex d-flex align-items-baseline justify-content-around "style={{marginTop:"150px"}}>
                               <div>
                               <div className="header ">
                                        <h1 className="Title " > <span className='thumb'>Learn </span>  Without Limits</h1>
                                    </div>
                                    <div>
                                        <p className="p-2 text-center"><small>Build skills with courses, certificates, and degrees online from world-class universities and companies  </small></p>
                                    </div>
                                    <div className="text-center mb-5">
                                    <button type="button" style={{borderRadius:"10px"}} class="btn btn-danger me-3 fs-3 px-4">Join for Free</button>
                                    <button type="button" style={{borderRadius:"10px"}}  class="btn btn-secondary fs-3 px-4">Try for Business</button>
                                </div>
                               </div>



                               <div >
                                    <img  style={{borderRadius:"50%"}} height="500" width="600" src={logo} alt="" />

                                </div>
               

                </div>
                
              
                </div>
                
            
            <hr />
 
       
            
        </>
    );
};

export default Title;