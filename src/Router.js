import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to="/industries" />
      </Route>
      <Route path="/:slug" exact component={Home} />
    </Router>
  );
}

export default App;
