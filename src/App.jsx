import HomePage from "./routes/HomePage";
import TeamPage from "./routes/TeamPage";
import EventPage from "./routes/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
