import React from "react";
import {Dimensions, View} from "react-native";

const {width, height} = Dimensions.get('window');
const data = Array.from({length: height});

export class CustomLinearGradient extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <View style={{
                height: height,
                width: width
            }}>

                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: "#000000",
                            height: 1,
                            bottom: ((height - 4) - i),
                            right: 0,
                            left: 0,
                            zIndex: 0,
                            opacity: (1.05 / height) * (i + 2)
                        }}
                    />
                ))}
                {children}
            </View>
        );
    }
}