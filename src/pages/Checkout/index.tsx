import * as S from './styles'

import { Card } from './components/Card'
import { Form } from './components/Form'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { disableConfirmButton } = useContext(CartContext)

  function handleClickFinishOrder() {
    console.log('finish order')
  }

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
              <Card />
              <Card />
              <Card />
            </S.CheckoutItemsList>
            <S.CheckoutItemsTotals>
              <S.CheckoutItemsTotalsLine>
                <span>Total de itens</span> <span>R$ 29,70</span>
              </S.CheckoutItemsTotalsLine>
              <S.CheckoutItemsTotalsLine>
                <span>Entrega</span> <span>R$ 3,50</span>
              </S.CheckoutItemsTotalsLine>
              <S.CheckoutItemsTotalsLine>
                <strong>Total</strong> <strong>R$ 33,20</strong>
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
