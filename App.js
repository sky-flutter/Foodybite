import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Login} from "./src/login";
import {Registration} from "./src/registration";
import {ForgetPassword} from "./src/forget-password";

const navigationContainer = createStackNavigator({
    Home: {
        screen: Login
    },
    Registration: {
        screen: Registration
    },
    ForgetPassword: {
        screen: ForgetPassword
    }
});


const app = createAppContainer(navigationContainer)
export default app;


