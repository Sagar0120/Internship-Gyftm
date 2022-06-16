import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if(action.type === "REMOVE"){
    const exitingCartItemIndex = state.item.findIndex(
        (item) => item.id === action.id
    );
    const exitingItem = state.items[exitingCartItemIndex];
    const upadatedTotalAmount = state.totalAmount - exitingItem.price;
    let updatedItems
    if(exitingItem.amount === 1){
        updatedItems = state.item.filter(item => item.id !== action.id)
    }else{
        const updatedItem = {...exitingItem, amount:exitingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[exitingCartItemIndex] = updatedItem;
    }
    return{
        items : updatedItems,
        totalAmount : upadatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
