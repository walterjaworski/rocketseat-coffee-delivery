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
  | 'default',
  label?: number
}

export function Button({
  children,
  icon,
  variant = 'default',
  label,
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonContainer className={variant} {...rest}>
      {!!label && <strong className='label'>{label}</strong>}
      {!!icon && icon}
      {children}
    </S.ButtonContainer>
  )
}
