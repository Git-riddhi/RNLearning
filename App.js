import React from 'react'
import Navigation from './API/LoginRESTAPI/AuthNavigator'
import { AuthContext, AuthProvider } from './API/LoginRESTAPI/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>

  )

}


export default App