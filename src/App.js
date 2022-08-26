import React from "react";
import Chef from "./Components/Chef";
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
      <Chef />
    </div>
  );
};

export default App;
