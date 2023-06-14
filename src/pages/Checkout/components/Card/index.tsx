import * as S from './styles'

import PhotoUrl from '../../../../assets/images/coffee/american.png'
import { Button } from '../../../../components/Button'
import { Trash } from 'phosphor-react'

export function Card() {
  function handleIncreaseQuantity() {
    console.log('Increase quantity')
  }

  function handleDecreaseQuantity() {
    console.log('Decrease quantity')
  }

  function handleRemoveProductFromCart() {
    console.log('Remove product from cart')
  }

  return (
    <S.Wrapper>
      <img src={PhotoUrl} alt="" width="64" />
      <S.Content>
        <S.Title>Expresso Tradicional</S.Title>
        <S.ActionsWrapper>
          <S.QuantityContainer>
            <S.QuantityButton onClick={handleDecreaseQuantity}>
              -
            </S.QuantityButton>
            <S.QuantityInput type="number" placeholder="0" />
            <S.QuantityButton onClick={handleIncreaseQuantity}>
              +
            </S.QuantityButton>
          </S.QuantityContainer>
          <S.RemoveButton
            icon={<Trash size={22} />}
            type="button"
            onClick={handleRemoveProductFromCart}
          >
            Remover
          </S.RemoveButton>
        </S.ActionsWrapper>
      </S.Content>
      <S.Price>R$ 9,90</S.Price>
    </S.Wrapper>
  )
}
