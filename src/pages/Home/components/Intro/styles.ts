import { styled } from 'styled-components'

import { Container } from '../../../../components/Container'

import introBackground from '../../../../assets/images/background.png'

export const Wrapper = styled.div`
  background-image: url(${introBackground});
  background-position: top center;
  background-size: cover;
`

export const IntroContainer = styled(Container)`
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  grid-template-columns: 1fr 30rem;
  column-gap: 3.5rem;
  padding: 6rem 0;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding: 3rem 0;
  }
`

export const Content = styled.div``

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.baloo.family};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.baloo.size.xlarge};
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.baloo.size.large};
  }
`

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.roboto.size.large};
  line-height: 130%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  }
`

export const ListWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 130%;
  font-size: ${({ theme }) => theme.fonts.roboto.size.small};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  }

  span {
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
  }
`
