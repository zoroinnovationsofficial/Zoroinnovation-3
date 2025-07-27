import { useState } from "react";

import "./App.css";
import VerifyIDPage from "./pages/VerifyIDPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <VerifyIDPage />
    </>
  );
}

export default App;
