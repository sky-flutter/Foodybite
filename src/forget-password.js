import React from "react";
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CustomLinearGradient} from "./custom-linear-gradient";
import {Icon} from "react-native-elements";


const {width, height} = Dimensions.get('window');

export class ForgetPassword extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ImageBackground
                source={require("../assets/login_bg.png")}
                style={styles.container}>

                <CustomLinearGradient>
                    <View style={styles.overlay}>
                        <View style={{
                            flexDirection: "row",
                            height: 56,
                            alignItems: "center",
                            width: width,
                            marginTop: 16
                        }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                this.props.navigation.pop();
                            }}>
                                <Icon name={"keyboard-arrow-left"} color={"white"} size={36}/>
                            </TouchableOpacity>
                            <View style={{justifyContent: 'space-between', alignItems: "center"}}>
                                <Text style={{
                                    color: "white",
                                    fontWeight: "500",
                                    alignSelf: "center",
                                    width: width - 36,
                                    fontSize: 18,
                                    textAlign: "center"
                                }}>Forget Password</Text>
                            </View>
                        </View>
                        <View style={{flex: 2}}>
                            <View>
                                <Text style={{
                                    color: "white",
                                    textAlign: "center",
                                    marginTop: 30,
                                    marginStart: 30,
                                    marginEnd: 30
                                }}>Enter your
                                    email and will send
                                    you instructions on how to reset it</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                marginTop: 40,
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius: 10,
                                marginStart: 20,
                                marginEnd: 20
                            }}>
                                <Image source={require("../assets/ic_email.png")}
                                       style={{
                                           width: 16,
                                           height: 16,
                                           marginStart: 16,
                                           resizeMode: "center",
                                           alignSelf: "center"
                                       }}/>
                                <TextInput
                                    placeholder={"Email"}
                                    keyboardType={"email-address"}
                                    placeholderTextColor={"white"}
                                    style={{
                                        paddingTop: 10, width: width,
                                        color: "#fff", paddingBottom: 10, marginStart: 10
                                    }}
                                />
                            </View>

                            <View style={{marginTop: 30, justifyContent: "space-around"}}>
                                <TouchableOpacity activeOpacity={.5} style={{marginStart: 20, marginEnd: 20}}>
                                    <View style={{
                                        backgroundColor: "#5663FF",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        padding: 14
                                    }}>
                                        <Text style={{fontWeight: "bold", color: "#fff"}}>Send</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </CustomLinearGradient>


            </ImageBackground>
        );
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
    avatarStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        marginBottom: 24,
        fontSize: 32,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    balanceContainer: {
        padding: 10,
    },

});
