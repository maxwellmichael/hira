import './App.css';
import './scss/main.scss';
import Layout from './components/layout/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/routes';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebase,reactReduxFirebaseConfig as rrfConfig } from './firebase/config';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f8f6f4',
    },
    secondary: {
      main: '#f1eee9',
    },
    background: {
      default: '#f8f6f4',
    }
  },

  typography: {
    fontFamily: 'Josefin Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700, 
  }
}) 


function App(){


  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider config={rrfConfig} firebase={firebase} dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
        <Router>
          <ThemeProvider theme={theme}>
            <Layout>
              <div className="App">
                <Routes/>
              </div>
            </Layout>
          </ThemeProvider>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
