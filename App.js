import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Login} from "./src/login";
import {Registration} from "./src/registration";

const navigationContainer = createStackNavigator({
    Home: {
        screen: Login
    },
    Registration: {
        screen: Registration
    }
});


const app = createAppContainer(navigationContainer)
export default app;


