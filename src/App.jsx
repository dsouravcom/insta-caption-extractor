import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;