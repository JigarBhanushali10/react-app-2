import React from 'react';
import { View } from 'react-native';
import GrandChild from './GrandChild';

export const Child = (props: any) => {

    console.log(props);
    let a = props?.pooja
    state: {
        a: props.pooja
    }
    return (
        <View>
                <button onClick={event =>props.jigar('1111')}>click to </button>
            <GrandChild>
                from child{a}
            </GrandChild>
        </View>
    );

}
