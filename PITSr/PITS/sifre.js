import React, {useState,Component,useEffect} from 'react';
import { Animated,ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground,Dimensions} from 'react-native';
import Axios from 'axios';
import { TOKEN } from './config';

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 3000,
        }
      ).start();
    }, []);
  
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  
  function Separator() {
    return 
  }
  
  
export default class sifre extends Component{
  
  constructor(props) {
		super(props);

		this.state = {
			userName: "",
      userPassword: "",
      TextInputDisableStatus: true,
      TextInputDisableStatus1: false,
      disabled:false,
      disabled1:true,
      sifre:null,
      sifre1:null,
      show: false,
      show1:true,
		};
  }
 
  async goLogin() {
    console.log(this.state)
		var name = this.state.userName;
		var pass = this.state.userPassword;
		var present = this;
		if (!name || !pass) {
      Alert.alert("Boş Bırakamazsınız.");
    }
    else{
      console.log("testres");
      var LoginData = {
        'kadi' : name,
        'sifre' : pass,
        'token': TOKEN,
      }
      Axios.post('http://192.168.1.182:3000/login', LoginData)
          .then(obj => {
           // console.log(obj)
        if ( obj.data.error == false ) {
          this.setState({ TextInputDisableStatus: false }),
          this.setState({ TextInputDisableStatus1: true}),
          this.setState({ disabled: true }),
          this.setState({ disabled1: false}),
          this.setState({show:true}),
          this.setState({show1:false})
          
        
        } else {
          Alert.alert("Hata", obj.data.message);
        }
    })
    }
  }    
  async goLogin1() {
    console.log(this.state)
    var name1=this.state.userName;
		var pass1 = this.state.sifre;
		var pass2 = this.state.sifre1;
		var present = this;
		if (!pass1 || !pass2 ) {
      Alert.alert("Boş Bırakamazsınız.");
    }
     
    else{
     
      if( pass1 == pass2 )
      { 
      //console.log("testres");
      var LoginData = {
        'kadi' : name1 ,
        'sifre' : pass1,
        'token': TOKEN,
      }
      Axios.post('http://192.168.1.182:3000/sifre', LoginData)
          .then(obj => {
            console.log(obj)
        if ( obj.data.error == false ) {
          Alert.alert("Başarılı",obj.data.message);
          this.props.navigation.navigate('App')
        
        } else {
          Alert.alert("Hata", obj.data.message);
        }
    })
    
  }
    else{Alert.alert("Hata","Şifreler Uyumlu Değil")}
}
  }    

render(){
 
  return (
    <ImageBackground source={require('./img/p2.jpg')} style={{position:'absolute',width: Dimensions.get('window').width,height: Dimensions.get('window').height}}>
    <ScrollView>
       <FadeInView style={{flex:1, justifyContent:'center',alignItems:'center',marginTop:15}}>
                <Text style={ {fontSize:25,color:'silver',fontWeight: 'bold'}}>
                 ŞİFRE DEĞİŞİM PANELİ
                </Text>
        </FadeInView>
        { this.state.show1 ? (
        <View style={styles.body1}>
               <TextInput
                  style={{flex:1,height:45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginHorizontal: 60,borderRadius:30,}}
                  value={this.state.userName}
                  editable={this.state.TextInputDisableStatus}
                  onChangeText={(value) => this.setState({userName: value})}
                  placeholder="Kullanıcı Adınızı Giriniz."/>
               <TextInput
                   style={{ flex:1,height: 45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginHorizontal: 60,borderRadius:30,marginTop:30,}}
                   onChangeText={(value) => this.setState({userPassword: value})}
                   value={this.state.userPassword}
                   editable={this.state.TextInputDisableStatus}
                   secureTextEntry={true}
                   password={true}
                   placeholder="Şifrenizi Giriniz."/>
               </View> 
               ): null}
                { this.state.show1 ? (
               <View style={styles.body2}>
                  <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   disabled={this.state.disabled} 
                   onPress={this.goLogin.bind(this)}
                   >
                  <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>GİRİŞ</Text>
                  </TouchableOpacity>
                  </View>
                  ): null}
                { this.state.show ? (

                  <View style={styles.body3}>
               <TextInput
                  style={{flex:1,height:45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginHorizontal: 60,borderRadius:30,}}
                  value={this.state.sifre}
                  editable={this.state.TextInputDisableStatus1}
                  secureTextEntry={true}
                  onChangeText={(value) => this.setState({sifre: value})}
                  placeholder="Yeni Şifrenizi Giriniz."/>

               <TextInput
                   style={{ flex:1,height: 45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginHorizontal: 60,borderRadius:30,marginTop:30,}}
                   onChangeText={(value) => this.setState({sifre1: value})}
                   value={this.state.sifre1}
                   editable={this.state.TextInputDisableStatus1}
                   secureTextEntry={true}
                   password={true}
                   placeholder="Yeni Şifrenizi Tekrar Giriniz."/>
               </View> 
                ) : null}
                 { this.state.show ? (
               <View style={styles.body2}>
                  <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   disabled={this.state.disabled1} 
                   onPress={this.goLogin1.bind(this)}
                   >
                  <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>ONAYLA</Text>
                  </TouchableOpacity>
                   </View> 
                ): null}
               
                
     
      </ScrollView>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({

    body1:{
        marginTop:50,
        backgroundColor: 'rgba(0,0,0,0)',
        flex:1,
       
      },
      
      body2:{
        marginTop:50,
        backgroundColor: 'rgba(70,100,180,0.40)',
        borderRadius:30,
        flex:1,
        height:35,
        marginHorizontal: 60,
      },
      body3:{
        marginTop:50,
        backgroundColor: 'rgba(0,0,0,0)',
        flex:1,
      }
 
  
},);
