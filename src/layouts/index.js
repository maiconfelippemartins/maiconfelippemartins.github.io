import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../assets/styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div style={{minHeight: '100vh'}} className="d-flex flex-column">
    <Helmet
      title="Maicon Felippe® - Designer gráfico e ilustrador"
      meta={[
        { name: 'description', content: 'Designer gráfico e ilustrador apaixonado por tudo que envolve design' },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#fff" />
    </Helmet>
    <div style={{flex: 1}}>
      <div>
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
