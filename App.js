import React from 'react'
import LoginValidation from './API/Formik/Login'
import SignUpValidation from './API/Formik/SignUp'
import { LoginProvider } from './API/useContextTask/DataContext'
import StackNavigator from './API/useContextTask/StackNavigator'


const App = () => {
  return (

    <LoginProvider>
      <StackNavigator />
    </LoginProvider>
    // <>
    //   <SignUpValidation />
    // </>
  )

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },



// })

export default App