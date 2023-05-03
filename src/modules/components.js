function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const appLogo = document.createElement('i');
    appLogo.className = 'fas fa-cloud-sun';
    header.appendChild(appLogo);

    const appName = 'Weather App';
    header.append(appName);

    return header;
}

function createSearchBox() {
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.id = 'search-area-name';
    searchBox.placeholder = 'Enter area name';

    return searchBox;
};

function createSearchButton() {
    const searchBtn = document.createElement('button');
    searchBtn.id = 'search-button';
    searchBtn.innerText = 'Search';

    return searchBtn;
}

function createSearchSection() {
    const container = document.createElement('div');
    container.className = 'search-container';

    const searchBox = createSearchBox();
    const searchBtn = createSearchButton();

    container.appendChild(searchBox);
    container.appendChild(searchBtn);

    return container;
}

function createCard(content) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = (`<p> ${content['Country']} </p>`) + 
                     (`<p> ${content['ActualTemperature']} °C </p>`) +
                     (`<p> Feels like: ${content['FeelsTemperature']} °C </p>`) +
                     (`<p> Humidity: ${content['Humidity']} % </p>`) +
                     (`<p> Wind: ${content['Wind']} km/h </p>`);

    return card;

}

function createReportSection(content){
    const container = document.createElement('div');
    container.className = 'report-container';

    const card = createCard(content);
    container.appendChild(card);

    return container;
}

function createContentArea(weatherData) {
    const content = document.createElement('main');

    const searchSection = createSearchSection();
    content.appendChild(searchSection);


    // change to weather data
    const reportSection = createReportSection({
        'Country': 'Singapore',
        'ActualTemperature': '29.53',
        'FeelsTemperature': '35.28',
        'Humidity': '76',
        'Wind': '3.6'
    });
    content.appendChild(reportSection);

    return content;
}

export {createHeader, createContentArea};