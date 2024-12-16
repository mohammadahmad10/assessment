import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Data from "./pages/Data";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-10 px-4 md:px-8">
      <h1 className="text-blue font-bold text-center text-5xl max-md:text-3xl">
        Full Stack Assessment
      </h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Data />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}
