import * as S from './styles'

import { CoffeList } from './components/CoffeeList'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <S.HomeWrapper>
      <Intro />
      <CoffeList />
    </S.HomeWrapper>
  )
}
