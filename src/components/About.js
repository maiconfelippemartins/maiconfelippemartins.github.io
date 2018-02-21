import React from 'react'
import Markdown from 'react-markdown'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import Contact from './Contact'

const About = (props) => (
  <section style={{position: 'relative', overflow: 'hidden'}} className="bg-secondary">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="mb-3"><Logo height={24} src={require('../assets/img/logo.svg')} /></div>
            <Markdown>
              {props.content.about}
            </Markdown>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-end">
            <Contact
              phone={`+55 (47) 99977-6682`}
              mail={`contato@maiconfelippe.com`}
            />
            <SocialMedia
              size={24}
              pages={
                [{
                  icon: 'behance',
                  url: 'https://www.behance.net/maiconfelippe',
                  color: '#080808',
                },{
                  icon: 'instagram',
                  url: 'https://www.instagram.com/maiconfelippemartins/',
                  color: '#080808'
                },{
                  icon: 'linkedin',
                  url: 'https://linkedin.com/in/maicon-felippe-martins-b44a73108/',
                  color: '#080808'
                }]
              }/>
          </div>
        </div>
      </div>
    </section>
  )

  export default About
