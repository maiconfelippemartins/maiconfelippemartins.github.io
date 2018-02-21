import React from 'react'

const Logos = (props) => (
  <section className="py-5 pb-3">
    <div className="container">
      {props.title ? <h2 className="mb-4"><strong>{props.title}</strong></h2> : null}
      <ul className="row list-unstyled mb-0">
        {props.logos ? props.logos.map((logo, index) => (
          <li className="col-12 col-md-4 col-lg-3 col-xl-2 mb-3" style={{height: 128}}>
            <a href={logo.href ? logo.href : '#!'} style={!logo.href ? {cursor: 'default'}  : null}><img src={logo.src} alt={logo.alt} className="h-100" /></a>
          </li>
        )
      ) : null}
      </ul>
    </div>
  </section>
)

export default Logos
