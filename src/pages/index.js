import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import Features from '../components/Features'
import About from '../components/About'
import Logos from '../components/Logos'

const IndexPage = () => (
  <div>
    <Main
      tagline="Maicon Felippe"
      subtagline="designer e ilustrador"
      cta="Ver portfólio"
      action={{
        href: 'https://www.behance.net/maiconfelippe'
      }}
    />
    <Features
      features={[
        {
          icon: 'at-sign',
          title: 'Redes sociais',
          description: 'Gerenciamento de conta e criação de marketing de conteúdo'
        },
        {
          icon: 'eye',
          title: 'Comunicação visual',
          description: 'Outdoor, flyer, cartão de visita, e-mail marketing'
        },
        {
          icon: 'image',
          title: 'Identidade Visual',
          description: 'Marca, slogan, manual da marca, branding'
        },
        {
          icon: 'edit-3',
          title: 'Ilustração',
          description: 'Para impresso e digital'
        },
      ]}
    />
    <About content={{
      title: 'Sobre mim',
      about: "Curioso, inovador e minucioso.\n\nVasto conhecimento através da autodidática, formação acadêmica e anos de experiência na área."
    }} />
  </div>
)

export default IndexPage
