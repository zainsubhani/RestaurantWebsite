import React from "react";
import History from "./Components/History";
import Key from "./Components/Key";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Key />
      <History />
      <Menu />
    </div>
  );
};

export default App;
