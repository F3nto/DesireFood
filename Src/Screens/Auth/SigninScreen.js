import React,{useState} from 'react'
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'
import {Zocial,Ionicons,AntDesign,Entypo} from '@expo/vector-icons'
import colors from '../../Constants/colors'

const screenWidth = Dimensions.get('screen').width


const SigninScreen = ({navigation,route}) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [securePass, setSecurePass] = useState(true)


  return (

    <SafeAreaView style = {styles.container}>

    <StatusBar translucent backgroundColor={'rgba(0,0,0,0.5)'}/>

    <View style = {{flex:0.55,alignItems:'center',top:40}}>

      <Image style = {{width:'90%', height:'90%'}} resizeMode = 'cover' source = {require('../../../assets/desirefoodlogo.png')}/>

    </View>


    <View style = {styles.topHeaderContent}>

      <Input
      inputContainerStyle = {styles.txtInput}
      placeholder='Email'
      value={email}
      onChangeText = {text => setEmail(text)}

      rightIcon = {<Zocial name="email" size={24} color="black" />}

      />

      <Input
      inputContainerStyle = {styles.txtInput}
      placeholder='Password'
      value={pass}
      secureTextEntry = {securePass}
      onChangeText = {text => setPass(text)}


     
      rightIcon = {

      securePass ? 

      <TouchableOpacity onPress={() => setSecurePass(false)}>
      
        <Ionicons name="eye-off" size={24} color="black" />

      </TouchableOpacity>

      :

      <TouchableOpacity onPress={() => setSecurePass(true)}>

        <Ionicons name="eye" size={24} color="black" />

      </TouchableOpacity>
    
    
      }


      />

    <TouchableOpacity style = {styles.signContainer}>

      <Text style = {styles.signTxt}>Sign in</Text>


    </TouchableOpacity>
    
    <View style = {styles.orContContainer}>

      <Text style = {styles.orContTxt}>Or</Text>

      <Text style = {styles.contTxt}>Continue With</Text>

    </View>

    
    <View style = {styles.gAndfContainer}>

      <View style = {[styles.gAndfBorder, {padding:10}]}>

        <Entypo name="facebook-with-circle" size={30} color="#4267B2" />

        <Text style = {styles.fTxt}>Facebook</Text>

      </View>


      <View style = {[styles.gAndfBorder, {padding:8}]}>

        <Image style = {{width:25,height:25}} source = {require('../../../assets/google.png')}/>

        <Text style = {styles.gTxt}>Google</Text>

      </View>


    </View>



    <View style = {styles.signUpContainer}>

      <Text style = {styles.signUpfirstTxt}>Don't you have an account?</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>

        <Text style = {styles.signUpSecondTxt}>Please Sign up here!</Text>

      </TouchableOpacity>

    </View>


    



  
    </View>
    </SafeAreaView>
  )
}

export default SigninScreen;

const styles = StyleSheet.create({

  container : {flex:1, backgroundColor:colors.backgroundColor,},

  topHeaderContent   : {flex:1,alignItems:'center'},

  txtInput : {backgroundColor:'#fff', borderRadius:10, borderColor:colors.borderColor,
              marginHorizontal:20, paddingHorizontal:15,
              borderWidth:1,width:screenWidth/1.2, shadowColor:'#000', elevation:7,shadowOpacity:1,
              },
            

  signContainer : {width:screenWidth/1.2,padding:12,
                  backgroundColor:colors.gray,borderRadius:10,
                  justifyContent:'center', alignItems:'center'},
  

  signTxt : {fontSize:18, fontWeight:'bold', color:colors.txtColor},

  signUpContainer : {flexDirection:'row', alignItems:'center', marginTop:30},

  signUpfirstTxt : {fontSize:15, fontWeight:'bold', color:colors.txtColor},

  signUpSecondTxt : {fontSize:14, fontWeight:'bold', color:'#4c8bb0', marginLeft:7},

  orContContainer : {flexDirection:'row', alignItems:'center', marginTop:20},

  orContTxt : {fontSize:25, fontWeight:'bold', color:'#4c8bb0'},

  contTxt : {fontSize:14, fontWeight:'bold', marginTop:5, marginLeft:5},

  gAndfContainer : {flexDirection:'row', alignItems:'center', marginTop:20},

  gAndfBorder : {backgroundColor:'#fff',flexDirection:'row', height : screenWidth/7,borderRadius:9,
                alignItems:'center', justifyContent:'center',
                marginHorizontal:20,
                borderColor:colors.borderColor,shadowColor:'#000',elevation:5},

  gTxt : {fontSize:16, fontWeight:'bold', color:colors.txtColor, marginLeft:5},

  fTxt : {fontSize:16, fontWeight:'bold', color:colors.txtColor, marginLeft:7},


    
})