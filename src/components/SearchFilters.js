import React, { useState } from 'react';

const SearchFilters = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <section className="bg-gray-800 ">
      <div className="px-4 py-3 flex justify-between">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 px-2 py-2">
            <i className="material-icons h-6 w-6 fill-current text-gray-600">
              search
            </i>
          </div>
          <input
            className="bg-gray-900 text-white rounded-lg px-10 py-2 pr-3 focus:text-gray-900 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Search by keywords"
          />
        </div>
        <button
          type="button"
          onClick={() => setisOpen(!isOpen)}
          className={
            (isOpen ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600 shadow') +
            ' inline-flex  focus:outline-none focus:shadow-outline  rounded-lg  px-4'
          }
        >
          <i className="material-icons fill-current text-gray-500">
            filter_list
          </i>
          <span className="text-white font-medium ml-2">Filters</span>
        </button>
      </div>
      <form className={isOpen ? 'show' : 'hidden'}>
        <fieldset className="px-4 py-4 border-t border-gray-900">
          <div className="flex -mx-2">
            <label className="block w-1/2 px-2" htmlFor="bedrooms">
              <span className="text-sm font-semibold text-gray-500 mt-1">
                Bedrooms
              </span>
              <select
                className="form-select block w-full shadow"
                name="bedrooms"
                id="bedrooms"
              >
                <option value="2">4</option>
              </select>
            </label>
            <label className="block w-1/2 px-2" htmlFor="bathrooms">
              <span className="text-sm font-semibold text-gray-500 mt-1">
                Bathrooms
              </span>
              <select
                className="form-select block w-full shadow"
                name="bathrooms"
                id="bathrooms"
              >
                <option value="2">2</option>
              </select>
            </label>
          </div>
          <div className="mt-4">
            <label className="block w-full" htmlFor="priceRange">
              <span className="text-sm font-semibold text-gray-500 mt-1">
                Price Range
              </span>
              <select
                className="form-select block w-full shadow"
                name="priceRange"
                id="priceRange"
              >
                <option value="2">Up to $2,000 /wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <fieldset className="px-4 py-4 border-t border-gray-900">
          <span className="text-sm font-semibold text-gray-500 mt-1">
            Property Type
          </span>
          <label className="block" htmlFor="propertyType">
            <div>
              <input
                type="radio"
                className="form-radio bg-gray-900"
                name="propertyType"
                value="house"
              />
              <span className="ml-2 text-white">House</span>
            </div>
            <div>
              <input
                type="radio"
                className="form-radio bg-gray-900"
                name="propertyType"
                value="apartment"
              />
              <span className="ml-2 text-white">Apartment</span>
            </div>
            <div>
              <input
                type="radio"
                className="form-radio bg-gray-900"
                name="propertyType"
                value="loft"
              />
              <span className="ml-2 text-white">Loft</span>
            </div>
            <div>
              <input
                type="radio"
                className="form-radio bg-gray-900"
                name="propertyType"
                value="townhouse"
              />
              <span className="ml-2 text-white">Town House</span>
            </div>
          </label>
        </fieldset>
        <fieldset className="px-4 py-4 border-t border-gray-900">
          <span className="text-sm font-semibold text-gray-500 mt-1">
            Amenities
          </span>
          <label htmlFor="propertyType">
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="propertyType"
                value="balcony"
              />
              <span className="ml-2 text-white">Balcony</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="propertyType"
                value="airconditioning"
              />
              <span className="ml-2 text-white">Air Conditioning</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="pool"
              />
              <span className="ml-2 text-white">Pool</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="beach"
              />
              <span className="ml-2 text-white">Beach</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="petfriendly"
              />
              <span className="ml-2 text-white">Pet Friendly</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="kidfriendly"
              />
              <span className="ml-2 text-white">Kid Friendly</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox bg-gray-900"
                name="parking"
              />
              <span className="ml-2 text-white">Parking</span>
            </div>
          </label>
        </fieldset>
        <div className="bg-gray-900 px-4 py-4">
          <button className="bg-indigo-500 px-4 hover:bg-indigo-400 py-2 block w-full text-semibold text-white rounded-lg">
            Update Results
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchFilters;
