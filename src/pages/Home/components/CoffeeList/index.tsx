import { useEffect } from 'react'
import { Container } from '../../../../components/Container'
import { CoffeeCard } from '../Card'

import * as S from './styles'

import ProductsService from '../../../../services/ProductsService.js'

export function CoffeList() {
  useEffect(() => {
    async function getProducts() {
      try {
        const productsList = await ProductsService.getProducts()
        console.log(productsList.items)
      } catch (error) {
        console.log('Error getting products: ', error)
      }
    }

    getProducts()
  }, [])

  return (
    <Container>
      <S.Title>Nossos Cafés</S.Title>
      <S.CardsWrapper>
        <CoffeeCard />
      </S.CardsWrapper>
    </Container>
  )
}
