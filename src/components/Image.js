import React from 'react';

 const image = (props) => {
  return(
    <React.Fragment>
      <div className="image">
        <img src={props.src} alt=""/>
      </div>
      <h2>{props.name}</h2>
    </React.Fragment>
    )
}


export default image;