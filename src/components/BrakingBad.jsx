import React from "react";
import { useState, useEffect } from "react";
import Head from "./Head";

const BrakingBad = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <div className=" grid-rows-{item.id} py-8 m-5 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              {/* <img src="" alt="Woman's Face"> */}

              <img
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
                src={item.img}
                alt=""
                srcset=""
              />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {item.name}
                  </p>
                  <p className="text-gray-500 font-medium">{item.nickname}</p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Message
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      //   <div class="py-8 m-5 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      //     {/* <img src="" alt="Woman's Face"> */}

      //     <img
      //       class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
      //       src="https://picsum.photos/seed/picsum/200/200"
      //       alt=""
      //       srcset=""
      //     />
      //     <div class="text-center space-y-2 sm:text-left">
      //       <div class="space-y-0.5">
      //         <p class="text-lg text-black font-semibold">Erin Lindford</p>
      //         <p class="text-gray-500 font-medium">Product Engineer</p>
      //       </div>
      //       <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
      //         Message
      //       </button>
      //     </div>
      //   </div>
      //   <ul>
      //     {items.map((item) => (
      //       <li key={item.id}>
      //         {item.name} {item.price}
      //       </li>
      //     ))}
      //   </ul>
    );
  }
};

export default BrakingBad;
