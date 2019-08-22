import React from "react";
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CustomLinearGradient} from "./custom-linear-gradient";


const {width, height} = Dimensions.get('window');

export class Login extends React.Component {
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
                        <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                            <Text style={[styles.textStyle, {
                                paddingTop: 10,
                            }]}>Foodybite</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <View style={{
                                flexDirection: "row",
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
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius: 10,
                                marginTop: 16,
                                marginStart: 20,
                                marginEnd: 20
                            }}>
                                <Image source={require("../assets/ic_password.png")}
                                       style={{
                                           width: 16,
                                           height: 16,
                                           marginStart: 16,
                                           resizeMode: "center",
                                           alignSelf: "center"
                                       }}/>
                                <TextInput
                                    placeholder={"Password"}
                                    placeholderTextColor={"white"}
                                    secureTextEntry={true}
                                    style={{
                                        paddingTop: 10,
                                        width: width,
                                        color: "#fff",
                                        paddingBottom: 10,
                                        marginStart: 10
                                    }}
                                />
                            </View>


                            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                this.props.navigation.navigate("ForgetPassword");
                            }}>
                                <Text style={{
                                    textAlign: "right",
                                    color: "#ffffff",
                                    marginEnd: 20,
                                    marginTop: 8,
                                    fontWeight: "bold"
                                }}> Forget Password?</Text>
                            </TouchableOpacity>
                            <View style={{flex: 1, marginTop: 30, justifyContent: "space-around"}}>
                                <TouchableOpacity activeOpacity={.5} style={{marginStart: 20, marginEnd: 20}}>
                                    <View style={{
                                        backgroundColor: "#5663FF",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        padding: 14
                                    }}>
                                        <Text style={{fontWeight: "bold", color: "#fff"}}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.5} onPress={() => {
                                    this.props.navigation.navigate("Registration");
                                }}>
                                    <View style={{alignSelf: "stretch"}}>
                                        <Text style={{color: "#fff", textAlign: "center", padding: 4}}>Create An
                                            Account</Text>
                                        <View
                                            style={{
                                                height: 1,
                                                backgroundColor: "white",
                                                width: 130,
                                                alignSelf: "center"
                                            }}/>
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
