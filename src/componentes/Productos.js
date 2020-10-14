import React from 'react';
import './componentes.scss';
import tileData from './tileData';

const Productos = () =>{
const Products = tileData.map((pro, i) => <div key={i}  id='productos2'> <h1>{pro.title}</h1> <br/> {pro.author}</div>)
return(
        <div className='contenido'>
        {Products}
        </div>
)
}

export default Productos