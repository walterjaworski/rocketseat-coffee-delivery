import { Warning } from 'phosphor-react'
import * as S from './styles'

export function Error() {
  return (
    <S.Wrapper>
      <Warning size={24} /> Ops! Aconteceu um erro, tente novamente mais tarde.
    </S.Wrapper>
  )
}
