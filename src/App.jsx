import { useState } from "react";
import Head from "./Components/Body/Head.jsx";
import Body from "./Components/Body/BodyPage.jsx";
import TopBar from "./Components/Head/TopBar.jsx";
import "./index.css";



function App() {
  return (
    <div className="flex flex-col h-screen text-white bg-barre">
      <div className=" fixed left-0 top-0 h-full z-[999]">
        <TopBar />
      </div>

      <div className="flex-grow overflow-y-auto">
        <Body />
      </div>
    </div>
  );
}

export default App;
