import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import WheelOfFortune from 'react-native-wheel-of-fortune';
import Colors from '../config/Colors';
import MyAppButton from './common/MyAppButton';
import Screen from './Screen';

const participants = [
    '0R$',
    '10,000R$',
    '2R$',
    '10R$',
    '5R$',
    '7R$',
    '0R$',
    '100R$',
];
class SpinWheel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
        };
        this.child = null;
    }

    buttonPress = () => {
        this.setState({
            started: true,
        });
        this.child._onPress();
    };

    render() {
        const wheelOptions = {
            rewards: participants,
            knobSize: RFPercentage(3),
            borderWidth: 5,
            borderColor: '#E1AD01',
            innerRadius: 30,
            duration: 6000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            knobSource: require('../../assets/images/knob.png'),
            onRef: ref => (this.child = ref),
        };
        return (
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>



                {/* <StatusBar barStyle={'light-content'} /> */}
                <WheelOfFortune
                    options={wheelOptions}
                    getWinner={(value, index) => {
                        this.setState({ winnerValue: value, winnerIndex: index });
                    }}
                />


                <View style={styles.startButtonView}>
                    <TouchableOpacity
                        onPress={() => this.buttonPress()}
                        style={styles.startButton}>
                        <Text style={styles.startButtonText}>Play</Text>
                    </TouchableOpacity>
                </View>


                {this.state.winnerIndex != null && (
                    <View style={styles.winnerView}>
                        <Text style={styles.winnerText}>
                            Earned Robux: {participants[this.state.winnerIndex]}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ winnerIndex: null });
                                this.child._tryAgain();
                            }}
                            style={styles.tryAgainButton}>
                            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                    </View>
                )}



                {/* Button */}
                {/* <View style={{ position: 'absolute', bottom: RFPercentage(12), width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
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
                </View> */}







            </Screen>
        );
    }
}
export default SpinWheel;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     backgroundColor: '#ffff',
    // },
    startButtonView: {
        position: 'absolute',
        bottom: RFPercentage(-8),
    },
    startButton: {
        backgroundColor: Colors.primary,
        width: RFPercentage(35),
        height: RFPercentage(6),
        borderRadius: RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButtonText: {
        fontSize: RFPercentage(3.5),
        color: '#fff',
    },
    winnerView: {
        position: 'absolute',
        left: RFPercentage(8),
        top: RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tryAgainButton: {
        padding: 10,
    },
    winnerText: {
        fontSize: RFPercentage(2),
    },
    tryAgainButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: RFPercentage(1),
        width: RFPercentage(17),
        height: RFPercentage(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(1)
    },
    tryAgainText: {
        fontSize: RFPercentage(2.4),
        color: '#fff',
    },
});