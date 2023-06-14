import { styled } from 'styled-components'

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-size: ${({ theme }) => theme.fonts.baloo.size.large};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.base.subtitle};
  line-height: 130%;
`

export const CardsWrapper = styled.div`
  margin: 2.25rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
