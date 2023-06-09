import * as S from './styles'

import photoTemp from '../../../../assets/images/coffee/american.png'
import { ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  function handleIncreaseQuantity() {
    console.log('Increase quantity')
  }

  function handleDecreaseQuantity() {
    console.log('Decrease quantity')
  }

  function handleClickAddToCart() {
    console.log('handleClickAddToCart')
  }

  return (
    <S.Wrapper>
      <S.PhotoWrapper>
        <img src={photoTemp} alt="" />
      </S.PhotoWrapper>
      <S.LabelWrapper>
        <S.Label>Tradicional</S.Label>
        <S.Label>Gelado</S.Label>
      </S.LabelWrapper>
      <S.Content>
        <S.Title>Expresso Gelado</S.Title>
        <S.Description>
          Bebida preparada com café expresso e cubos de gelo
        </S.Description>
      </S.Content>
      <S.Footer>
        <S.PriceContainer>
          <small>R$</small>
          9,90
        </S.PriceContainer>
        <S.QuantityContainer>
          <S.QuantityButton onClick={handleDecreaseQuantity}>
            -
          </S.QuantityButton>
          <S.QuantityInput type="number" placeholder="0" />
          <S.QuantityButton onClick={handleIncreaseQuantity}>
            +
          </S.QuantityButton>
        </S.QuantityContainer>
        <S.CartButton
          variant="secondary"
          icon={<ShoppingCartSimple size={22} weight="fill" />}
          type="button"
          onClick={handleClickAddToCart}
        />
      </S.Footer>
    </S.Wrapper>
  )
}
