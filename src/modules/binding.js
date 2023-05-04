import initPage from "./main";

export default function init() {
    const locationInput = document.getElementById('search-area-name');
    const searchBtn = document.getElementById('search-button');
    const switchToggle = document.getElementById('switch-toggle');

    searchBtn.removeEventListener('click', searchWeather);
    switchToggle.removeEventListener('click', changeTheme);
    
    searchBtn.addEventListener('click', () => {
        searchWeather(locationInput.value);
    });

    switchToggle.addEventListener('click', changeTheme);
}

function searchWeather(location_name) {
    if (location_name == '') return alert('Please enter a location');

    initPage(location_name);
}

function changeTheme(){
    document.querySelector('body').classList.toggle('bright-mode');
}