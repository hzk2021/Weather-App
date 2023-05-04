import {createHeader, createSearchSection , createReportSection} from "./components.js";
import { getWeather } from "./weather.js";
import initBinds from "./binding.js";

const body = document.querySelector('body');

export default async function initPage(location = 'Singapore') {

    body.textContent = '';

    const header = createHeader();
    body.appendChild(header);

    const main = document.createElement('main');

    const searchSection = createSearchSection();

    // Default location
    const weatherData = await getWeather(location);
    const reportSection = createReportSection(weatherData);
    
    main.appendChild(searchSection)
    main.appendChild(reportSection);

    body.appendChild(main);

    initBinds();
}