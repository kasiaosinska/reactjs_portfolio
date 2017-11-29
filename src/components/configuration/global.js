import Matchbeta from '../images/matchbeta.png';
import Aegon from '../images/aegon.png';
import Pola from '../images/pola.png';
import Altiron from '../images/altiron.png';
import Game from '../images/Mario.png';

export class Config {
    static get Projects() {
        return [{
            name: 'Connect to NASA API',
            text: 'Prywatny projekt napisany w React. Responsywny landing page z sekcją podpiętą do API NASA. Codziennie wyświetla się inna treść - zdjęcie lub film wraz z opisem.',
            link: 'https://github.com/kasiaosinska/SolarSystem',
            img: Matchbeta,
        },
        {
            name: 'Matchbeta',
            text: 'Komercyjny projekt dla PWC. Responsywny landing page. Wykorzystane HTML, CSS i JavaScript',
            link: 'https://matchbeta.pl/register-landing',
            img: Matchbeta,
        },
        {
            name: 'Aegon',
            text: 'Komercyjny projekt. Responsywny landing page. Wykorzystane HTML, CSS i JavaScript oraz PHP',
            link: 'http://ajak.aegon.pl/?campaign=ubezpiecz_kredyt',
            img: Aegon,
        },
        {
            name: 'Altiron',
            text: 'Komercyjny projekt. Responsywny landing page. Dwie wersje językowe (i18n). Wykorzystane HTML, CSS i JavaScript',
            link: 'https://matchbeta.pl/register-landing',
            img: Altiron,
        },
        {
            name: 'Pola',
            text: 'Komercyjny projekt. Responsywny landing page. Wykorzystane HTML, CSS i JavaScript',
            link: 'http://pola.szmida.nazwa.pl/',
            img: Pola,
        },
        {
            name: 'Mario',
            text: 'Prywatny projekt. Gra polegająca na zebraniu jak największej ilości monet. Wykorzystane HTML, CSS i JavaScript',
            link: 'https://github.com/kasiaosinska/MarioGame',
            img: Game,
        },
        {
            name: 'Natura Cold Press',
            text: 'Komercyjny projekt. Responsywny landing page. Wykorzystane HTML, CSS i JavaScript',
            link: 'https://naturacoldpress.pl/abonament/',
            img: '',
        }]
    }
}