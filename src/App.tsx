import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import AnimationPage from "./AnimationPage/AnimationPage";


function App() {
  
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/animation" element={<AnimationPage />} />
    </Routes>
  )
}

export default App;
