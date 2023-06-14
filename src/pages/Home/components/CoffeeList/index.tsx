import { useEffect, useState } from 'react'
import { Container } from '../../../../components/Container'
import { CoffeeCard } from '../Card'

import * as S from './styles'

import ProductsService from '../../../../services/ProductsService'
import CategoriesService from '../../../../services/CategoriesService'

export interface Product {
  id: string
  name: string
  description: string
  categoriesIds: string[]
  price: number
  image: string
}

interface Category {
  id: string
  name: string
  description: string
}

export function CoffeList() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const hasProducts = products.length > 0
  const hasCategories = categories.length > 0

  useEffect(() => {
    async function getProducts() {
      try {
        const productsList = await ProductsService.getProducts()
        setProducts(productsList.items)
      } catch (error) {
        console.log('Error getting products: ', error)
      }
    }

    getProducts()
  }, [categories])

  useEffect(() => {
    async function getCategories() {
      try {
        const categoriesList = await CategoriesService.getCategories()
        setCategories(categoriesList.items)
      } catch (error) {
        console.log('Error getting categories: ', error)
      }
    }

    getCategories()
  }, [])

  return (
    <Container>
      <S.Title>Nossos Cafés</S.Title>
      <S.CardsWrapper>
        {hasCategories &&
          products.map((product) => {
            const categoryNames = product.categoriesIds.map((categoryId) => {
              const category = categories.find((cat) => cat.id === categoryId)
              return category ? category.name : ''
            })

            return (
              <CoffeeCard
                key={product.id}
                data={product}
                categories={categoryNames}
              />
            )
          })}
      </S.CardsWrapper>
    </Container>
  )
}
