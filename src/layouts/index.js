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
      title="Maicon Felippe - Designer Gráfico e Ilustrador"
      meta={[
        { name: 'description', content: 'Gerenciamento das redes sociais de sua empresa, identidade visual da sua marca, criação de material impresso e digital e ilustrações ' },
      ]}
    />
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
