import React, {useState,Component,useEffect} from 'react';
import { Animated,ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,Image,CheckBox,Picker} from 'react-native';
import Axios from 'axios';
import { TOKEN } from './config';
import ImageZoom from 'react-native-image-pan-zoom';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const { width, height } = Dimensions.get('window')
	



  
export default class view extends Component{

    

  constructor(props) {
		super(props);

		this.state = {
    disabled1:true,disabled:true,
    show:false, show1:false,show2:false,show3:false,
    kargorol:null,kargoname:null,kargoscno:null,cln:null,Selected1:null,
  

        };
        
  }
  

  
     
  async componentDidMount() {
  }
  

render(){
  
 console.disableYellowBox = true;
  return (
  <ImageBackground source={require('./img/blue.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1,}}>
   <StatusBar barStyle={'dark-content'} backgroundColor={'#222'} />
      <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={ {fontSize:20,color:'aliceblue',fontWeight: 'bold'}}>
         PERSONEL GÖREV 
        </Text>
        <Text style={ {fontSize:20,color:'aliceblue',fontWeight: 'bold'}}>
         RAPORU
        </Text>
         </View> 

         <View style={styles.wall2}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                   Görev Adı
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
            <View style={styles.text}>
            <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold'}}>
            Başlangıç ve Bitiş Tarihi
            </Text>
            </View> 
            <View style={styles.calendar}>
                 <Calendar
                   style={{
                    height: 350
                  }}
                monthFormat={'dd MM yyyy'}
                hideExtraDays
                showWeekNumbers
                markedDates={{  
                '2020-01-22': {startingDay: true, color: 'green'},
                '2020-01-23': {endingDay: true,color: 'red'}}}
                markingType={'period'}
                theme={{ backgroundColor: 'aliceblue', calendarBackground: 'black',arrowColor: 'white',todayTextColor: 'seagreen',dayTextColor: 'lightsteelblue',textSectionTitleColor:'aliceblue' ,textDayFontSize: 17,}}
                /> 
                </View> 
          
                <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Sorumlusu
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center',alignContent:"center"}}
                       
                         keyboardType='default'
                    />
                    <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Destek Personel
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                      <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />

<View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                   Müdürlük
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                       <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                   İstekte Bulunan Personel
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                       <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Tipi
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:30, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                        <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Bilgisi
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:'auto', borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                       <View style={styles.saved}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(45,100,250,0.50)',marginTop:10}}
             onPress={() => {this.props.navigation.navigate('update')}} 
     
           >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>Görevi Güncelle</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Durumu
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:'auto', borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
                      <View style={styles.wall1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Açıklaması
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:'auto', borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                       
                         keyboardType='default'
                    />
           
      </ScrollView>
    </ImageBackground>
  );} 
}


const styles = StyleSheet.create({

container:{
    flex:1,
},
header:{
    flex:1,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(45,100,250,0.50)',
    marginHorizontal:40
},
calendar:
{
   flex:1,
   marginHorizontal:40,
   backgroundColor:'rgba(45,100,250,0.50)',
   borderWidth:3,
   borderColor:'rgba(45,100,250,0.50)',
 
},
text:
{
   flex:1,
   marginTop:20,
   marginHorizontal:40,
   backgroundColor:'rgba(45,100,300,0.70)',
},
wall:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
     borderColor:'skyblue',height:40
},
wall1:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:5,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue'
},
wall2:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:20,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue'
},
saved:{
    
  marginTop:10,
  
  borderRadius:5,
  flex:1,
  height:35,
  marginHorizontal:90,
  marginBottom:20,
 
  textAlign:'center',
  justifyContent:'center'
 
},
  projectstatus:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:10,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue',
    },
    date:{
     flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
        marginTop:10,
        borderWidth:2,
        borderColor:'skyblue',
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:40
        },
        filetransfer:{
          flexDirection:"row",
          marginTop:10,
          borderRadius:5,
          flex:1,
          height:35,
          marginHorizontal:50,
          marginBottom:20,
          padding:10,
          textAlign:'center',
          justifyContent:'center'
       },
       photo:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(45,100,250,0.50)',
        marginTop:20,
        borderWidth:2,
        marginHorizontal:105,
        borderColor:'skyblue',
        },
  },);
    