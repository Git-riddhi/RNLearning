import React from 'react'
import Navigation from './API/LoginRESTAPI/AuthNavigator'
import { LoginProvider } from './API/useContextTask/DataContext'
import StackNavigator from './API/useContextTask/LocalStorage_Task/StackNavigator'

const App = () => {
  return (
    <LoginProvider>
      <StackNavigator />
    </LoginProvider>

  )

}


export default App