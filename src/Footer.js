import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { blue, red, green, grey} from '@material-ui/core/colors';
import './App.scss';

const Footer = () => (
    <footer>
    <ul>
    <a href="https://www.facebook.com/" target="_blank"><FacebookIcon fontSize="large" style={{ color: blue[800] }}/></a>
    <a href="https://twitter.com/" target="_blank"><TwitterIcon fontSize="large" style={{ color: blue[500] }}/></a>
    <a href="https://www.youtube.com/" target="_blank"><YouTubeIcon fontSize="large" style={{ color: red[800] }}/></a> 
    <a href="mailto:elcorreoquequieres@correo.com?Subject=Aquí%20el%20asunto%20del%20mail"><MailIcon fontSize="large" style={{ color: grey[800]}}/></a>
    <a href="https://api.whatsapp.com/send?phone=5491161523456&text=Hola,%20qué%20tal?%20Me%20gustaría%20obtener%20mas%20información%20sobre%20sus%20productos" target="_blank"><WhatsAppIcon style={{ color: green[600]}} fontSize="large" /></a> 
    </ul>
    <p>Contact us:
        <br/>
        Tel: 549111234567
        <br/>
        Mail: winery@gmail.com
    </p>
    </footer> 
)

export default Footer;
