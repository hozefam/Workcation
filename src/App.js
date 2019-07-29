import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <header className="bg-gray-900 px-4 py-3 antialiased items-center flex justify-between">
        <div className="flex items-center">
          <i className="material-icons pr-2 text-indigo-500">beach_access</i>
          <span className="text-white text-lg font-bold">Work</span>
          <span className="text-indigo-500 text-lg font-bold">cation</span>
        </div>
        <div className="flex">
          <button>
            <i className="h-6 w-6 fill-current text-gray-500 material-icons text-white">
              menu
            </i>
          </button>
        </div>
      </header>
      <section className="bg-gray-800 px-4 py-3 flex justify-between">
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
        <button className="inline-flex hover:bg-gray-600 focus:outline-none focus:shadow-outline bg-gray-700 rounded-lg shadow px-4">
          <i className="material-icons fill-current text-gray-500">
            filter_list
          </i>
          <span className="text-white font-medium ml-2">Filters</span>
        </button>
      </section>
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
