import React from "react";
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CustomLinearGradient} from "./custom-linear-gradient";

const {width, height} = Dimensions.get('window');

export class TurnLocation extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return <ImageBackground
            source={require("../assets/ic_turn_gps.png")}
            style={styles.container}>
            <CustomLinearGradient>
                <View style={styles.overlay}>
                    <View style={{flex: 4}}>
                        <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                            <View style={{
                                backgroundColor: "#F8F8F8",
                                marginTop: 36,
                                marginEnd: 16,
                                paddingTop: 6,
                                paddingStart: 12,
                                borderRadius: 8,
                                paddingBottom: 6,
                                paddingEnd: 12
                            }}>
                                <Text>Skip</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <Text style={{color: "white", fontSize: 20, marginStart: 20, fontWeight: "600"}}>Hi
                                John,</Text>
                            <Text style={{color: "white", fontSize: 20, marginStart: 20, fontWeight: "600"}}>Welcome
                                to</Text>
                            <Text style={{
                                color: "#FFCC00",
                                fontSize: 20,
                                marginStart: 20,
                                fontWeight: "600"
                            }}>Foodybite</Text>
                        </View>
                    </View>
                    <View style={{flex: 1.5, justifyContent: "center"}}>
                        <Text style={{color: "white", fontSize: 14, marginStart: 20, marginEnd: 20}}>Please turn on your
                            GPS to find
                            out better restaurant suggestions
                            near you.</Text>
                    </View>
                    <View style={{flex: 0.5}}>
                        <TouchableOpacity activeOpacity={.5} style={{marginStart: 20, marginEnd: 20}} onPress={() => this.props.navigation.navigate("MainHome")}>
                            <View style={{
                                backgroundColor: "#5663FF",
                                alignItems: "center",
                                borderRadius: 10,
                                padding: 14
                            }}>
                                <Text style={{fontWeight: "bold", color: "#fff"}}>Turn On GPS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </CustomLinearGradient>
        </ImageBackground>
    }
}


const styles = StyleSheet.create({
    container: {
        height: height,
        width: width
    },
    overlay: {
        height: "100%",
        width: "100%",
        // backgroundColor: "rgba(52, 52, 52, 0.8)"
    },
});