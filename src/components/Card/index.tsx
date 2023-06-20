/* eslint-disable prettier/prettier */
import * as S from './styles'

import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import { CartContext, Product } from '../../contexts/CartContext'

interface CardProps {
  data: Product
  categories?: string[]
  variant?: 'large' | 'small'
}

export function CoffeeCard({ data, categories, variant = 'large' }: CardProps) {
  const [quantity, setQuantity] = useState<number>(data.quantity || 0)
  const largeCard = variant === 'large'

  const {
    increaseQuantity,
    decreaseQuantity,
    addProduct,
    removeProduct,
    products,
  } = useContext(CartContext)

  const formatedPrice = data.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  function handleIncreaseQuantity() {
    const haveProduct = products.filter((product) => product.id === data.id)
    haveProduct.length > 0 ? increaseQuantity(data.id) : handleClickAddToCart()
  }

  function handleDecreaseQuantity() {
    const haveProduct = products.filter((product) => product.id === data.id)
    console.log('haveProduct[0].quantity', haveProduct[0].quantity)
    haveProduct[0].quantity === 1
      ? handleClickToRemove()
      : decreaseQuantity(data.id)
  }

  function handleClickAddToCart() {
    const productToAdd = { ...data, quantity: 1 }
    addProduct(productToAdd)
  }

  function handleClickToRemove() {
    removeProduct(data.id)
  }

  useEffect(() => {
    function setQuantityWhenProductExists() {
      const hasProduct = products.filter((product) => product.id === data.id)
      if (hasProduct.length > 0) {
        setQuantity(hasProduct[0].quantity)
      } else {
        setQuantity(0)
      }
    }
    setQuantityWhenProductExists()
  }, [data, products, quantity])

  return (
    <S.Wrapper variant={variant}>
      <S.PhotoWrapper variant={variant}>
        <img src={`src/assets/images/coffee/${data.image}.png`} alt="" />
      </S.PhotoWrapper>
      {largeCard && (
        <S.LabelWrapper>
          {categories?.map((category: string) => (
            <S.Label key={category}>{category}</S.Label>
          ))}
        </S.LabelWrapper>
      )}
      <S.Content>
        <S.Title variant={variant}>{data.name}</S.Title>
        {largeCard && <S.Description>{data.description}</S.Description>}
      </S.Content>
      <S.Footer variant={variant}>
        {largeCard && (
          <S.PriceContainer variant="large">
            <small>R$</small>
            {formatedPrice}
          </S.PriceContainer>
        )}
        <S.QuantityContainer>
          <S.QuantityButton
            onClick={() => handleDecreaseQuantity()}
            disabled={quantity === 0}
            title={
              quantity === 0
                ? 'A quantidade do produto é igual a 0'
                : quantity === 1
                  ? 'Remover produto do carrinho'
                  : 'Diminuir quantidade'
            }
          >
            -
          </S.QuantityButton>
          <S.QuantityInput
            type="number"
            placeholder="0"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
          <S.QuantityButton
            onClick={() => handleIncreaseQuantity()}
            title="Aumentar quantidade"
          >
            +
          </S.QuantityButton>
        </S.QuantityContainer>
        {largeCard && (
          <S.CartButton
            variant="secondary"
            icon={<ShoppingCartSimple size={22} weight="fill" />}
            type="button"
            onClick={handleClickAddToCart}
            disabled={quantity !== 0}
            title={
              quantity === 0
                ? 'Adicionar ao carrinho'
                : 'Produto já existe no carrinho'
            }
          />
        )}
        {!largeCard && (
          <S.RemoveButton
            icon={<Trash size={22} />}
            type="button"
            onClick={handleClickToRemove}
          >
            Remover
          </S.RemoveButton>
        )}
      </S.Footer>
      {!largeCard && (
        <S.PriceContainer variant="small">
          <small>R$</small>
          {formatedPrice}
        </S.PriceContainer>
      )}
    </S.Wrapper>
  )
}
