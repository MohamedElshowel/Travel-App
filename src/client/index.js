import 'regenerator-runtime/runtime';
import { generateWeatherJournal } from "./js/app";

import './styles/styles.scss';

// Add event listener on the click of "Generate" button.
document.getElementById('generate').addEventListener('click', generateWeatherJournal);

export {
    generateWeatherJournal,
}