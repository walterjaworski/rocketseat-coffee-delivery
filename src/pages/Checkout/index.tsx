import { useContext, useEffect, useState } from 'react'
import * as S from './styles'

import { Form } from './components/Form'
import { CoffeeCard } from '../../components/Card'

import { CartContext, Product } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const [totalValue, setTotalValue] = useState(0)
  const [totalValueWithDelivery, setTotalValueWithDelivery] = useState(0)
  const { disableConfirmButton, products, clearProducts } =
    useContext(CartContext)
  const navigate = useNavigate()

  function handleClickFinishOrder() {
    navigate('/confirmed')
    clearProducts()
  }

  function getTotalValue(products: Product[]): number {
    return products.reduce((total, product) => {
      const productValue = product.price * product.quantity
      return total + productValue
    }, 0)
  }

  function formatPrice(value: number): string {
    const formattedValue = value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    return `R$${formattedValue}`
  }

  useEffect(() => {
    function runTotalValue() {
      const total = getTotalValue(products)
      setTotalValue(total)
      setTotalValueWithDelivery(total + 3.5)
    }

    products.length > 0 && runTotalValue()
  }, [products])

  return (
    <S.CheckoutWrapper>
      <S.Wrapper>
        <S.OrderDetails>
          <S.Title>Complete seu pedido</S.Title>
          <Form />
        </S.OrderDetails>

        <S.OrderProducts>
          <S.Title>Cafés selecionados</S.Title>
          <S.CheckoutItemsWrapper>
            <S.CheckoutItemsList>
              {products.map((product) => (
                <CoffeeCard data={product} key={product.id} variant="small" />
              ))}
            </S.CheckoutItemsList>
            <S.CheckoutItemsTotals>
              <S.CheckoutItemsTotalsLine>
                <span>Total de itens</span>
                <span>{totalValue === 0 ? '--' : formatPrice(totalValue)}</span>
              </S.CheckoutItemsTotalsLine>
              <S.CheckoutItemsTotalsLine>
                <span>Entrega</span>
                <span>R$3,50</span>
              </S.CheckoutItemsTotalsLine>
              <S.CheckoutItemsTotalsLine>
                <strong>Total</strong>
                <strong>
                  {totalValueWithDelivery === 0
                    ? '--'
                    : formatPrice(totalValueWithDelivery)}
                </strong>
              </S.CheckoutItemsTotalsLine>
            </S.CheckoutItemsTotals>
            <S.CheckoutButton
              type="button"
              disabled={disableConfirmButton}
              onClick={handleClickFinishOrder}
            >
              Confirmar pedido
            </S.CheckoutButton>
          </S.CheckoutItemsWrapper>
        </S.OrderProducts>
      </S.Wrapper>
    </S.CheckoutWrapper>
  )
}
