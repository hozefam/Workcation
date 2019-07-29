import React, { useState } from 'react';

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="px-4 py-3 antialiased items-center flex justify-between">
        <div className="flex items-center">
          <i className="material-icons pr-2 text-indigo-500">beach_access</i>
          <span className="text-white text-lg font-bold">Work</span>
          <span className="text-indigo-500 text-lg font-bold">cation</span>
        </div>
        <div className="flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="px-2"
          >
            <i className="h-6 w-6 fill-current text-gray-500 material-icons hover:text-white text-white">
              {!isOpen ? 'menu' : 'close'}
            </i>
          </button>
        </div>
      </div>
      <nav className={isOpen ? 'show' : 'hidden'}>
        <div className="px-2 py-3 border-b border-gray-800 pt-2">
          <a
            href="/list"
            className="font-semibold leading-tight text-white block hover:bg-gray-800 px-3 py-1 "
          >
            List your property
          </a>
          <a
            href="/trips"
            className="font-semibold leading-tight text-white block hover:bg-gray-800 px-3 py-1 mt-1"
          >
            Trips
          </a>
          <a
            href="/messages"
            className="font-semibold leading-tight text-white block hover:bg-gray-800 px-3 py-1 mt-1"
          >
            Messages
          </a>
        </div>
        <div className="px-4 py-5">
          <div className="flex items-center ">
            <img
              className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1288&q=80"
              alt=""
            />
            <span className="text-gray-200 ml-4 font-semibold">
              Hozefa Mangalorewala
            </span>
          </div>
          <div className="mt-5">
            <a
              href="/settings"
              className="text-gray-400 block hover:text-white"
            >
              Account settings
            </a>
            <a
              href="/support"
              className="mt-3 text-gray-400 block  hover:text-white"
            >
              Support
            </a>
            <a
              href="/signout"
              className="mt-3 text-gray-400 block  hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
