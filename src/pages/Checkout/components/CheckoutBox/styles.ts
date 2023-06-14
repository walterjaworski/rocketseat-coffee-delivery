import { styled } from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const IconWrapper = styled.div`
  &.primaryDark {
    svg {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
  &.secondaryDark {
    svg {
      color: ${({ theme }) => theme.colors.secondary.dark};
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  font-weight: 400;
  line-height: 130%;
`

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};
  font-weight: 400;
  line-height: 130%;
`
