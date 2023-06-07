import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};

  span {
    line-height: auto;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  &.primaryLight {
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary.main};
  }

  &.secondaryLight {
    background-color: ${({ theme }) => theme.colors.secondary.light};
    color: ${({ theme }) => theme.colors.secondary.dark};

    svg {
      fill: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`
