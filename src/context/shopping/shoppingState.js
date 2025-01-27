import { useReducer } from "react";
import { shoppingReducer } from "./shoppingReducer";
import ShoppingContext from "../shopping/shoppingContext";

export const ShoppingState =(props) =>{
    const initialState = { basket: [], user:null }
    const [state, dispatch] = useReducer(shoppingReducer, initialState)

    const getBasketTotal = (basket) => {
      basket?.reducer((amount, item) => item.price + amount, 0)
    }
    const addToBasket = async (item) =>{
      dispatch({
        type: "ADD_TO_BASKET",
        payload: item,
      })
    }
    const setUser = (user) => {
      dispatch({
        type:"SET_USER",
        payload: user,
      })
    }
    return(
    <ShoppingContext.Provider
     value={{
        basket: state.basket,
        user: state.user, 
        getBasketTotal,
        addToBasket, 
        setUser
    }}>
        {props.children}
        </ShoppingContext.Provider>
    )
} 

