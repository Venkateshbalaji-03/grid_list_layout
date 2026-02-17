import { useState } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import "./App.css";

function App() {
  const [view, setView] = useState("grid");

  return (
    <>
      <Header view={view} setView={setView} />
      <Products view={view} />
    </>
  );
}

export default App;
