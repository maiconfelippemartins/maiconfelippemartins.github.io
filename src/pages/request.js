import React from 'react'
import axios from 'axios'
import Link from 'gatsby-link'
import FeatherIcon from '../components/FeatherIcon'

class Request extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      success: false,
      hasDomain: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    if (e.target.name === 'hasDomain') {
      if (e.target.value === 'domainYes') {
        this.setState({
          hasDomain: true
        })
      } else {
        this.setState({
          hasDomain: false
        })
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    axios.post('/mail', {
      name: e.target.name.value,
      email: e.target.email.value,
      fields: `
      Nome: ${e.target.name.value}
      Email: ${e.target.email.value}
      Telefone ou Skype: ${e.target.phone.value}
      Empresa: ${e.target.company.value || 'não informado'}
      CPF ou CNPJ: ${e.target.registration.value}
      Tem domínio: ${e.target.hasDomain.value}
      Nome do domínio: ${e.target.domain.value}
      `
    }).then((response) => {
      this.setState({
        loading: false,
        success: true
      })
    }).catch((err) => {
      this.setState({
        loading: false,
      })
    })
  }
  render() {
    return (
      <div className="container py-5">
        <div className="row w-100 d-flex align-items-lg-center">
          <div className="col-12 col-md-7 col-lg-5">
            {this.state.success ? (
              <div>
                <h3>🎉</h3>
                <h1 className="font-weight-light">Obrigado!</h1>
                <h3 className="text-muted">Falaremos com você em algumas horas.</h3>
              </div>
            ) : (
              <div><h3>😸</h3>
              <h1 className="font-weight-light">Adquira o seu</h1>
              <p>
                Preencha os campos abaixo e aguarde nosso contato.
              </p>
              <p className="text-muted"><small>* Campos obrigatórios</small></p>
              <form onSubmit={this.handleSubmit} className="mb-3">
                <div className="form-group">
                  <label>Nome *</label>
                  <input type="text" name="name" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Telefone ou Skype</label>
                  <input type="text" name="phone" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Empresa</label>
                  <input type="text" name="company" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>CPF ou CNPJ *</label>
                  <input type="text" name="registration" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Você já tem domínio? *</label><br />
                  <div className="custom-control custom-radio custom-control-inline">
                    <input className="custom-control-input" type="radio" name="hasDomain" id="domainYes" value="domainYes" onChange={this.handleChange} required/>
                    <label className="custom-control-label" htmlFor="domainYes">Sim</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input className="custom-control-input" type="radio" name="hasDomain" id="domainNo" value="domainNo" onChange={this.handleChange} required/>
                    <label className="custom-control-label" htmlFor="domainNo">Não</label>
                  </div>
                </div>
                {this.state.hasDomain !== null ? (
                  <div className="form-group">
                    <label>{this.state.hasDomain ? 'Informe o nome do domínio que você já possui:' : 'Informe o nome de domínio que você deseja:'}</label>
                    <input type="text" name="domain" className="form-control" placeholder="Exemplo: meudominio.com.br" required/>
                  </div>
                ) : null}
                <button type="submit" className="btn btn-primary" disabled={this.state.loading}>
                  {this.state.loading ? 'Enviando...' : 'Solicitar'}
                </button>
              </form>
              <Link to="/"><FeatherIcon icon="arrow-left" size={16}/> Voltar</Link></div>
            )}
          </div>
          <div className="col-12 col-md-5 col-lg-7 d-flex align-items-center" >
            <div className="ml-md-5">
              <div className="card p-4 w-100 bg-secondary border-0">
                <div className="card-body">
                  <h2 className="font-weight-light">Investimento</h2>
                  <p className="lead"><strong>R$ 492</strong></p>
                  <h4 className="font-weight-light">O que inclui</h4>
                  <ul className="pl-4">
                    <li>Website de 1 página</li>
                    <li>Redação do conteúdo</li>
                    <li>1 ano de hospedagem</li>
                    <li>Implementação do website no servidor de hospedagem</li>
                    <li>Configuração do domínio*</li>
                  </ul>
                  <small className="text-muted mb-0">* Registro do domínio será cobrado à parte. Cada domínio tem seu valor específico.</small>
                </div>
              </div>
              <div className="card mt-3 p-4 w-100 bg-greyLight border-0">
                <div className="card-body">
                  <h2 className="font-weight-light">Como funciona</h2>
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Request
