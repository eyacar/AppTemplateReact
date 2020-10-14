import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './componentes.scss';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(3),
      width: 200,
    },
  }));

const Contact = () => {
    const classes = useStyles();
    return(
    <div className='contenido'>
    <form>
    <h2>Contacto</h2>
    <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textField}/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" className={classes.textField}/>
    <br/>
    <TextField type='email' id="outlined-basic" label="Mail" variant="outlined" className={classes.textField}/>
    <br/>
    <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
    shrink: true,
    }}
    />
    <br/>
    <Button variant="contained" color="primary">Enviar</Button>
    </form>
    </div>
)
}
export default Contact;