import { styled } from 'styled-components'
import { Button } from '../../../../components/Button'

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;
  max-width: 16rem;
  overflow: visible;
  position: relative;
`

export const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(0px - 1.5rem - 6px);
  margin-bottom: 0.75rem;
  position: absolute;
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 5rem;
`

export const Label = styled.span`
  background: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  padding: 4px 8px;
  font-size: ${({ theme }) => theme.fonts.roboto.size.tag};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 100px;
`

export const Content = styled.main`
  text-align: center;
  padding: 0 1.5rem;
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-size: ${({ theme }) => theme.fonts.baloo.size.small};
  font-weight: 700;
  line-height: 130%;
  margin-top: 1rem;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  color: ${({ theme }) => theme.colors.base.label};
  margin-top: 0.5rem;
`

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 1.5rem 1.25rem;
`

export const PriceContainer = styled.div`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-size: ${({ theme }) => theme.fonts.baloo.size.medium};
  font-weight: 800;

  small {
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    font-size: ${({ theme }) => theme.fonts.roboto.size.small};
    font-weight: 400;
    margin-right: 0.25rem;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.base.button};
  padding: 0.5rem 0;
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

export const CartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.white};
`
