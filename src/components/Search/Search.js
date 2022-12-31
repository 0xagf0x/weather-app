import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';


const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (_inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${_inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => {
      console.log('response', response)
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      }
    })
    .catch(err => console.error(err));
  }

  const handleOnChange = (_searchData) => {
    setSearch(_searchData);
    onSearchChange(_searchData);
  }

  return (
    <>
      <AsyncPaginate 
        placeholder="Search for City"
        debounceTimeout={600} //ms
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  )
}

export default Search;