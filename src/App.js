import "./App.css";
import Home from "./home/home";
import Career from "./screens/Career";
import About from "./screens/About/about";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AboutMe from "./screens/About-me/about-me";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/career" exact component={Career} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/resume" exact component={About} />
          <Redirect to={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

// "react": "17.0.1",
// "react-dom": "17.0.1",
// "react-markdown": "^6.0.1",
// "react-redux": "^7.2.3",
// "react-reveal": "^1.2.2",
// "react-router": "^5.2.0",
// "react-router-dom": "^5.2.0",
// "react-scripts": "4.0.1",
export default App;
