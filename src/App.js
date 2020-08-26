import React from 'react';
import { Link, Route } from 'wouter';

import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" src="/logo.png" alt="Giffy logo"/>
        </Link>
        <Route path='/' component={Home} />  
        <Route path='/search/:search' component={SearchResults} />
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  );
}

export default App;
