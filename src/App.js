import { Route, Routes } from "react-router-dom";
import "./App.css";
import Elements from "./pages/elements/Elements";
import Settings from "./pages/settings/Settings";
import EventLog from "./pages/eventLog/EventLog";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return (
      <div className="App">
        <Login setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Elements />} />
        <Route path="/settings/:id/:access/:key" element={<Settings />} />
        <Route path="/events" element={<EventLog />} />
      </Routes>
    </div>
  );
}

export default App;
