import React from 'react'

const Logo = (props) => (
  <div>
    { (<img src={props.src} height={props.height} />) || (
      <div className="d-flex align-items-center">
        <h1 className="h3 font-weight-light mb-0">{props.name}</h1>
      </div>
    ) }
  </div>
)

export default Logo
