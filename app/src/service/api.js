const urlBase = `https://restcountries.com/v3.1`;

const initGET = () => {
    const controller = new AbortController();

    return {
        method: 'GET',
        mode: 'cors',
        caches: 'default',
        signal: controller.signal
    }
}

const fetchListCountries = (url, setError, setInfo, setIsLoaded) => {
    fetch(url, initGET)
    .then((response) => response.json())
    .then(
      (info) => {
        setInfo(info);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
}

const fetchCountryDetails = async (
    id, setCountryInfo, 
    setError, setIsLoading
) => {

    const url = `${urlBase}/name/${id}?fullText=true`;

    await fetch(url, initGET)
        .then((response) => response.json())
        .then((info) => setCountryInfo(info),(error) => setError(error));

   setIsLoading(false);
}

const fetchCountriesBordersName = async (
    countriesBorderAcronomys, 
    setCountryBorderNames, 
    setError
) => {
    
    if (countriesBorderAcronomys !== undefined) {
      const url = `${urlBase}/alpha?codes=${
        countriesBorderAcronomys !== undefined
          ? countriesBorderAcronomys.join().toLowerCase()
          : countriesBorderAcronomys
      }`;

    await fetch(url, initGET)
        .then((response) => response.json())
        .then((info) => setCountryBorderNames(info), (error) => setError(error));
    }
};

export {
    urlBase,
    initGET,
    fetchListCountries,
    fetchCountryDetails,
    fetchCountriesBordersName
}