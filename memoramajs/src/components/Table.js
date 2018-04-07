import React, { Component } from 'react';
import Carta from './Carta';
import '../Table.css';

export default class Table extends Component {
    render() {
        return (
            <div className="table">
                {
                    this.props.shuffleCards
                    .map((carta,index) => {
                        const estaSiendoComparada = this.props.couple.indexOf(carta) > -1 ;
                        return <Carta 
                            key = {index}
                            art = {carta.art}
                            estaSiendoComparada = {estaSiendoComparada}
                            seleccionarCarta = {() => this.props.seleccionarCarta(carta)}
                            correcta = {carta.correcta }
                        />
                    })
                }
            </div>
        );
    }
}