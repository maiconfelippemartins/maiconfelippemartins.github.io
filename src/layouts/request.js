import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import '../assets/styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div style={{minHeight: '100vh'}} className="d-flex flex-column">
    <Helmet
      title="Gatsby Panthera"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div style={{flex: 1}} className="d-flex align-items-center">
        {children()}
    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
