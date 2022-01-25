import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// do these go in?
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
// or these
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
