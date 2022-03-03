import styled from 'styled-components'

export const Container = styled.div`

  width: 100vw;
  height: 100vh;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (orientation: portrait) and (max-height: 915px) {
    padding: 1rem;
  }

  }
`
