import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
import AppBar from '@material-ui/core/AppBar';
import { CssBaseline} from '@material-ui/core';
import useStyles from './Style/Style';
import './App.css'
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.container}>
        <CssBaseline />
        <Router>
          <AppBar position="relative" className={classes.appBar}>
            <div className={classes.navLink}>
             <Link to="/" className={classes.link}>Home</Link>
             <Link to="/about" className={classes.link}>About</Link>
             <Link to="/" className={classes.link}>Posts</Link>
            </div>
          </AppBar>
          <div className={classes.switch}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/post/:id">
                <PostDetail />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
