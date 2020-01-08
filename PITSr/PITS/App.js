
import React, {useState,Component,useEffect} from 'react';
import { Animated,ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,} from 'react-native';
import Axios from 'axios';
import { TOKEN } from './config';


const { width, height } = Dimensions.get('window')
	

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


  
export default class App extends Component{

  constructor(props) {
		super(props);

		this.state = {
			userName: "",
      userPassword: "",
      rol:null

		};
  }
  
  async goLogin() {
    console.log(this.state)
		var name = this.state.userName;
		var pass = this.state.userPassword;
    var present = this;
    
		if (!name || !pass) {
      Alert.alert("Uyarı","Kullanıcı Adı ve Şifrenizi Boş Bırakamazsınız !");
    }
    else{
      console.log("testres");
      var LoginData = {
        'kadi' : name,
        'sifre' : pass,
        'token': TOKEN
      }
      Axios.post('http://192.168.1.182:3000/login', LoginData)
          .then(obj => {
            console.log(obj)
        if ( obj.data.error == false ) {
         // Alert.alert("Hata", obj.data.message);
       this.props.navigation.navigate('perspage',{kargorol:obj.data.data,kargoscno:obj.data.data2,kargoname:obj.data.data1})
        } else {
          Alert.alert("Hata", obj.data.message);
        }
    }).catch(err => {
      console.log(err)
      alert(err)
    })
    }
  }    
  

render(){

 console.disableYellowBox = true;
  return (
  <ImageBackground source={require('./img/W.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1}}>
    <ScrollView>
       <StatusBar barStyle={'dark-content'} backgroundColor={'#222'} />
       
        
         <View style={styles.container1}>
              <FadeInView style={{flex:1, justifyContent:'center',alignItems:'center',marginTop:15}}>
                <Text style={ {fontSize:35,color:'aliceblue',fontWeight: 'bold'}}>
                 ISPARTA BELEDİYESİ
                </Text>
                <Text style={ {fontSize:30,color:'aliceblue',fontWeight: 'bold'}}>
                 BİLGİ İŞLEM MÜDÜRLÜĞÜ
                </Text>
                <Text style={{fontSize:25,color:'aliceblue',fontWeight: 'bold',marginTop:5,}}>
                 GÖREV TAKİP PROGRAMI
                </Text>
               </FadeInView>
              <View style={styles.body1}>
               <TextInput
                  style={{flex:1,height:45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal: 60,borderRadius:30,}}
                  value={this.state.userName}
                  onChangeText={(value) => this.setState({userName: value})}
                  placeholder="Kullanıcı Adınızı Giriniz."/>
               <TextInput
                   style={{ flex:1,height: 45, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal: 60,borderRadius:30,marginTop:30,}}
                   onChangeText={(value) => this.setState({userPassword: value})}
                   value={this.state.userPassword}
                   secureTextEntry={true}
                   password={true}
                   placeholder="Şifrenizi Giriniz."/>
               </View> 
               <View style={styles.body2}>
                  <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={this.goLogin.bind(this)}
                   >
                  <Text style={{fontWeight: 'bold',color:'white',fontSize:18}}>GİRİŞ</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.body3}>
                  <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={() => {this.props.navigation.navigate('sifre')}} 
                  >
                    
          
                  <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>ŞİFRE DEĞİŞTİR</Text>
               </TouchableOpacity>
              </View>
              
           </View>
           
     </ScrollView>
     </ImageBackground>
  );
}
}

const styles = StyleSheet.create({

 container:{
  flex:1,
  backgroundColor:'rgba(0,0,0,0)'
  },
 body1:{
    marginTop:50,
    backgroundColor: 'rgba(0,0,0,0)',
    flex:1,
   
  },
  
  body2:{
    marginTop:50,
    backgroundColor: 'rgba(70,100,180,0.40)',
    borderRadius:10,
    flex:1,
    height:35,
    marginHorizontal:80,
  },
  body3:{
    marginTop:200,
    backgroundColor: 'rgba(70,100,180,0.50)',
    borderRadius:10,
    flex:1,
    height:30,
    marginHorizontal: 100,
    
  },


 
  },);
    