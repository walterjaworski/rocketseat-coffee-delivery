import * as S from './styles'

import coffeeArt from '../../../../assets/images/intro-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <S.Wrapper>
      <S.IntroContainer>
        <S.Content>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Subtitle>
          <S.ListWrapper>
            <S.ListItem>
              <span className="primaryDark">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </S.ListItem>
            <S.ListItem>
              <span className="baseText">
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </S.ListItem>
            <S.ListItem>
              <span className="primary">
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </S.ListItem>
            <S.ListItem>
              <span className="secondary">
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </S.ListItem>
          </S.ListWrapper>
        </S.Content>
        <img
          src={coffeeArt}
          alt="Arte com um copo térmico de café com alguns grãos de café flutuando"
        />
      </S.IntroContainer>
    </S.Wrapper>
  )
}
