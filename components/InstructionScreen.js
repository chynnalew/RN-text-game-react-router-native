import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import {goToMenu} from './Actions';
import {Shared} from '../styles/index'

const InstructionsScreen = () => {

    return(
        <View style={{...Shared.container}}>
            <Text style={{...Shared.text}}>InstructionsScreen page</Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default InstructionsScreen;