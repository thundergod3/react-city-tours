import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tourlist/TourList";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
