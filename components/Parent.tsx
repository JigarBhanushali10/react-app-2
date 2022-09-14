import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Child } from './Child'
import GrandChild from './GrandChild'
// import { styled } from 'styled-components'


interface ParentProps {
    // id?:{
    //     name:string
    // }
}
interface ParentState {

}

// const GC = styled.GrandChild<ParentProps>``  
class Parent extends React.Component<ParentProps, ParentState> {


    newText = "World"
    state = {
        text: `Hello ${this.newText}`,

        id: 1
    }

    jigar = () => {
        this.setState({ text: this.state.text = 'Jigar', id: this.state.id + 1 })
    }
    
    helloWorld=(value?:any)=>{
        console.log(value);
        
        this.setState({ text: this.state.text = 'Changed from child', id: this.state.id - 1 })
    }

    render() {
        console.log(this.state.id);
        console.log(this.props);

        return (
            <SafeAreaView >
                <Child value={"as"}  pooja="female" jigar={this.helloWorld}>
                    ascasc
                </Child>

                <GrandChild >
                    fromhello
                    <Child/>
                </GrandChild>
                <h1 onClick={this.jigar}>{this.state.text}</h1>
            </SafeAreaView>)
    }
}

export default Parent;


