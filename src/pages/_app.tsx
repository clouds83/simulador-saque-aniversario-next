import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { DataProvider } from '../context/DataContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </DataProvider>
  )
}

export default MyApp
