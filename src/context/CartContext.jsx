import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const itemExists = cart.find(item => item.id === product.id);

    if (itemExists) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });

      setCart(updatedCart);

    } else {
      const newProduct = {
        ...product,
        quantity: 1
      };

      setCart([...cart, newProduct]);
    }
  }


  function removeFromCart(id) {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  }


  function increaseQuantity(id) {

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });

    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setCart(filteredCart);
  }

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  // Tax (10%)
  const taxRate = 0.10;
  const tax = subtotal * taxRate;


  const total = subtotal + tax;


  let totalItems = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
  });


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        subtotal,
        tax,
        total,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
