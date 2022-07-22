import React, { useContext } from 'react';
import { Shop } from '../context/ShopProvider';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import ordenGenerada from '../utils/generarOrden';
import guardarOrden from '../utils/guardaOrden';

function Cart() {
  
  const {cart, deletItem} = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada("Bruno", "Av. Siempre Viva 745", cart, 4500);
    guardarOrden(cart, orden)
  }


  return (
    <>
    {cart.length === 0 ?
      <div className='mensaje-carrito-vacio'>
        <h3>No hay productos en el carrito!</h3>
        <Link to='/'>Ir al inicio</Link>
      </div>
      :
      <div className='container-ci'>
        {cart.map(producto => 
          <div className='cartitem-container' key={producto.id}>
            <div className='cartitem-detail'>
              <h3>Producto: {producto.title}</h3>
              <h4>Cantidad: {producto.quantity}</h4>
              <h4>Precio: ${producto.price}</h4>
              <h4>SubTotal: ${producto.quantity * producto.price}</h4>
              <button className='buton-delete' onClick={() => deletItem(producto.id)}>Eliminar producto</button>
            </div>
            <img className='img-detail-cart' src={producto.image} alt="imagen de la compra" />
          </div>)}
          <button className='buton-confirm' onClick={confirmarOrden}>CONFIRMAR ORDEN</button>
      </div>
    }
    </>
  );
}

export default Cart;