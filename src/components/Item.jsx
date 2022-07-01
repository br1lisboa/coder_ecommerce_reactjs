import React from 'react';
import ItemCount from './ItemCount';
import './styles/Item.css';


function Item ( {name, imagen, categoria, precio } ) {
  

  return (
    <div className='product-card-container'>
      <div className="product-car">
        <h3> {name} </h3>
        <img src={imagen} alt="" className="img-car" />
        <p>Categoria: {categoria} </p>
        <p>Precio {precio} </p>
      </div>
      <ItemCount />
    </div >
  ); 
}

export default Item;
