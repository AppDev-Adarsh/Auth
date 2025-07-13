//import liraries
import React, {  } from 'react';
import { View, Text, StyleSheet, Dimensions , useWindowDimensions,PixelRatio,Image } from 'react-native';

// create a component
const Splash = () => {
    const windowDimensions = useWindowDimensions()
    console.log("useWindowDimensions :: ", windowDimensions)
    return (
        <View style={styles.container}>
        <View style={styles.logo} >
        <Image source ={require('../assets/images/logo.png')}/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', height:'60%'}}>
            <Image source={ require('../assets/images/splash.png')} style={styles.image} />
            </View>
            <View style={styles.textView}>
            <Text style={styles.txtheading}>Lorem Ipsum </Text>
            <Text style = {styles.txt}>Lorem Ipsum is a dummy text used as placeholder</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logo:{
       height:"30%",
       width : "85%",
       justifyContent:"center",
       alignItems:"center",
       position : 'absolute' ,
       left:33
    },
    image : {
        width : "90%",
        resizeMode:'contain',
    },
    textView :{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'25%'
    },
    txtheading : {
        fontSize:24,
        fontWeight:"bold",
        letterSpacing :2,
        color:'#0000000'
    },
    txt:{
        paddingTop:'5%',
        fontSize:20,
        color:"#515151",
        textAlign:"center"
    },
});

//make this component available to the app
export default Splash;
