import React, { useMemo, useState } from "react";

const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [checkFirstName, setCheckFirstName] = useState('')
  const [checkLastName, setCheckLastName] = useState('')
 const [checkPhoneNumber, setCheckPhoneNumber] = useState('')


  const contextPayload = useMemo(() => ({

    //states
    email, setEmail,
    password, setPassword,
    checkEmail, setCheckEmail,
    checkPassword, setCheckPassword,
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    checkFirstName, setCheckFirstName,
    checkLastName, setCheckLastName,
    checkPhoneNumber, setCheckPhoneNumber
  

  }), [

    //states
    email, setEmail,
    password, setPassword,
    checkEmail, setCheckEmail,
    checkPassword, setCheckPassword,
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    checkFirstName, setCheckFirstName,
    checkLastName, setCheckLastName,
    checkPhoneNumber, setCheckPhoneNumber
  ])

  return (
    <LoginContext.Provider value={contextPayload}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;