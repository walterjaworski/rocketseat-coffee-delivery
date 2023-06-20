import * as S from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeDeliveryLogo from '../../assets/images/logo.svg'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const navigate = useNavigate()
  const { products } = useContext(CartContext)

  function handleClickToChangeLocalization() {
    console.log('handleClickToChangeLocalization')
  }

  function handleClickRedirectToCheckout() {
    navigate('/checkout')
  }

  return (
    <S.Wrapper>
      <Link to="/">
        <S.LogoWrapper>
          <img src={coffeDeliveryLogo} alt="" />
        </S.LogoWrapper>
      </Link>
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
          label={products.length}
        />
      </S.ActionsWrapper>
    </S.Wrapper>
  )
}
