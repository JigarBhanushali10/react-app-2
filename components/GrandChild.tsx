import React, { Component } from 'react'
import { View,Text } from 'react-native';
   

 
class GrandChild extends Component {
    state = { name:"GrandChild" 

}

    render() { 

        console.log(this.props);
        
        return ( <View>
            <Text>

            {}
            </Text>
        </View> )
    }
}
 
export default GrandChild;