import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.dark};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fonts.roboto.size.medium};
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 90rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
