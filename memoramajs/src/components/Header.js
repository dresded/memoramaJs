import React, { Component } from 'react';
import '../Header.css';
import 'bulma/css/bulma.css'

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="titulo">Memorama JS</div>
                <div class="control">
                    <button className="button is-primary" onClick = {this.props.reset }>
                        Reiniciar
                    </button>
                </div>
                <div className="titulo">
                    Intentos : {this.props.numeroIntentos}
                </div>


            </header>

        );
    }
}