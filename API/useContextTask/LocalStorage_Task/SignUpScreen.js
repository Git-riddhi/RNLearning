import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [checkFirstName, setCheckFirstName] = useState("");
  const [checkLastName, setCheckLastName] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkConfirmEmail, setCheckConfirmEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [checkConfirmPassword, setCheckConfirmPassword] = useState("");
  const [checkPhoneNumber, setCheckPhoneNumber] = useState("");

  const firstTextInput = useRef();
  const secondTextInput = useRef();
  const thirdTextInput = useRef();
  const fourthTextInput = useRef();
  const fifthTextInput = useRef();
  const sixthTextInput = useRef();

  const name1 = (firstName) => {
    var firstNameRegex = /^[A-Za-z]{0,10}$/;
    setFirstName(firstName);
    if (firstNameRegex.test(firstName)) {
      setCheckFirstName("");
    } else {
      setCheckFirstName("Please Enter Valid Name");
    }
  };

  const name2 = (lastName) => {
    var lastNameRegx = /^[A-Za-z]{0,10}$/;
    setLastName(lastName);
    if (lastNameRegx.test(lastName)) {
      setCheckLastName("");
    } else {
      setCheckLastName("Please Enter Valid Name");
    }
  };

  const mail = (email) => {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(email);
    if (emailRegex.test(email)) {
      setCheckEmail("");
    } else {
      setCheckEmail("Please Enter Valid Email address");
    }
  };

  const confirmMail = (confirmEmail) => {
    setConfirmEmail(confirmEmail);
    if (email === confirmEmail) {
      setCheckConfirmEmail("");
    } else {
      setCheckConfirmEmail("Email and confirmEmail should be same.");
    }
  };

  const pwd = (password) => {
    var passRegex =
      /^.*(?=.{6,10})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?_~()-]*).*$/;
    setPassword(password);
    if (passRegex.test(password)) {
      setCheckPassword("");
    } else {
      setCheckPassword("Please Enter Valid Password");
    }
  };

  const confirmPwd = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (password === confirmPassword) {
      setCheckConfirmPassword("");
    } else {
      setCheckConfirmPassword("Password and confirmPassword should be same.");
    }
  };

  const phoneNo = (phoneNumber) => {
    var phoneNoRegex = /^(\d{10})$/;
    setPhoneNumber(phoneNumber);
    if (phoneNoRegex.test(phoneNumber)) {
      setCheckPhoneNumber("");
    } else {
      setCheckPhoneNumber("Please Enter Valid Phone Number");
    }
  };

  const SignUp = () => {
    var isValid = true;

    if (firstName == "") {
      isValid = false;
      setCheckFirstName("First Name is Required");
    } else {
      setCheckFirstName("");
    }

    if (lastName == "") {
      isValid = false;
      setCheckLastName("LastName is Required");
    } else {
      setCheckLastName("");
    }

    if (email == "") {
      isValid = false;
      setCheckEmail("Email address is Required");
    } else {
      setCheckEmail("");
    }

    if (confirmEmail == "") {
      isValid = false;
      setCheckConfirmEmail(" Email address is Required");
    } else {
      setCheckConfirmEmail("");
    }

    if (password == "") {
      isValid = false;
      setCheckPassword("Password is Required");
    } else {
      setCheckPassword("");
    }

    if (confirmPassword == "") {
      isValid = false;
      setCheckConfirmPassword("Password is Required");
    } else {
      setCheckConfirmPassword("");
    }

    if (phoneNumber == "") {
      isValid = false;
      setCheckPhoneNumber("Phone number is Required");
    } else {
      setCheckPhoneNumber("");
    }

    return isValid;
  };

  // const storeData = async () => {
  //   const newdata =  await AsyncStorage.getItem("Registerkey");
  //   const infoData = {
  //     email: email,
  //     password: password,
  //     phoneNumber: phoneNumber,
  //     firstName: firstName,
  //     lastName: lastName,
  //     phoneNumber: phoneNumber,
  //   };
  //   try {
  //     await AsyncStorage.setItem("Registerkey", JSON.stringify( [infoData] ));

  //     console.log("success");
  //     console.log("Info-Data ===>", infoData);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }


  const storeData = async () => {

    const infoData = {
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
    }

    try {
     
      const existingValue = await getTransaction(infoData);
      console.log("existingTransactions-Data ===>",existingValue);

      await AsyncStorage.setItem("Registerkey", JSON.stringify(existingValue));
    } catch (err) {
      console.log('error ===>', err);
    }
  };

  const getTransaction = async (item) => {
    
    let transactions = await AsyncStorage.getItem("Registerkey");
    
    console.log("transactions ===>" , transactions)
    
    if (transactions) {
      console.log('item ===>', item);
      const newValue =  [item]
      const oldValue =  JSON.parse(transactions)
      console.log('item.email===>',item.email);
      const updatedValue = [...oldValue,...newValue];
      console.log("after update transactions ===>", updatedValue)
    
      return updatedValue

    } else {
      const updateStorage = [item]
      return updateStorage
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Image
            source={require("../../../assets/arrow.png")}
            style={styles.leftAerrowButton}
          />
        </TouchableOpacity>

        <Text style={styles.text}> Create Account </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            placeholder="Enter First Name"
            onChangeText={(firstName) => name1(firstName)}
            style={styles.textInputStyle}
            autoCapitalize="words"
            returnKeyType={"next"}
            // autoFocus={true}
            value={firstName}
            onSubmitEditing={() => {
              firstTextInput.current.focus();
            }}
          />
          {checkFirstName ? (
            <Text style={styles.checkText}>{checkFirstName}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            placeholder="Enter Last Name"
            onChangeText={(lastName) => name2(lastName)}
            style={styles.textInputStyle}
            autoCapitalize="words"
            placeholderTextColor="grey"
            returnKeyType={"next"}
            value={lastName}
            ref={firstTextInput}
            onSubmitEditing={() => {
              secondTextInput.current.focus();
            }}
          />
          {checkLastName ? (
            <Text style={styles.checkText}> {checkLastName}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            placeholder="Enter Email"
            onChangeText={(email) => mail(email)}
            style={styles.textInputStyle}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType={"next"}
            value={email}
            ref={secondTextInput}
            onSubmitEditing={() => {
              thirdTextInput.current.focus();
            }}
          />
          {checkEmail ? (
            <Text style={styles.checkText}>{checkEmail}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            placeholder="Enter Confirm Email"
            onChangeText={(confirmEmail) => confirmMail(confirmEmail)}
            style={styles.textInputStyle}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType={"next"}
            value={confirmEmail}
            ref={thirdTextInput}
            onSubmitEditing={() => {
              fourthTextInput.current.focus();
            }}
          />
          {checkConfirmEmail ? (
            <Text style={styles.checkText}>{checkConfirmEmail}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(password) => pwd(password)}
            returnKeyType={"next"}
            value={password}
            ref={fourthTextInput}
            onSubmitEditing={() => {
              fifthTextInput.current.focus();
            }}
          />
          {checkPassword ? (
            <Text style={styles.checkText}>{checkPassword}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Confirm Password"
            secureTextEntry={true}
            onChangeText={(confirmPassword) => confirmPwd(confirmPassword)}
            returnKeyType={"next"}
            value={confirmPassword}
            ref={fifthTextInput}
            onSubmitEditing={() => {
              sixthTextInput.current.focus();
            }}
          />
          {checkConfirmPassword ? (
            <Text style={styles.checkText}> {checkConfirmPassword} </Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Phone No."
            keyboardType={"numeric"}
            onChangeText={(phoneNumber) => phoneNo(phoneNumber)}
            returnKeyType={"done"}
            value={phoneNumber}
            ref={sixthTextInput}
          />
          {checkPhoneNumber ? (
            <Text style={styles.checkText}>{checkPhoneNumber}</Text>
          ) : (
            <Text style={styles.checkText}></Text>
          )}

          <View style={styles.signup}>
            <Text style={styles.signUpButtonText}> Sign Up </Text>

            <TouchableOpacity
              onPress={() => {
                if (SignUp()) {
                  storeData();
                  navigation.navigate("Login");
                }
                // else {
                //   // console.log("Not success");
                //   Alert.alert("Not Success")
                // }
              }}
              style={styles.aerrowTouch}
            >
              <Image
                source={require("../../../assets/right-arrow.png")}
                style={styles.rightAerrowButton}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>Or create account using</Text>

          <View style={styles.footer}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/facebook.png")}
                style={{ height: 30, width: 30, resizeMode: "cover" }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/twitter.png")}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: "cover",
                  marginLeft: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/search.png")}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: "cover",
                  marginLeft: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  leftAerrowButton: {
    height: 25,
    width: 25,
    resizeMode: "cover",
    justifyContent: "flex-start",
    marginLeft: 25,
    marginTop: 20,
  },

  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 15,
  },

  checkText: {
    color: "red",
    textAlign: "center",
  },

  textInputStyle: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 7,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 5,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  footerText: {
    fontSize: 15,
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    margin: 10,
  },

  signUpButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },

  signup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
  },

  aerrowTouch: {
    backgroundColor: "orange",
    padding: 7,
    borderRadius: 20,
    marginRight: 20,
  },

  rightAerrowButton: {
    height: 30,
    width: 30,
    tintColor: "white",
  },
});

export default SignUpScreen;
