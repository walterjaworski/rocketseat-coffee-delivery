/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useContext, useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: number
}

interface Delivery {
  cep: string
  address: string
  complement?: string
  number: string
  neighborhood: string
  city: string
  state: string
}

interface CartContextType {
  products: Product[]
  delivery: Delivery
  paymentMethod: string
  disableConfirmButton: boolean
  setDisableConfirmButton: (disable: boolean) => void
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

const initialDelivery: Delivery = {
  cep: '',
  address: '',
  number: '',
  neighborhood: '',
  city: '',
  state: '',
}

const initialCartContextValue: CartContextType = {
  products: [],
  delivery: initialDelivery,
  paymentMethod: '',
  disableConfirmButton: true,
  setDisableConfirmButton: () => { },
  addProduct: () => { },
  removeProduct: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
}

export const CartContext = createContext<CartContextType>(
  initialCartContextValue,
)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [disableConfirmButton, setDisableConfirmButton] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  const delivery: Delivery = {
    cep: '',
    address: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  }

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product])
  }

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    )
  }

  const increaseQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    )
  }

  const decreaseQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    )
  }

  const cartContextValue: CartContextType = {
    products,
    delivery,
    paymentMethod: '',
    disableConfirmButton,
    setDisableConfirmButton,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  }

  const cartContext = useContext(CartContext)
  console.log('products in context', cartContext.products)

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}
