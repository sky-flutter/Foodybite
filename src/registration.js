import React from "react";
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CustomLinearGradient} from "./custom-linear-gradient";


const {width, height} = Dimensions.get('window');

export class Registration extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ImageBackground
                source={require("../assets/registration_bg.png")}
                style={styles.container}>

                <CustomLinearGradient>
                    <View style={styles.overlay}>
                        <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                            <View>
                                <ImageBackground
                                    style={{
                                        height: 140,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 140
                                    }}
                                    source={require("../assets/ic_upload_circle/ic_upload_circle.png")}>
                                    <Image source={require("../assets/user_name/ic_user_name.png")}
                                           resizeMode={"center"}
                                           style={{width: 32, height: 32, alignSelf: "center"}}/>
                                </ImageBackground>
                                <Image source={require("../assets/ic_upload_btn/ic_upload_btn.png")}
                                       style={{width: 30, height: 30, top: -40, alignSelf: "flex-end"}}/>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius: 10,
                                marginTop: 16,
                                marginStart: 20,
                                marginEnd: 20
                            }}>
                                <Image source={require("../assets/user_name/ic_user_name.png")}
                                       style={{
                                           width: 16,
                                           height: 16,
                                           marginStart: 16,
                                           resizeMode: "center",
                                           alignSelf: "center"
                                       }}/>
                                <TextInput
                                    placeholder={"Name"}
                                    keyboardType={"default"}
                                    placeholderTextColor={"white"}
                                    textContentType={"name"}
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
                                marginStart: 20,
                                marginTop: 16,
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
                                    placeholder={"Confirm Password"}
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
                            <View style={{flex: 1, marginTop: 30, justifyContent: "space-around"}}>
                                <TouchableOpacity activeOpacity={.5} style={{marginStart: 20, marginEnd: 20}}>
                                    <View style={{
                                        backgroundColor: "#5663FF",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        padding: 14
                                    }}>
                                        <Text style={{fontWeight: "bold", color: "#fff"}}>Register</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{alignSelf: "stretch"}}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                        this.props.navigation.pop();
                                    }}>
                                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                                            <Text style={{
                                                color: "#fff",
                                                textAlign: "center",
                                                paddingTop: 4,
                                                paddingBottom: 4,
                                                paddingStart: 4
                                            }}>Already have an
                                                account?</Text>
                                            <Text style={{
                                                color: "#5663FF",
                                                textAlign: "center",
                                                paddingTop: 4,
                                                paddingBottom: 4,
                                                paddingStart: 4,
                                                paddingEnd: 4
                                            }}>Login</Text>
                                        </View></TouchableOpacity>
                                    <View
                                        style={{height: 1, backgroundColor: "white", width: 200, alignSelf: "center"}}/>
                                </View>
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
        width: width,
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
