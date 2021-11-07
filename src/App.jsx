import React from "react";
import BrakingBad from "./components/BrakingBad";
import Head from "./components/Head";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" >
      <Head />
      <BrakingBad />
    </div>
  );
};

export default App;
