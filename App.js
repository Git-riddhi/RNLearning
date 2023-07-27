import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './API/useContextTask/LoginSignupFlow/AppRoutes'

const App = () => {
  return (

    <NavigationContainer>
     <AppRoutes/>
    </NavigationContainer>

  )

}


export default App