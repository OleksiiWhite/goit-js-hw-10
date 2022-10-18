export function createFullMarkup(data) {
  const { capital, population, languages, flags, name } = data[0];
  const languageString = Object.values(languages);
  const capitalString = capital.join('');
  return `<div class="country">
      <img src="${flags.svg}" alt="${name.official}" width="60">
     <div class = 'country-body'>
      <h2 class="country__name">${name.official}</h2>
                    <p>Capital: </b> ${capitalString}</p>
                  <p>Population: </b> ${population}</p>
                  <p>Languages: </b> ${languageString}</p>           
      </div>
    </div>`;
}

export function createPrewiewMarkup(countries) {
  return countries
    .map(country => {
      return `<li class="country">
      <img src="${country.flags.svg}" alt="${country.name.official}">
        <p>${country.name.official}</p>
      </img>
    </li>`;
    })
    .join('');
}
