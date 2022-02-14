import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
