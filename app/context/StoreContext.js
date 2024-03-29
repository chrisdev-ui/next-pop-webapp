/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import { base64ToObject, objectToBase64, STORAGE_KEYS } from '@/utils/storage'
import Cookies from 'js-cookie'
import { createContext, useContext } from 'react'

export const StoreContext = createContext()

export const initialState = {
  cart: Cookies.get(STORAGE_KEYS.cart)
    ? base64ToObject(Cookies.get(STORAGE_KEYS.cart))
    : { cartItems: [], shippingInfo: {}, paymentMethod: '' }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems?.find(
        (item) => item.slug === newItem.slug
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      Cookies.set(
        STORAGE_KEYS.cart,
        objectToBase64({ ...state.cart, cartItems })
      )
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      )
      Cookies.set(
        STORAGE_KEYS.cart,
        objectToBase64({ ...state.cart, cartItems })
      )
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    case 'CART_RESET': {
      Cookies.remove(STORAGE_KEYS.cart)
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingInfo: {},
          paymentMethod: ''
        }
      }
    }

    case 'CART_CLEAR_ITEMS': {
      Cookies.set(
        STORAGE_KEYS.cart,
        objectToBase64({
          ...state.cart,
          cartItems: []
        })
      )
      return { ...state, cart: { ...state.cart, cartItems: [] } }
    }

    case 'SAVE_SHIPPING_ADDRESS': {
      Cookies.set(
        STORAGE_KEYS.cart,
        objectToBase64({
          ...state.cart,
          shippingInfo: { ...action.payload }
        })
      )
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingInfo: { ...state.cart.shippingInfo, ...action.payload }
        }
      }
    }

    case 'SAVE_PAYMENT_METHOD': {
      Cookies.set(
        STORAGE_KEYS.cart,
        objectToBase64({
          ...state.cart,
          paymentMethod: action.payload
        })
      )
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload
        }
      }
    }

    default: {
      return state
    }
  }
}

export const useStoreContext = () => useContext(StoreContext)
