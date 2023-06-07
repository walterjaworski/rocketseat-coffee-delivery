/* eslint-disable prettier/prettier */
import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  variant?:
  | 'primary'
  | 'primaryLight'
  | 'secondary'
  | 'secondaryLight'
  | 'default'
}

export function Button({
  children,
  icon,
  variant = 'default',
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonContainer className={variant} {...rest}>
      {!!icon && icon}
      {children}
    </S.ButtonContainer>
  )
}
