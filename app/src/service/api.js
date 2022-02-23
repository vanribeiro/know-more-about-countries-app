const urlBase = `https://restcountries.com/v3.1`;

const countryDictionary = {};

const populateDictionary = async () => {
    await fetch(`${urlBase}/all?fields=cca3,name`)
        .then((response) => response.json())
        .then((info) => {
            info.forEach(element => {
                countryDictionary[element.cca3] = element.name.official;
            })
        });
}

populateDictionary();  

export {
    urlBase,
    countryDictionary
}