import * as S from './styles'

import DeliveryIllustration from '../../assets/images/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, CartContextType } from '../../contexts/CartContext'

interface PaymentMethodSelected {
  [key: string]: string
}

export function Confirmed() {
  const { delivery, paymentMethod } = useContext<CartContextType>(CartContext)

  const paymentMethodSelected: PaymentMethodSelected = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  }

  return (
    <S.ConfirmedWrapper>
      <S.Wrapper>
        <S.DeliveryData>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </S.Subtitle>
          <S.OrderWrapper>
            <S.OrderLine>
              <S.OrderIcon className="secondary">
                <MapPin size={22} weight="fill" />
              </S.OrderIcon>
              <S.OrderText>
                <S.OrderTextLine>
                  Entrega em{' '}
                  <strong>
                    {delivery.streetfield}, {delivery.numberfield}{' '}
                    {!!delivery.complementfield &&
                      `- ${delivery.complementfield}`}
                  </strong>
                </S.OrderTextLine>
                <S.OrderTextLine>
                  {delivery.neighborhoodfield} - {delivery.cityfield},{' '}
                  {delivery.statefield.toUpperCase()}
                </S.OrderTextLine>
              </S.OrderText>
            </S.OrderLine>
            <S.OrderLine>
              <S.OrderIcon className="primary">
                <Timer size={22} weight="fill" />
              </S.OrderIcon>
              <S.OrderText>
                <S.OrderTextLine>Previsão de entrega</S.OrderTextLine>
                <S.OrderTextLine>
                  <strong>20 min - 30 min</strong>
                </S.OrderTextLine>
              </S.OrderText>
            </S.OrderLine>
            <S.OrderLine>
              <S.OrderIcon className="primaryDark">
                <CurrencyDollar size={22} />
              </S.OrderIcon>
              <S.OrderText>
                <S.OrderTextLine>Pagamento na entrega</S.OrderTextLine>
                <S.OrderTextLine>
                  <strong>{paymentMethodSelected[paymentMethod]}</strong>
                </S.OrderTextLine>
              </S.OrderText>
            </S.OrderLine>
          </S.OrderWrapper>
        </S.DeliveryData>
        <img
          src={DeliveryIllustration}
          alt="Homem em cima de uma motocicleta com uma caixa na garupa, indo realizar uma entrega"
        />
      </S.Wrapper>
    </S.ConfirmedWrapper>
  )
}
