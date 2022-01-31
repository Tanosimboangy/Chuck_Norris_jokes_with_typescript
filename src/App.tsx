import React from 'react'
import MainScreen from './MainScreen/index'
import { GlobalProvider } from './context/GlobalContext'
import { GlobalStyle } from './GlobalStyles/GlobalStyles'

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
