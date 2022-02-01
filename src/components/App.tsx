import React from 'react'
import MainScreen from './MainScreenView'
import { GlobalProvider } from '../context/GlobalContext'
import { GlobalStyle } from '../GlobalStyles/GlobalStyles'

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
