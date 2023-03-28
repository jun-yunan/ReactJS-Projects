import { useReducer, useRef, useMemo } from "react";

// 1. init state
const initState = {
  name: '',
  price: '',
  products: []
}

// 2. actions
const SET_NAME = 'set_name'
const SET_PRICE = 'set_price'
const SET_PRODUCTS = 'set_products'
const DELETE_PRODUCT = 'delete_product'

const setName = payload => {
  return {
    type: SET_NAME,
    payload
  }
}

const setPrice = payload => {
  return {
    type: SET_PRICE,
    payload
  }
}

const setProducts = payload => {
  return {
    type: SET_PRODUCTS,
    payload
  }
}

const deleteProduct = payload => {
  return {
    type: DELETE_PRODUCT,
    payload
  }
}

// 3. reducer
const reducer = (state, action) => {
  console.log('Action: ', action);
  console.log('prevState: ', state);
  let newState
  switch (action.type) {
    case SET_NAME:
      newState = {
        ...state,
        name: action.payload
      }
      break

    case SET_PRICE:
      newState = {
        ...state,
        price: action.payload
      }
      break

    case SET_PRODUCTS:
      newState = {
        ...state,
        products: [...state.products, action.payload]
      }
      break

    case DELETE_PRODUCT:
      const newProducts = [...state.products]
      newProducts.splice(action.payload, 1)

      newState = {
        ...state,
        products: newProducts
      }
      break
    default:
      throw new Error('Invalid action.')
  }
  console.log('new State: ', newState);
  return newState
}

// 4. dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  const { name, price, products } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(setProducts({name, price: Number(price)}))
    dispatch(setName(''))
    dispatch(setPrice(''))
    inputRef.current.focus()
  }

  const sum = useMemo(() => {
    const total = products.reduce((result, product) => {
      console.log('Tinh toan lai');
      return result + product.price
    }, 0)
    return total
  }, [products])

  return (
    <div>
      <input type="text" 
        ref={inputRef}
        value={name}
        placeholder="Enter name..."
        onChange={(event) => dispatch(setName(event.target.value))}
      />
      <br/>
      <input type="text" 
        value={price}
        placeholder="Enter price..."
        onChange={event => dispatch(setPrice(event.target.value))}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <h2>Total: {sum}</h2>
      <br/>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price} 
          <span onClick={() => dispatch(deleteProduct(index))}>&times;</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default App