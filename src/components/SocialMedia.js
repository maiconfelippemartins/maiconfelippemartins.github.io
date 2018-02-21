import React from 'react'
import SimpleIcon from './SimpleIcon'

const SocialMedia = (props) => (
  <div>
    <ul className="list-unstyled d-flex">
      {props.pages.map((page, index) => (
        <li key={index} className="mr-3">
          <a href={page.url}>
            <SimpleIcon icon={page.icon} size={props.size} fill={page.color} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialMedia
