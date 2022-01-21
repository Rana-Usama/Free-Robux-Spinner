import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Text, View, Image, TouchableOpacity } from 'react-native'

//components
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function WithDrawScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(13), justifyContent: 'center', alignItems: 'flex-start', backgroundColor: Colors.primary }} >
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.6), fontWeight: '500', color: Colors.black }}>
                    Free Robux Spinner
                </Text>
            </View>

            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: RFPercentage(1.6) }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: '400' }} >
                    Earned Robux : 16.0
                </Text>
            </View>

            {/* Center Box */}
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: RFPercentage(10), width: RFPercentage(36), height: RFPercentage(13), color: Colors.black, borderRadius: RFPercentage(1.5), borderWidth: RFPercentage(0.3), borderColor: Colors.black }} >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(4), fontWeight: '500' }} >
                        R$
                    </Text>
                    <Text style={{ marginLeft: RFPercentage(1), color: Colors.primary, fontSize: RFPercentage(4), fontWeight: '500' }} >
                        16.0
                    </Text>
                </View>
                <Text style={{ color: Colors.darkGrey, marginTop: RFPercentage(0.6), fontSize: RFPercentage(1.9) }} >
                    Earned Robux
                </Text>
            </View>

            <Text style={{ color: Colors.darkGrey, marginTop: RFPercentage(1.4), fontSize: RFPercentage(1.7) }} >
                Minimum Withdrawl 1500 Robux
            </Text>

            {/* Button */}
            <View style={{ marginBottom: RFPercentage(4), width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                <MyAppButton
                    title="Withdraw"
                    padding={RFPercentage(2)}
                    // onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1.6)}
                    width={"60%"}
                />
            </View>

            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '400' }} >
                    Join my robolox grpupto recieve you winnings
                </Text>
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.black, fontSize: RFPercentage(2), fontWeight: '400' }} >
                    Name : Amime Heroes Club
                </Text>
                <TouchableOpacity activeOpacity={0.8} >
                    <Text style={{ marginTop: RFPercentage(0.8), color: Colors.primary, fontSize: RFPercentage(2), fontWeight: '500' }} >
                        Click to join
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(1.4), width: RFPercentage(40), height: RFPercentage(7), backgroundColor: Colors.grey, marginTop: RFPercentage(3) }} >
                <Text>
                    Add
                </Text>
            </View>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

export default WithDrawScreen;