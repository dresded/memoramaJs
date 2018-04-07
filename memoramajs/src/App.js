import React, { Component } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';
import Shuffle from './utilerias/shuffle';


const getEstadoInicial = () => {
  const shuffleCards = Shuffle();
  return {
    shuffleCards,
    couple: [],
    estaComparando: false,
    numeroIntentos:0
  };
}

class App extends Component {

  constructor (props) {
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div className="App">
        <Header 
          numeroIntentos = {this.state.numeroIntentos}
          reset = {() => this.reset()}
        />
        <Table 
          shuffleCards = {this.state.shuffleCards}
          couple = {this.state.couple}
          seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta( carta ) {
    if (this.state.estaComparando || this.state.couple.indexOf(carta) > -1 || carta.correcta) {
      return;
    }

    const couple = [...this.state.couple, carta]
    this.setState({
      couple
    })

    if (couple.length === 2 ) {
      this.compararPareja(couple);
    }
  }

  compararPareja(couple) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta,segundaCarta] = couple;
      let shuffleCards = this.state.shuffleCards;
      if (primeraCarta.art === segundaCarta.art ){
        shuffleCards = shuffleCards.map((carta)  => {
          if (carta.art !== primeraCarta.art) {
            return carta;
          }

          return {...carta,correcta: true};
        }
        );
      }

      this.verificarSiHayGanador(shuffleCards);
      this.setState({
        couple: [],
        shuffleCards,
        estaComparando: false,
        numeroIntentos: this.state.numeroIntentos +1
      })
    }, 1000);
  }

  verificarSiHayGanador(shuffleCards) {
    if (shuffleCards.filter((carta) => !carta.correcta).length === 0) {
      alert(`Ganaste, numero intentos ${this.state.numeroIntentos}`);
    }
  }

  reset () {
    this.setState(
      getEstadoInicial()
    );
  }

}

export default App;
