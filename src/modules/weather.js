async function getWeather(location){
    const protocol = 'https://'
    const domain = 'api.weatherapi.com'
    const path = '/v1/current.json'
    const key = '35b1f886b9d44ed58cc93823230205' // Unsafe but it's fine in this case

    const weatherAPIURL = new URL(protocol + domain + path);


    weatherAPIURL.searchParams.append('key', key);
    weatherAPIURL.searchParams.append('q', location);

    const weatherResponse = await fetch(weatherAPIURL, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });

    const weatherJSON = await weatherResponse.json();

    const result = {
        'Location': weatherJSON.location.country,
        'ActualTemperature': weatherJSON.current.temp_c,
        'FeelsTemperature': weatherJSON.current.feelslike_c,
        'Humidity': weatherJSON.current.humidity,
        'Wind': weatherJSON.current.wind_kph
    }

    return result;
}

export {getWeather};