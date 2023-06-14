import { styled } from 'styled-components'

import { Container } from '../../components/Container'

export const ConfirmedWrapper = styled.main``

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;
  align-items: flex-end;
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

export const DeliveryData = styled.div``

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.baloo.size.large};
  line-height: 130%;
  color: ${({ theme }) => theme.colors.primary.dark};
`

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.roboto.size.large};
  color: ${({ theme }) => theme.colors.base.subtitle};
`

export const OrderWrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;
  padding: 2.5rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 6px 36px;
    background: ${({ theme }) => theme.gradients.border};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const OrderLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }
`

export const OrderIcon = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};

  &.primary {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  &.primaryDark {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &.secondary {
    background: ${({ theme }) => theme.colors.secondary.main};
  }

  &.baseText {
    background: ${({ theme }) => theme.colors.base.text};
  }
`

export const OrderText = styled.div`
  display: flex;
  flex-direction: column;
  size: ${({ theme }) => theme.fonts.roboto.size.medium};
`

export const OrderTextLine = styled.span``
