import React from "react";
import {View} from "react-native";
import {BottomNavigationBar} from "./custom_component/BottomNavigationBar";

export class Home extends React.Component {
    render() {
        return <View>
            <View style={{flex: 1}}/>
            <BottomNavigationBar/>
        </View>
    }
}