import { styled } from 'styled-components'

export const Wrapper = styled.form`
  p {
    font-size: ${({ theme }) => theme.fonts.roboto.size.xsmall};
    color: ${({ theme }) => theme.colors.warning.main};
    margin-top: 0.25rem;
  }
`

export const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    'cepfield . .'
    'streetfield streetfield streetfield'
    'numberfield complementfield complementfield'
    'neighborhoodfield cityfield statefield';
`

export const PaymentMethodWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.75rem;
`

export const InputGroup = styled.div`
  position: relative;

  &.cepfield {
    grid-area: cepfield;
  }

  &.streetfield {
    grid-area: streetfield;
  }

  &.numberfield {
    grid-area: numberfield;
  }

  &.complementfield {
    grid-area: complementfield;
  }

  &.neighborhoodfield {
    grid-area: neighborhoodfield;
  }

  &.cityfield {
    grid-area: cityfield;
  }

  &.statefield {
    grid-area: statefield;
  }

  .opt {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: ${({ theme }) => theme.fonts.roboto.size.xsmall};
    font-style: italic;
    color: ${({ theme }) => theme.colors.base.label};
  }
`

const defaultField = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  border-radius: 4px;
  padding: 12px;

  &.hasError {
    background: ${({ theme }) => theme.colors.warning.lighter};
    border-color: ${({ theme }) => theme.colors.warning.light};
  }
`

export const CepField = styled(defaultField)``

export const StreetField = styled(defaultField)``

export const NumberField = styled(defaultField)``

export const ComplementField = styled(defaultField)`
  padding-right: 80px;
`

export const NeighborhoodField = styled(defaultField)``

export const CityField = styled(defaultField)``

export const StateField = styled(defaultField)`
  text-transform: uppercase;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.roboto.size.xsmall};
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 14px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.base.hover};
  }

  &.active {
    background: ${({ theme }) => theme.colors.secondary.light};
    border-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`

export const Radio = styled.input`
  display: none;
`
