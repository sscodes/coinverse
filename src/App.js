import { Route, Routes } from "react-router-dom";
import "./App.css";
import Airdrop from "./Containers/Airdrop/Airdrop";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/airdrop" exact element={<Airdrop />} />
      </Routes>
    </div>
  );
}

export default App;
