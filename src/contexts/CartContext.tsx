/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  description: string
  categoriesIds: string[]
  price: number
  image: string
  quantity: number
}

export interface Delivery {
  cepfield: string
  streetfield: string
  complementfield?: string
  numberfield: string
  neighborhoodfield: string
  cityfield: string
  statefield: string
}

export interface CartContextType {
  products: Product[]
  delivery: Delivery
  paymentMethod: string
  disableConfirmButton: boolean
  setDisableConfirmButton: (disable: boolean) => void
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  setDeliveryAddress: (deliveryAddress: Delivery) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  clearProducts: () => void;
}

const initialDelivery: Delivery = {
  cepfield: '',
  streetfield: '',
  numberfield: '',
  neighborhoodfield: '',
  cityfield: '',
  statefield: '',
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
  setDeliveryAddress: () => { },
  setPaymentMethod: () => { },
  clearProducts: () => { },
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
  const [delivery, setDelivery] = useState<Delivery>(initialDelivery)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('money')

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

  const setDeliveryAddress = (deliveryAddress: Delivery) => {
    setDelivery(deliveryAddress)
  }

  const setPaymentMethod = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod)
  }

  const clearProducts = () => {
    setProducts([]);
  }

  const cartContextValue: CartContextType = {
    products,
    delivery,
    paymentMethod: selectedPaymentMethod,
    disableConfirmButton,
    setDisableConfirmButton,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    setDeliveryAddress,
    setPaymentMethod,
    clearProducts
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}
