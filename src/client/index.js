import 'regenerator-runtime/runtime';
import { generateWeatherJournal } from "./js/app";

import './styles/styles.scss';

(() => {
    // Add event listener on the click of "Generate" button.
    document.getElementById('generate').addEventListener('click', generateWeatherJournal);
    // Add a minimum and maximum dates for departure date picker.
    const datePickerElement = document.getElementById('datePicker');
    const timeNow = new Date();
    const todayDate = timeNow.toISOString().slice(0, 10);
    datePickerElement.setAttribute('min', todayDate);
    datePickerElement.setAttribute('value', todayDate);
    const maximumDate = new Date(timeNow.setDate(timeNow.getDate() + 16)).toISOString().slice(0, 10);
    datePickerElement.setAttribute('max', maximumDate);
})();

export {
    generateWeatherJournal,
}