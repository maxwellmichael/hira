import React from 'react';



const LoadingView = (props)=>{

    return (
    <div className='loading-main'>
        <div style={{color:'white'}} className='title1 headline1'>{props.value}%</div>
    </div>
    );
}

export default LoadingView;
