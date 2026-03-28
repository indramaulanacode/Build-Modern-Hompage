import React from 'react'
import optionData from '../../data/optionData'

const Options = () => {
  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold">
          Key Features of Our Business Solutions
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {optionData.map((items, i) => (
          
          <div
            key={i}
            className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <img src={items.Icon} className="w-16 mb-4" alt="image" />

            <h5 className="mb-2 text-xl font-semibold text-gray-900">
              {items.title}
            </h5>

            <p className="mb-4 text-gray-500 text-sm">
              {items.deskription}
            </p>

            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline text-sm"
            >
              Read More
              <svg
                className="w-3 h-3 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

        ))}

      </div>

    </section>
  );
};

export default Options;
