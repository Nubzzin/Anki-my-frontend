import { Route, Routes } from "react-router-dom";
import "./css/App.css";

import OutletPage from "./pages/OutletPage";
import NewDeckPage from "./pages/NewDeckPage";
import DeckPage from "./pages/DeckPage";
import SharedPage from "./pages/SharedPage";
import DashboardPage from "./pages/DashboardPage";
import DeckStudyPage from "./pages/DeckStudyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OutletPage />}>
        <Route index element={<DashboardPage />} />
        <Route path="deck/new" element={<NewDeckPage />} />
        <Route path="deck/:id" element={<DeckPage />} />
        <Route path="deck/:id/study" element={<DeckStudyPage />} />
        <Route path="deck/shared" element={<SharedPage />} />
      </Route>
    </Routes>
  );
}

export default App;
