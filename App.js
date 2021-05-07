import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb'
import PhonicSoundButton from './components/PhonicSoundButton'


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:"",
      chunks:[],
      phonicSounds:[]
    }
  }
 render(){
   return(
     <SafeAreaProvider>
     <View style={styles.container}>
       <Header
       backgroundColor="pink"
       centerComponent={{text:"Monkey Chunky ", style:{color:"black",fontSize:20,fontWeight:"bold"}}}/>
       <Image  source={{
         uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
       }}
       style={styles.iconStyle}/>
      <TextInput  style={styles.inputBox}
      placeholder="enter your word here"
      onChangeText={(text)=>{
        this.setState({
          text:text
        })
      }}
    />
    <TouchableOpacity onPress={()=>{
      var word=this.state.text.toLowerCase()
db[word]?(
      this.setState({
        chunks:db[word].chunks,
        phonicSounds:db[word].phones
      })
) : (alert(" Sorry . The word does not exist . We will try to make it better as soon as possible"))
    }} style={styles.enterButton}><Text style={styles.buttonText}>ENTER</Text></TouchableOpacity>
   <View>
    {
      //g-0,oo-1,d-2
      this.state.chunks.map((item,index)=>{
        return(
        <PhonicSoundButton
        wordChunk={this.state.chunks[index]}
        soundChunk= {this.state.phonicSounds[index]}
        buttonIndex={index}/>
        )
      })

    }

   </View>
     </View>
     </SafeAreaProvider>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  inputBox: {
    marginTop:20,
    width:"80%",
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    borderColor:"cadetblue",

  },
  enterButton:{
  marginTop:20,
  width:"50%",
  height:55,
  alignSelf:"center",
  padding:10,
  margin:10,
  backgroundColor:"pink",
  borderRadius:30,
  borderWidth:2,
  borderColor:"cadetblue",
  alignItems:"center"
  },
  buttonText:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  displayTextStyle:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold"
  },
  iconStyle:{
    width:250,
    height:250,
    alignSelf:"center",
    borderWidth:3,
    borderRadius:200,
    borderColor:"cadetblue",
    backgroundColor:"pink",
    marginTop:20
  },
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
  }
});
