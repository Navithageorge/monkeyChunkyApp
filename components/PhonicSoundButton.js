import React from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'
import{Audio} from 'expo-av'
export default class PhonicSoundButton extends React.Component{


    constructor(props){
        super(props);
        this.state={
            pressedButtonIndex:"",
            x:""
        }
    }



    playSound=async(soundChunk)=>{
var soundLink= 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
await Audio.Sound.createAsync(
    {
        uri: soundLink
    },
    {
        shouldPlay: true
    }
)
    
    }


    render(){
        var x;

        console.log(this.props.buttonIndex)
        console.log(this.state.pressedButtonIndex)
        if(this.props.buttonIndex===this.state.pressedButtonIndex){
                x="red"
              }
   else{
       x="pink"
}
        return(

                <TouchableOpacity onPress={()=>{
                    this.setState({pressedButtonIndex:this.props.buttonIndex})
                    this.playSound(this.props.soundChunk);
                }}
                style={[styles.button,{backgroundColor:x}]}
                >


                     <Text style={styles.displayTextStyle}>{this.props.wordChunk} </Text> 
                     
                     
                     </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({  
    button:{
    width:"60%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    margin:5,
    backgroundColor:"pink",
    borderRadius:30,
    borderWidth:2,
    borderColor:"cadetblue"
  },
  buttonNew:{
    width:"60%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    margin:5,
    backgroundColor:"orange",
    borderRadius:30,
    borderWidth:2,
    borderColor:"cadetblue"
  },
  displayTextStyle:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold"
  },
}
  
  )
