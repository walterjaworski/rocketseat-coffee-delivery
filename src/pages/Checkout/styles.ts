import { styled } from 'styled-components'

import { Container } from '../../components/Container'
import { Button } from '../../components/Button'

export const CheckoutWrapper = styled.main``

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 28rem;
  grid-column-gap: 2rem;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-row-gap: 2rem;
  }

  img {
    max-width: 100%;
  }
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-size: ${({ theme }) => theme.fonts.baloo.size.xsmall};
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1rem;
`

export const CheckoutBox = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;

  & + & {
    margin-top: 0.75rem;
  }
`

export const CheckoutBoxHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const CheckoutBoxIcon = styled.span``

export const CheckoutBoxText = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutBoxTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  font-weight: 400;
  line-height: 130%;
`

export const CHeckoutBoxSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};
  line-height: 130%;
`

export const CheckoutBoxContent = styled.div`
  margin-top: 2rem;
`

export const CheckoutItemsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const CheckoutItemsList = styled.div`
  article:not(:first-child) {
    margin-top: 1.5rem;
  }
`

export const CheckoutItemsTotals = styled.div`
  margin-top: 1.5rem;
`

export const CheckoutItemsTotalsLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 0.75rem;
  }

  span {
    font-size: ${({ theme }) => theme.fonts.roboto.size.small};
  }

  strong {
    font-size: ${({ theme }) => theme.fonts.roboto.size.large};
  }
`

export const CheckoutButton = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-transform: uppercase;
  margin-top: 1.5rem;
  padding: 0.75rem;
`
