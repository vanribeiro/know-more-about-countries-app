import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightModeTheme, darkModeTheme } from "./components/UI/themes";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Details from "./pages/Deitails";
import PageNotFound from "./pages/PageNotFound";
import Region from "./pages/Region";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => (theme ? setTheme(false) : setTheme(true));

  return (
    <>
      <ThemeProvider theme={theme ? lightModeTheme : darkModeTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home toggleTheme={toggleTheme} />}
              />
            <Route path="country/:id" element={<Details toggleTheme={toggleTheme} />} />
            <Route path="region/:id" element={<Region toggleTheme={toggleTheme} />} />
            <Route
            path="*"
            element={<PageNotFound toggleTheme={toggleTheme} />}
          />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
