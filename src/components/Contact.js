import React from 'react'
import FeatherIcon from './FeatherIcon'
import SimpleIcon from './SimpleIcon'

const Contact = (props) => (
    <div className="mb-3">
      {props.mail ? (
        <div className="d-flex align-items-center mb-2">
          <FeatherIcon icon="mail" size={16} /> <span className="ml-2">{props.mail}</span>
        </div>
      ) : null}
      {props.phone ? (
        <div className="d-flex align-items-center">
          <FeatherIcon icon="phone" size={16} /> <span className="ml-2">{props.phone}</span>
        </div>
      ) : null}
    </div>
)

export default Contact
