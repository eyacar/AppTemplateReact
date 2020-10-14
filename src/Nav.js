import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.scss';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './componentes/Home'
import Contact from './componentes/Contact'
import TitlebarGridList from './componentes/Product'
import Productos from './componentes/Productos'
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Price from './componentes/Price';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.svg';

const theme = createMuiTheme({
    palette: {
    primary: green,
    //type:'dark'
    }
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Nav = () =>{
const classes = useStyles();
const [navegacion, Navegando] = useState(false);
function Click(){
if (navegacion === false){Navegando(true);console.log('HOLA')}
else {Navegando(false)}
}
return(
    <ThemeProvider theme={theme}>
   {/* <Paper> */}
   <div className={classes.root} id='appbar'>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={Click}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo"/>
             <span>Winery</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    <Router> 
    <nav className={navegacion === false? "clickeado":null}>
    <ul>
    <li><Link to='/'><Button color="primary">Home</Button></Link></li>
    <li id='p1'><Link to='/Products'><Button color="primary">Products</Button></Link></li>
    <li id='p2'><Link to='/Productos'><Button color="primary">Products</Button></Link></li>
    <li><Link to='/Price'><Button color="primary">Price</Button></Link></li>
    <li><Link to='/Contact'><Button color="primary">Contact</Button></Link></li>    
    </ul>
    </nav>

 <Switch>
     <Route path='/' exact component={Home}><Home/></Route>
     <Route path='/Products' exact component={TitlebarGridList}><TitlebarGridList/></Route>
     <Route path='/Productos' exact component={Productos}><Productos/></Route>
     <Route path='/Price' exact component={Price}><Price/></Route>
     <Route exact path='/Contact' component={Contact}><Contact/></Route>
</Switch>
  </Router>
   
  {/* </Paper> */}
    </ThemeProvider>
)
}

export default Nav; 
