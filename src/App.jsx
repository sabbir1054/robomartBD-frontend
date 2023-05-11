import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavigationBar from "./Shared/NavigationBars/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
