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

function createReportSection(content){

    const reportContainer = document.getElementsByClassName('report-container')[0]
    if (reportContainer) reportContainer.remove();

    
    const container = document.createElement('div');
    container.className = 'report-container';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = (`<p> ${content['Location']} </p>`) + 
                     (`<p> ${content['ActualTemperature']} °C </p>`) +
                     (`<p> Feels like: ${content['FeelsTemperature']} °C </p>`) +
                     (`<p> Humidity: ${content['Humidity']} % </p>`) +
                     (`<p> Wind: ${content['Wind']} km/h </p>`);

    container.appendChild(card);

    return container;
}

export {createHeader, createSearchBox, createSearchButton, createSearchSection ,createReportSection};