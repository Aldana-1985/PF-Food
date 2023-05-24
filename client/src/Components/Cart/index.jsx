import React, { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FOOD } from '../../dataHardcodeo/constants';
import { CardDish } from '../CardDish';
import styles from '../../Pages/MenuClientes/styles.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

// const productList = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 15 },
//   { id: 3, name: 'Product 3', price: 20 },
// ];

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <Grid item key={product.id} xs={12} sm={6} md={4}>
//       <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//         <Typography variant="h6" component="div">
//           {product.name}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           Precio: ${product.price}
//         </Typography>
//         <Button onClick={() => addToCart(product)} variant="contained" color="primary">
//           Agregar
//         </Button>
//       </div>
//     </Grid>
//   );
// };

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [link, setLink] = useState();
  const [confirmed, setConfirmed] = useState(false)

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.cost, 0);
  };

  async function payment() {
    setConfirmed(true)
    const response = await axios.post("https://pf-backend-production-83a4.up.railway.app/payment", cartItems);
    setLink(response.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCart}>
        <Typography variant="h5" gutterBottom>
          Tu Carrito:
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Tu carrito esta vacio.</Typography>
        ) : (
          <>
            {/* Render the cart items */}
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id} disableGutters >
                  <ListItemText primary={item.name} secondary={`$${item.cost}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom>
              Total: ${getTotalPrice()}
            </Typography>
            {cartItems.length > 0 && (
              <><Link>
                <Button variant="contained" color="primary" onClick={payment}>
                  Confirmar
                </Button>
              </Link>
                <br></br>
                {
                  confirmed && <span className={styles.confirmed}>Pedido confirmado</span>
                }
                <br></br>
                {
                  confirmed &&
                  <Link to={link}>
                    <Button variant="contained" color="primary">
                      Pagar
                    </Button>
                  </Link>
                }
                <br></br>
              </>
            )}
          </>
        )}
      </div>

      <div className={styles.containerMenu}>
        <Typography variant="h5" gutterBottom>
          Carta:
        </Typography>
        <div className={styles.cardContainer}>
          {FOOD.map((food) => (
            <CardDish
              key={food.id}
              id={food.id}
              image={food.image[0]}
              name={food.name}
              tags={food.tags}
              cost={food.cost}
              description={food.description}
              className={styles.card}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
