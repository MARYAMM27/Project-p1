import { useState, useEffect } from 'react';
import {
  collection, getDocs, doc, updateDoc,
} from 'firebase/firestore';
import { db } from './firebase'; // Import your Firestore instance
import '../Styles/GroceryStore.css';

const GroceryStore = () => {
  const [cart, setCart] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [outOfStock, setOutOfStock] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const groceryCollection = collection(db, 'GroceryStore');
      const grocerySnapshot = await getDocs(groceryCollection);
      const groceryList = grocerySnapshot.docs.map((doc) => ({
        id: doc.id,
        Name: doc.data().Name,
        Price: doc.data()['Price '] || 0,
        Quantity: doc.data().Quantity || 0,
      }));

      setItems(groceryList);
      setLoading(false);
    };

    fetchItems();
  }, []);

  const handleAddToCart = async (item) => {
    const newQuantity = (cart[item.id]?.quantity || 0) + 1;

    if (newQuantity > item.Quantity) {
      setErrorMessage('Out of stock');
      return;
    }

    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: { ...item, quantity: newQuantity },
    }));

    // Update Firestore to decrease quantity
    const itemDocRef = doc(db, 'GroceryStore', item.id);
    await updateDoc(itemDocRef, { Quantity: item.Quantity - 1 });

    // Update local items state
    setItems((prevItems) => prevItems.map((prevItem) => (prevItem.id === item.id
      ? { ...prevItem, Quantity: prevItem.Quantity - 1 }
      : prevItem)));

    if (newQuantity >= item.Quantity) {
      setOutOfStock((prev) => ({ ...prev, [item.id]: true }));
    }

    setErrorMessage(''); // Clear error message if the item is successfully added
  };

  const handleRemoveFromCart = async (item) => {
    if (!cart[item.id]) return;

    const newQuantity = cart[item.id].quantity - 1;

    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (newQuantity <= 0) {
        delete updatedCart[item.id];
      } else {
        updatedCart[item.id].quantity = newQuantity;
      }

      return updatedCart;
    });

    // Update Firestore to increase quantity
    const itemDocRef = doc(db, 'GroceryStore', item.id);
    await updateDoc(itemDocRef, { Quantity: item.Quantity + 1 });

    // Update local items state
    setItems((prevItems) => prevItems.map((prevItem) => (prevItem.id === item.id
      ? { ...prevItem, Quantity: prevItem.Quantity + 1 }
      : prevItem)));

    // Reset out of stock status if applicable
    setOutOfStock((prev) => ({ ...prev, [item.id]: false }));
  };

  const calculateTotal = () => (
    Object.values(cart).reduce(
      (total, cartItem) => total + (cartItem.Price * cartItem.quantity || 0),
      0,
    )
  );

  return (
    <div className="grocery-store">
      <h1>Grocery Store</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="items-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <span>
                {item.Name}
                {' '}
                - $
                {item.Price}
              </span>
              <p>
                Available Quantity:
                {' '}
                {item.Quantity}
              </p>
              <button
                type="button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              {outOfStock[item.id] && <p className="out-of-stock">Out of Stock</p>}
            </div>
          ))}
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <section className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {Object.values(cart).map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.Name}
              {' '}
              - $
              {cartItem.Price}
              {' '}
              x
              {cartItem.quantity}
              <button
                type="button"
                onClick={() => handleRemoveFromCart(cartItem)}
              >
                −
              </button>
            </li>
          ))}
        </ul>
        <p>
          Total Price:
          {' '}
          <strong>
            $
            {calculateTotal()}
          </strong>
        </p>
      </section>
    </div>
  );
};

export default GroceryStore;
