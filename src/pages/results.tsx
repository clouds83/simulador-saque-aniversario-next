import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Results from '../components/Results'

import { Container } from '../styles/pages/Home'

const Resultados: React.FC = () => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simular Saque-Aniversário FGTS</title>
      </Head>
      <Header />
      <Results />
    </Container>
  )
}

export default Resultados
