import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/Form'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simular Saque-Aniversário FGTS</title>
      </Head>
      <Header />
      <Form />
    </Container>
  )
}

export default Home
