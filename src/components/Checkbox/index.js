import React from "react";
import {  Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

const Checkbox = ({checked, onCheck}) => {
    console.log('INSIDE CHECK')
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={()=>onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ): null}
        </TouchableOpacity>
    )
}

export default React.memo(Checkbox);