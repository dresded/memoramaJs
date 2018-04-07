import React from 'react'
import PortadaList from '../portada-list'

class PortadaApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { portada: [] }
  }

  componentWillMount() {
    fetch('https://itunes.apple.com/search?term=rock&callback=?')
      .then((response) => {
        return response.json()
      })
      .then((portada) => {
        this.setState({ portada: portada })
      })
  }

  render() {
    if (this.state.portada.length > 0) {
      return (
        <div className="container-fluid">
          <PortadaList listado={this.state.portada} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando portadas...</p>
    }
  }

}

export default PortadaApp