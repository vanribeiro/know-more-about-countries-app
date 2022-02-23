import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Deitails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { lightModeTheme, darkModeTheme } from './components/UI/themes';
import { useState } from "react";
import { ThemeProvider } from "styled-components";

function App() {
  const [ theme, setTheme ] = useState(true);

  const toggleTheme = () => {
    theme ? setTheme(false) : setTheme(true);
    console.log(theme)
  };

  return (
    <>
    <ThemeProvider theme={theme ? lightModeTheme : darkModeTheme}>
    {/* <ThemeProvider theme={darkModeTheme}> */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home toggleTheme={toggleTheme}/>}></Route>
          <Route path=":id" element={<Details toggleTheme={toggleTheme}/>} />
          <Route path="*" element={<PageNotFound toggleTheme={toggleTheme}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
