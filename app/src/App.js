import GlobalStyle from "./components/GlobalStyle";
import Details from "./pages/Deitails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/details" element={<Details />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
