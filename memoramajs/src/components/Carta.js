import React, {Component} from 'react';
import '../Carta.css';
import FlipCard from "react-flipcard";

export default class Carta extends Component {
    render() {
        return (
            <div className="carta" onClick ={this.props.seleccionarCarta} >
                <FlipCard
                    flipped = {this.props.estaSiendoComparada || this.props.correcta}
                    disabled =  {true}
                >
                    <div className="portada"></div>
                    <div className="art">
                    <img src={` ${this.props.art} `} alt="art" className="img-responsive"/>
                    </div>
                </FlipCard>
            </div>
        );
    }
};