import React from 'react';
import { redirect, useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Specific Error Page made for this error</h1>
        <h1 style={{textAlign:'center', fontSize:'30px'}}> Status Code: {err.status}</h1>
        {/* <h2 style={{backgroundColor:'#f0f0f0f9', textAlign:'center', fontFamily:'cursive'}} >Error Message: {err.error.message}</h2> */}
    </div>
    
  )
}
export default Error;
