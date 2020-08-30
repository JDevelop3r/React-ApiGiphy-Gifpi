import React from "react";
import { Link, Route } from "wouter";

import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Context from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <Context.Provider
      value={{
        name: "JDeveloper_",
        estudiante: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1 className="Gifpi">GIFPI</h1>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
