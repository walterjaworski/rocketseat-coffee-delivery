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
  position: relative;

  /* span {
    line-height: auto;
  } */

  .label {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
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
