import shuffle from 'lodash.shuffle';
import ArtworkUrl from './artworkUrl';
const PORTADAS = 20;

export default () => {
    const artworkUrl = ArtworkUrl();
    let cartas = [];

    while (cartas.length < PORTADAS) {
        const index = Math.floor(Math.random() * artworkUrl.length );
        const carta = {
            art: artworkUrl.splice(index,1)[0],
            correcta: false
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
};