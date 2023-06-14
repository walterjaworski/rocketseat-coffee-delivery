import { ReactNode } from 'react'

import * as S from './styles'

interface CheckoutBoxProps {
  title: string
  subtitle: string
  icon: ReactNode
  iconColor: string
  children: ReactNode
}

export function CheckoutBox({
  title,
  subtitle,
  icon,
  iconColor,
  children,
}: CheckoutBoxProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.IconWrapper className={iconColor}>{icon}</S.IconWrapper>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.TextWrapper>
      </S.Header>
      {children}
    </S.Wrapper>
  )
}
