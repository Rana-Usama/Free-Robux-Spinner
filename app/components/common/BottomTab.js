import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, height: RFPercentage(13), width: '94%', backgroundColor: Colors.primary, borderTopLeftRadius: RFPercentage(2), borderTopRightRadius: RFPercentage(2) }} >
            {/* Bottom Tab */}

            {/* First */}
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../../assets/images/spinner.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(1.8), color: Colors.white, opacity: 0.8, marginTop: RFPercentage(1) }} >
                    R$ Spinner
                </Text>
            </View>

            {/* Second */}
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: RFPercentage(6.5) }} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../../assets/images/adds.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(1.8), color: Colors.white, opacity: 0.8, marginTop: RFPercentage(1) }} >
                    Free R$ AD
                </Text>
            </View>

            {/* Third */}
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: RFPercentage(6.5) }} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../../assets/images/with.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(1.8), color: Colors.white, opacity: 0.8, marginTop: RFPercentage(1) }} >
                    Withdraw
                </Text>
            </View>
        </View>

    );
}

export default BottomTab;