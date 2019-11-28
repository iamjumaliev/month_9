var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');

const link = `https://restcountries.eu/rest/v2/alpha/${param}?fields=name;alpha3Code;population;region;subregion;`



function renderData(data) {
    let dataLenght = Object.keys(data).length
    const container = $('.container');
    let countryDiv = $(document.createElement('div'));
    countryDiv.addClass(`name`);
    countryDiv.append(`COUNTRY: ` + data.name);
    let countryDiv1 = $(document.createElement('div'));
    countryDiv.addClass(`alpha3Code`);
    countryDiv1.append(`alpha3Code: ` + data.alpha3Code);
    let countryDiv2 = $(document.createElement('div'));
    countryDiv.addClass(`population`);
    countryDiv2.append(`population: ` + data.population);
    let countryDiv3 = $(document.createElement('div'));
    countryDiv.addClass(`region`);
    countryDiv3.append(`region: ` + data.region);
    let countryDiv4 = $(document.createElement('div'));
    countryDiv.addClass(`subregion`);
    countryDiv4.append(`subregion: ` + data.subregion);
    container.append(countryDiv)
    container.append(countryDiv1)
    container.append(countryDiv2)
    container.append(countryDiv3)
    container.append(countryDiv4)
};



function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
};

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
};

function jqueryLoadIndex() {
    $.ajax({
        url: link,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
};

$(document).ready(function() {
    jqueryLoadIndex();
});