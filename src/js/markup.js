function createPrewiewMarkup(item) {
  return `
                
                    <li class = 'country'>
                        <img src = '${item.flags.svg}' />
                        <p>${item.name}</p>
                    </li>
                
                `;
}

function createCountryInfoMurkup(item) {
  return `
                
                    <div class = 'country'>
                    
                        <img src = '${item.flags.svg}' />
    
                        <div class = 'country-body'>
                        
                            <h3>${item.name}</h3>
                            <p><b>Region: </b> ${item.region}</p>
                            <p><b>Capital: </b> ${item.capital}</p>
                            <p><b>Population: </b> ${item.population.toLocaleString()}</p>
                            <p><b>Languages: </b> ${item.languages[0].name}</p>
                        </div>
    
                    </div>
                
                `;
}

export { createPrewiewMarkup, createCountryInfoMurkup };
