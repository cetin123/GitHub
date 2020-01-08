import React, {useState,Component,useEffect} from 'react';
import { Animated,ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,Image} from 'react-native';
import Axios from 'axios';
import { TOKEN } from './config';
import ImageZoom from 'react-native-image-pan-zoom';

const { width, height } = Dimensions.get('window')
	



  
export default class perspage extends Component{

  constructor(props) {
		super(props);

		this.state = {
    disabled1:true,disabled:true,
    show:false, show1:false,
    kargorol:null,kargoname:null,kargoscno:null

		};
  }

  async componentDidMount() {
    this.setState({
      kargorol: await this.props.navigation.getParam("kargorol"),
      kargoname: await this.props.navigation.getParam("kargoname"),
      kargoscno: await this.props.navigation.getParam("kargoscno"),
    });

    if(this.state.kargorol=='müdür')
    {
    this.setState({ show1: false});
    }
    else {
    this.setState({ show1: true});
    }
    if(this.state.kargorol=='user')
    {
    this.setState({ show: false});
    }
    else {
    this.setState({ show: true});
    }

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
      Axios.post('http://88.225.233.102:3000/login', LoginData)
          .then(obj => {
            console.log(obj)
        if ( obj.data.error == false ) {
       
       this.props.navigation.navigate('report',{kargorol:obj.data.data})
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
  <ImageBackground source={require('./img/wall.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1}}>
   <StatusBar barStyle={'dark-content'} backgroundColor={'#222'} />
      <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={ {fontSize:25,color:'lightsteelblue',fontWeight: 'bold'}}>
         PERSONEL GÖREV 
        </Text>
        <Text style={ {fontSize:25,color:'lightsteelblue',fontWeight: 'bold'}}>
        TAKİP SİSTEMİ
        </Text>
      </View>
      <View style={{marginTop:150,justifyContent:'center',alignItems:'center',borderWidth:5,marginHorizontal:105,borderColor:'aliceblue'}}>
         <ImageZoom cropWidth={200}
                      cropHeight={250}
                       imageWidth={200}
                      imageHeight={250}
                      >
                <Image style={{width:200, height:250}}
                       source={{uri:'http://195.175.76.118:86/'+this.state.kargoscno+'.jpg'}}/>
            </ImageZoom>
       </View>
       <View style={{marginTop:20,justifyContent:'center',alignItems:'center',marginHorizontal:90,borderRadius:10}}>
       <Text style={ {fontSize:20,color:'dimgray',fontWeight: 'bold'}}>
         Sn. {this.state.kargoname}
        </Text>
        <Text style={ {fontSize:20,color:'dimgray',fontWeight: 'bold'}}>
         HOŞGELDİNİZ
        </Text>
        </View>
        <View style={{flex:1,height:4,backgroundColor:'darkslategrey',marginTop:5,marginHorizontal:90}}></View>  
        <View>

        </View>
        <View style={styles.View1}>
        <View style={styles.piece1}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             onPress={() => {this.props.navigation.navigate('mission')}} 
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>TAMAMLANAN</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREVLER</Text>
           </TouchableOpacity>
             </View>
             <View style={styles.piece1}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             onPress={() => {this.props.navigation.navigate('report')}} 
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>DEVAM EDEN</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREVLER</Text>
           </TouchableOpacity>
             </View>

        </View>
        <View style={styles.View2}>
        <View style={styles.piece2}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             onPress={() => {this.props.navigation.navigate('assign')}} 
     
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>ERTELENEN</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREVLER</Text>
           </TouchableOpacity>
             </View>
             <View style={styles.piece2}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             onPress={() => {this.props.navigation.navigate('view')}} 
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>TAMAMLANMAYAN</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREVLER</Text>
             </TouchableOpacity>
             </View>
             </View>

           
             { this.state.show1 ? (
             <View style={styles.View3}>
                { this.state.show1 ? (
             <View style={styles.piece3}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
     
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREV</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>EKLE</Text>
           </TouchableOpacity>
           
             </View>
                  ) : null}
                  { this.state.show1 ? (
             <View style={styles.piece3}>

           
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             disabled={this.state.disabled} 
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}></Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}></Text>
             </TouchableOpacity>
             </View>
            ) : null}
             </View>
               ) : null}
            

            
                 { this.state.show ? (
             <View style={styles.View3}>
                { this.state.show ? (
             <View style={styles.piece3}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
     
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>GÖREV</Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}>VER</Text>
           </TouchableOpacity>
           
             </View>
                  ) : null}
                  { this.state.show ? (
             <View style={styles.piece3}>

           
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center'}}
             disabled={this.state.disabled} 
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}></Text>
             <Text style={{fontWeight: 'bold',color:'white',fontSize:12}}></Text>
             </TouchableOpacity>
             </View>
            ) : null}
             </View>
               ) : null}
             
      </ScrollView>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({

container:{
  flex:1,


},
View1:{
marginTop:10,
height:150,
backgroundColor:'transparent',
flexDirection:'row',
padding:20,
marginHorizontal:30

},
View2:{
  marginTop:-50,
  height:150,
  backgroundColor:'transparent',
  flexDirection:'row',
  padding:20,
  marginHorizontal:30
  
  },
  View3:{
    marginTop:-50,
    height:150,
    backgroundColor:'transparent',
    flexDirection:'row',
    padding:20,
    marginHorizontal:30
    },
  piece1:{
 flex:1,
 backgroundColor:'rgba(120,100,120,0.50)',
 height:80,
 borderRadius:100,
 marginRight:20,
 marginLeft:20,
 
  },
 piece2:{
  flex:1,
  backgroundColor:'rgba(120,100,120,0.50)',
  height:80,
  borderRadius:100,
  marginRight:20,
  marginLeft:20,

   
  },
  piece3:{
    flex:1,
    backgroundColor:'rgba(120,100,120,0.50)',
    height:80,
    borderRadius:100,
    marginRight:20,
    marginLeft:20,
    
     },
  header:{
    flex:1,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(94,97,100,0.60)'

  }
 
  },);
    