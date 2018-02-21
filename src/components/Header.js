import React from 'react'
import Link from 'gatsby-link'
import Logo from './Logo'
import FeatherIcon from '../components/FeatherIcon'

const Header = (props) => (
  <div className="my-3">
    <div className="container">
      <div className="d-flex align-items-center">
        <div style={{flex: 1}}>
          <Logo name="Panthera" />
        </div>
        <div>
          {props.phone ? (
            <div className="d-flex align-items-center">
              <FeatherIcon icon="phone" size={16} /> <span className="ml-2">{props.phone}</span>
            </div>
          ) : null}
        </div>
        <div className="ml-3">
          <button className="btn btn-primary">
            {props.cta}
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Header
