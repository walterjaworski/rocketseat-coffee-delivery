import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import * as S from './styles'
import { Card } from './components/Card'
import { CheckoutBox } from './components/CheckoutBox'
import { PaymentMethod } from './components/PaymentMethod'

export function Checkout() {
  function handleClickFinishOrder() {
    console.log('finish order')
  }

  return (
    <S.CheckoutWrapper>
      <S.Wrapper>
        <div>
          <S.Title>Complete seu pedido</S.Title>

          <CheckoutBox
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber o seu pedido."
            icon={<MapPinLine size={22} />}
            iconColor="primaryDark"
          >
            form
          </CheckoutBox>

          <CheckoutBox
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja
            pagar."
            icon={<CurrencyDollar size={22} />}
            iconColor="secondaryDark"
          >
            <PaymentMethod />
          </CheckoutBox>
        </div>

        <div>
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
            <S.CheckoutButton type="button" onClick={handleClickFinishOrder}>
              Confirmar pedido
            </S.CheckoutButton>
          </S.CheckoutItemsWrapper>
        </div>
      </S.Wrapper>
    </S.CheckoutWrapper>
  )
}
