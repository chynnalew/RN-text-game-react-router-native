import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import {Shared} from '../styles/index';
import {goToMenu} from './Actions';

const About = () => {

    return(
        <SafeAreaView style={{...Shared.container}}>
            <Text style={{...Shared.text}}>About page</Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default About;