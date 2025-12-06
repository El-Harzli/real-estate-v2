import Header from "@components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
