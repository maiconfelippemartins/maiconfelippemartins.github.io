import React from 'react'
import feather from 'feather-icons'

const FeatherIcon = (props) => (
  <div className="d-inline-flex" dangerouslySetInnerHTML={{__html: feather.icons[props.icon].toSvg({width: props.size, height: props.size})}} />
)

export default FeatherIcon
