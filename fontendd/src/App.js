import React from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/post/:post" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
