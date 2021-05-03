import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./NavBarElements";
import Logo from "./assets/images/logo.png";

import "./assets/css/navbar.css";

import Home from "./components/Home";
import FirstGenList from "./components/FirstGenList";
import SecondGenList from "./components/SecondGenList";
import ThirdGenList from "./components/ThirdGenList";
import Footer from "./components/Footer";
import SinglePokemon from "./components/singlePokemon";
import SearchBar from "./components/searchBar";
import FilteredPokemon from "./components/FilteredPokemon";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Nav>
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="logo"></img>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/1gen" className="navBarItem" activeStyle>
                1º Gen
              </NavLink>
              <NavLink to="/2gen" className="navBarItem" activeStyle>
                2º Gen
              </NavLink>
              <NavLink to="/3gen" className="navBarItem" activeStyle>
                3º Gen
              </NavLink>
              <SearchBar to="/pokemons/:value" />
            </NavMenu>
          </Nav>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/1gen" component={FirstGenList} />
          <Route path="/2gen" component={SecondGenList} />
          <Route path="/3gen" component={ThirdGenList} />
          <Route path="/pokemon/:index" component={SinglePokemon} />
          <Route path="/pokemons/:value" component={FilteredPokemon} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
