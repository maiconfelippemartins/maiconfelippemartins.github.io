import React from 'react'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import FeatherIcon from './FeatherIcon'
import Contact from './Contact'

const Main = (props) => (
  <section
    className="d-flex py-5 align-items-center main-section bg-black"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-center d-flex flex-column align-items-center mx-auto" style={{position: 'relative', zIndex: 100}}>
            <div className="mb-3" style={{filter: 'invert(100%)'}}><Logo height={96} src={require('../assets/img/logo.svg')} /></div>
            <h1 className="text-white">{props.tagline}</h1>
            <p className="h4 font-weight-light text-white mb-3">{props.subtagline}</p>
            {props.cta ? (
              <a href={props.action ? props.action.href ? props.action.href : '#!' : '#!'}>
                <button className="btn btn-primary mt-3 d-flex align-items-center" onClick={props.action ? props.action.func ? props.action.func : null : null}>
                  {props.cta}
                  <div className="d-inline-flex ml-1"><FeatherIcon icon="external-link" size={16}/></div>
                </button>
              </a>
            ) : null}
            </div>
          </div>
        </div>
      </section>
    )

    export default Main
