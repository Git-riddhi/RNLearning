import React from "react";
import QuizScreen from "./QuizScreen";
import ResultsScreen from "./ResultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeQuizScreen from "./WelcomeQuizScreen";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();


const NavigatorScreen = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" >
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeQuizScreen}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Quiz"
                    component={QuizScreen}
                    options={{
                        headerShown: true, headerTitleAlign: "center", headerTitle: 'Quiz',
                        headerLeft: () => {
                            return (

                                <TouchableOpacity
                                    onPress={() => Alert.alert("Are You Sure ?", "You want to quit ?", [
                                        {
                                            text: "Yes",
                                            onPress: () => {
                                                props.navigation.navigate("Welcome")
                                            },
                                        },
                                        { text: "No", onPress: () => console.log("Okay"), style: "cancel" },
                                    ])}
                                >
                                    <Icon style={{ paddingLeft: 10 }} name="arrowleft" size={25} color="black" />
                                </TouchableOpacity>

                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="Results"
                    component={ResultsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorScreen;
