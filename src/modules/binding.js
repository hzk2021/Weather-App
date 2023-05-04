import initPage from "./main";

export default function init() {
    const locationInput = document.getElementById('search-area-name');
    const searchBtn = document.getElementById('search-button');

    searchBtn.removeEventListener('click', searchWeather);
    
    searchBtn.addEventListener('click', () => {
        searchWeather(locationInput.value);
    });
}

function searchWeather(location_name) {
    if (location_name == '') return alert('Please enter a location');

    initPage(location_name);
}
