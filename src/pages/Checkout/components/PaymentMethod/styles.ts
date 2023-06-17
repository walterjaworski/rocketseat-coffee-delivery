import { styled } from 'styled-components'
import { Button } from '../../../../components/Button'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.75rem;
`

export const MethodButton = styled(Button)`
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};

  svg {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.roboto.size.xsmall};
  border-radius: 6px;
  padding: 16px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.active {
    background: ${({ theme }) => theme.colors.secondary.dark};
    color: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Input = styled.input`
  display: none;
`
