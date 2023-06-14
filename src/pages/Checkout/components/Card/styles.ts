import { styled } from 'styled-components'

import { Button } from '../../../../components/Button'

export const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
`

export const Content = styled.div``

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  font-weight: 400;
`

export const ActionsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled(Button)`
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.roboto.size.xsmall};

  svg {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
`

export const Price = styled.h4`
  font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  margin-left: auto;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.base.button};
  padding: 0.2rem 0;
  border-radius: 6px;
`

export const QuantityButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary.main};
  font-size: ${({ theme }) => theme.fonts.roboto.size.large};
  padding: 2px;
  width: 24px;
`

export const QuantityInput = styled.input`
  background: transparent;
  border: none;
  width: 1.563rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    /* margin: 0; */
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary.dark};
  }
`
