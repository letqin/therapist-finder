import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@mui/material/Button';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import TherapistPage from './pages/therapistPage'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


/* const theme = createTheme({
  palette: {
    background: {
      default: '#636aa4',
      
    },
    

    primary: {
      light: '#71c9e9',
      main: '#636aa4',
      dark: '#314b98',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f99b35',
      main: '#e06c91',
      dark: '#58595b',
      contrastText: '#fff',
    },
  },
}); */

const theme = createTheme({
  typography:{
    h1: {
      fontSize:15
    },
    h2 :{
      
      fontSize: 7
    }
  },
  palette: {
    background: {
      default:'#636aa4'
    },
    text: {
      default: "white"
    },
    primary: {
      main: '#636aa4',
    },
  
  },
});


function App() {
  return (

    <ThemeProvider theme={theme} > 
    <CssBaseline />
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Button variant='outlined'>test</Button>
          {/* <Button variant="outlined" color="error">
        Sign In
    </Button> */}
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/therapistProfile">
              <Profile />
            </Route>
            <Route exact path="/profiles/:profileId">
              <Profile />
            </Route>
            <Route exact path="/therapistPage/:therapistId">
              <TherapistPage />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
