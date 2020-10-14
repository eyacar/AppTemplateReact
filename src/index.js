import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer'
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
  //type:'dark'
  },
  
});


const App = () =>(
 <ThemeProvider theme={theme}>
  {/*<Paper>*/}
  <div id="container">
  <Header />
  
  <Nav />
  </div>
  <Footer/>
  {/*</Paper>*/}
  </ThemeProvider>
) 

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();