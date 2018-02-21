import React from 'react'
import Markdown from 'react-markdown'
import FeatherIcon from '../components/FeatherIcon'

const Features = (props) => (
  <section className="pt-5 pb-2">
    <div className="container">
      {props.title ? <h3 className="mb-5 text-center"><strong>{props.title}</strong></h3> : null}
      <div className="row">
        {props.features.map((feature, index) => (
          <div className="col-12 col-md-6 mb-5" key={index}>
            <div className="mb-3">
              <FeatherIcon size={36} icon={feature.icon} />
            </div>
            <h5>{feature.title}</h5>
            <span className="mb-0 font-weight-light"><Markdown>{feature.description}</Markdown></span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features
