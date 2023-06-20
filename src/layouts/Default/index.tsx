import { Outlet } from 'react-router-dom'

import * as S from './styles'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <Outlet />
    </>
  )
}
