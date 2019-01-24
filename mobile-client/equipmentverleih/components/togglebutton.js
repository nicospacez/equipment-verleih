import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';


export class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state ={
            activated:false,
            bgcolor:colors.white,
            textcolor: colors.primary
        }

    }
    

    render() {


        return (
            <TouchableOpacity onPress={() => this.combindedFunctions()}  >
                <View style={[styles.button,{backgroundColor:this.state.bgcolor, borderColor:this.props.buttoncolor}]}>

                    <Text style={[styles.buttonText,{color:this.state.textcolor}]}>{this.props.title}</Text>
                
                </View>
            </TouchableOpacity>
        );


    }

    combindedFunctions(){
        if(this.state.activated){
            this.props.onDeactivate();
        }else{
            this.props.onClick();
        }
        
        this.toggle();
    }

    toggle(){

        if(this.state.activated){
            this.setState({
                activated:false,
                bgcolor:colors.white,
                textcolor:colors.primary
            })
        }else{
            this.setState({
                activated:true,
                bgcolor:this.props.buttoncolor,
                textcolor:colors.white
            })
            
        }
    }

    

}

const styles = StyleSheet.create({
    button:{
        height:35,
        borderWidth:2,
        width:85,
        alignItems:'center',                        
        justifyContent:'center',
        borderRadius:100,
        margin:5
    },
    buttonText:{
        fontSize:13
    }
});