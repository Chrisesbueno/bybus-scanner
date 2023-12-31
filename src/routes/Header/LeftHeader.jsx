import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "@/utils/styles/Header.module.css";

const LeftHeader = ({ text = "", icon = true, route}) => {
  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();
  return (
    <View style={styles.left}>
      {icon && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Image
            style={{
              width: 45,
              height: 45,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/arrow_back.png")}
          />
        </TouchableOpacity>
      )}
      {text && (
        <View style={styles.home}>
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/icon.png")}
          />
          <Text
            onPress={() => navigation.goBack("Home")}
            style={[styles.textLogo, global.black]}
          >
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LeftHeader;
