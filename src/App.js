import { Route, Routes } from "react-router-dom";
import "./App.css";
import Elements from "./pages/elements/Elements";
import Settings from "./pages/settings/Settings";
import EventLog from "./pages/eventLog/EventLog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Elements />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/events" element={<EventLog />} />
      </Routes>
    </div>
  );
}

export default App;
