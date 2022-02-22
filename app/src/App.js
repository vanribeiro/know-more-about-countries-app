import GlobalStyle from "./components/GlobalStyle";
import Details from "./pages/Deitails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path=":id" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
