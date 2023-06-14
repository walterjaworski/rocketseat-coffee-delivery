import * as S from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { Product } from '../CoffeeList'

interface CardProps {
  data: Product
  categories: string[]
}

export function CoffeeCard({ data, categories }: CardProps) {
  const formatedPrice = data.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

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
        <img src={`src/assets/images/coffee/${data.image}.png`} alt="" />
      </S.PhotoWrapper>
      <S.LabelWrapper>
        {categories.map((category: string) => (
          <S.Label key={category}>{category}</S.Label>
        ))}
      </S.LabelWrapper>
      <S.Content>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
      </S.Content>
      <S.Footer>
        <S.PriceContainer>
          <small>R$</small>
          {formatedPrice}
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
