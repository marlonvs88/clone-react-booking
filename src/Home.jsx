import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Hotel from "./pages/hotel";
import List from "./pages/List";
import Homepage from "./pages/Homepage";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home;
