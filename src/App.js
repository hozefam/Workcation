import React from 'react';
import './App.css';

import SiteHeader from './components/SiteHeader';
import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <SiteHeader />
      <SearchFilters />
      <main className="px-4 py-6 bg-gray-200">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div className="mt-6">
          <div>
            <div>
              <img
                className="rounded-lg shadow-md h-64"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80"
                alt="mediterranean villas"
              />
            </div>
            <div className="px-4 -mt-16 relative">
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                <div className="flex">
                  <span className="bg-teal-200 text-teal-800 font-semibold rounded-full px-2 py-1 leading-none inline-block uppercase tracking-wide text-xs">
                    Plus
                  </span>
                  <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    3 beds &bull; 2 baths
                  </div>
                </div>
                <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                  Modern home in City center
                </h4>
                <div className="mt-1">
                  <span className="text-gray-900">$1,400</span>
                  <span className="ml-1 text-sm text-gray-600">/wk</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <i className="material-icons text-teal-500 fill-content mr-1 h-4 w-4">
                    star_rate
                  </i>
                  <i className="material-icons text-teal-500 fill-content mr-1 h-4 w-4">
                    star_rate
                  </i>
                  <i className="material-icons text-teal-500 fill-content mr-1 h-4 w-4">
                    star_rate
                  </i>
                  <i className="material-icons text-teal-500 fill-content mr-1 h-4 w-4">
                    star_rate
                  </i>
                  <i className="material-icons text-teal-500 fill-content mr-1 h-4 w-4">
                    star_rate
                  </i>
                  <span className="ml-3 mt-2">34 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
