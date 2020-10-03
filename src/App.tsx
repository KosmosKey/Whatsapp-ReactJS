import React from "react";
import "./App.scss";
import Chat from "./Chat";
import SideBar from "./SideBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
