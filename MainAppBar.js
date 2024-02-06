import { Appbar } from 'react-native-paper';
import React from 'react';

export default function mainAppbar(props) {
    return (
        <Appbar.Header style={{backgroundColor: props.backgroundColor}}>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />
        </Appbar.Header>
    )
}