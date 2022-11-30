import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Theme";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import Skills from "./components/MySkillsPage";
import Blog from "./components/BlogPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/skills" component={Skills} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
