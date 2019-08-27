import React from "react";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

const {width, height} = Dimensions.get('window');

export class BottomNavigationBar extends React.Component {
    render() {
        return <View >
            <View >
                <View style={{
                    flex: 1, width: width,
                    justifyContent: "center",
                    backgroundColor: "#f4f4f4",
                    alignItems: "center",
                    borderTopRightRadius: 16, borderTopLeftRadius: 16, marginTop: 24
                    , position: 'absolute', flexDirection: "row", height: 60
                }}>
                    <View style={{flex: 2, flexDirection: "row", justifyContent: "space-around"}}>
                        <Image source={require("../../assets/ic_home/ic_home.png")} style={{width: 24, height: 24}}
                               resizeMode={"center"}/>
                        <Image source={require("../../assets/ic_bookmark/ic_bookmark.png")}
                               style={{width: 24, height: 24}}
                               resizeMode={"center"}/>
                    </View>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 2, flexDirection: "row", justifyContent: "space-around"}}>
                        <Image source={require("../../assets/ic_notification/ic_notification.png")}
                               style={{width: 24, height: 24}} resizeMode={"center"}/>
                        <Image source={require("../../assets/ic_profile/ic_profile.png")}
                               style={{width: 24, height: 24}}
                               resizeMode={"center"}/>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{
                    borderRadius: 100,
                    height: 40,
                    position: "relative",
                    width: 40,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    backgroundColor: "#5663FF",
                }}>
                    <Icon name={"add"} color={"white"}/>
                </TouchableOpacity>
            </View>

        </View>;
    }
}