import * as S from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeDeliveryLogo from '../../assets/images/logo.svg'
import { Button } from '../Button'

export function Header() {
  function handleClickToChangeLocalization() {
    console.log('handleClickToChangeLocalization')
  }

  function handleClickRedirectToCheckout() {
    console.log('handleClickRedirectToCheckout')
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <img src={coffeDeliveryLogo} alt="" />
      </S.LogoWrapper>
      <S.ActionsWrapper>
        <Button
          variant="secondaryLight"
          icon={<MapPin size={22} weight="fill" />}
          type="button"
          onClick={handleClickToChangeLocalization}
        >
          Curitiba, PR
        </Button>
        <Button
          variant="primaryLight"
          icon={<ShoppingCart size={22} weight="fill" />}
          type="button"
          onClick={handleClickRedirectToCheckout}
        />
      </S.ActionsWrapper>
    </S.Wrapper>
  )
}
