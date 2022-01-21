import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';
import SpinWheel from '../components/SpinWheel';

function SpinnerScreen(props) {





    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(13), justifyContent: 'center', alignItems: 'flex-start', backgroundColor: Colors.primary }} >
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.6), fontWeight: '500', color: Colors.black }}>
                    Free Robux Spinner
                </Text>
            </View>

            <SpinWheel />
            <View style={{ marginBottom: RFPercentage(20) }} />

            {/* Bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

export default SpinnerScreen;