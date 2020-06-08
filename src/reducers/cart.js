import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    UPDATE_CART
} from '../constants/ActionTypes'
  
const initialState = {
    addedIds: [],
    quantityById: {},
    creditCard: '',
    shippingAddress: '',
    customer: 'Alex'
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (state.indexOf(action.productId) !== -1) {
          return state
        }
        return [ ...state, action.productId ]
      default:
        return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const { productId } = action
        return { ...state,
          [productId]: (state[productId] || 0) + 1
        }
      default:
        return state
    }
}

const creditCard = ( state = initialState.creditCard ) => {
  return state
}

const shippingAddress = ( state = initialState.shippingAddress ) => {
  return state
}

const customer = ( state = initialState.customer ) => {
  return state
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getCustomer = state => state.customer
export const getCreditCard = state => state.creditCard
export const getShippingAddress = state => state.shippingAddress
  
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
    return initialState
  case CHECKOUT_FAILURE:
    return action.cart
  case UPDATE_CART:
    return {
      addedIds: state.addedIds,
      quantityById: state.quantityById,
      customer: state.customer,
      creditCard: action.payload.newCreditCard,
      shippingAddress: action.payload.newShippingAddress
    }
  default:
    return {
      addedIds: addedIds(state.addedIds, action),
      quantityById: quantityById(state.quantityById, action),
      creditCard: creditCard(state.creditCard),
      shippingAddress: shippingAddress(state.shippingAddress),
      customer: customer(state.customer)
    }
  }
}

export default cart