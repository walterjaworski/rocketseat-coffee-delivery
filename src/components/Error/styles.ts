import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.warning.main};
`
