import React from "react";
import "./App.css";
import DashboardContainer from "./components/dashboardContainer/DashboardContainer";
import SearchContainer from "./components/searchContainer/SearchContainer";

const App = () => {
  return (
    <div className="app">
      <SearchContainer />
      <DashboardContainer />
    </div>
  );
};

export default App;
