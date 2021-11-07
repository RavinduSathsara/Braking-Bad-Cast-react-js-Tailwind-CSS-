import React from "react";

const Head = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
        <div className="bg-white dark:bg-gray-80">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Braking Bad Cast !</span>
              <span className="block text-indigo-600">
                Wanna cook with walter white
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Watch now
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
