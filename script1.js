fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Iterate through the data and print the details of each country
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log("Country Name: " + name);
      console.log("Region: " + region);
      console.log("Sub-Region: " + subregion);
      console.log("Population: " + population);
      console.log("-----------"); // Separation for readability
    });
  })
  .catch(error => console.error("Error fetching data: ", error));
