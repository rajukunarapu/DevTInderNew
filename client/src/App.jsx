import React from 'react'
import AppRoute from './routes/AppRoute'
import AuthProvider from './context/AuthProvider'

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRoute/>
      </AuthProvider>
    </>
  )
}

export default App