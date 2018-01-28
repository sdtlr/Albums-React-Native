import React from "react";
import { View, Text } from "react-native";

import headerStyles from "./header.styles"


const HeaderComponent = (props) => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>
                {props.headerText}
            </Text>
        </View>
    ); 
}

export default HeaderComponent;