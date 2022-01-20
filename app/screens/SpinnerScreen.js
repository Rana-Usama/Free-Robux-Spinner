import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SpinnerScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(14), justifyContent: 'center', alignItems: 'flex-start', backgroundColor: Colors.primary }} >
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.6), fontWeight: '500', color: Colors.black }}>
                    Free Robux Spinner
                </Text>
            </View>

            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: RFPercentage(1.6) }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: '400' }} >
                    Earned Robux : 16.0
                </Text>
            </View>

            {/* Button */}
            <View style={{ position: 'absolute', bottom: RFPercentage(28), width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                <MyAppButton
                    title="Play"
                    padding={RFPercentage(1.6)}
                    onPress={() => props.navigation.navigate("WithDrawScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.6)}
                    width={"70%"}
                />
            </View>

            {/* Bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

export default SpinnerScreen;