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

  &.default {
    background: ${({ theme }) => theme.colors.base.button};

    svg {
      color: ${({ theme }) => theme.colors.secondary.main};
    }
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary.main};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  &.primaryLight {
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.dark};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary.main};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary.light};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.secondaryLight {
    background-color: ${({ theme }) => theme.colors.secondary.light};
    color: ${({ theme }) => theme.colors.secondary.dark};

    svg {
      color: ${({ theme }) => theme.colors.secondary.main};
    }

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary.main};
      color: ${({ theme }) => theme.colors.white};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
