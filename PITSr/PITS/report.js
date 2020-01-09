import React, {useState,Component,useEffect} from 'react';
import { Animated,ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,Image,CheckBox,Picker} from 'react-native';
import Axios from 'axios';
import { TOKEN } from './config';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ImagePicker from 'react-native-image-picker';


const { width, height } = Dimensions.get('window')



 
export default class report extends Component{
    
 
  constructor(props) {
		super(props);

		this.state = {
      selectedManager2:'key2',selectedManager1:'key2',selectedteammate0:'key1',selectedteammate1:'key1',selectedteammate2:'key1',selectedFile:null,checked1:false,
    checked2:false,show: false,show1:false,show2:false,show3:false,show4:false,teammate1:false,teammate2:false,Selected1:null,Selected2:null,selectedtype2:'key3',
    missiontype:null,calendershow:false,calendershow1:false,cln:0,cln1:0,cln2:0,filePath: {},photo: null, bilgislem:null,gordur:null,selectedtype1:'key3',projectype:false,completedshow:false,
    postponedshow:false,check1:false,check2:false,check3:false,check4:false,Selected3:null,calendershow2:null
  
     };
        this.onDayPress = this.onDayPress.bind(this);
        this.onDayPress1 = this.onDayPress1.bind(this);
        this.onDayPress2 = this.onDayPress2.bind(this);
     }

     async componentDidMount() {
   
      //////////////////////////////////////////////////////////////
      await Axios.get('http://192.168.1.182:3000/type')
         
    .then(async(obj) => {
     console.log(obj)
    
     this.setState({
       missiontype: obj.data.recordset
      
     });
    
     console.log(this.state.bilgislem)
    })
    .catch(async(err) => {
     console.log("err", err);
    });
      ///////////////////////////////////////////////////////////
     await  Axios.get('http://192.168.1.182:3000/calisan')
         
      .then(async(obj) => {
       console.log(obj)
      
       this.setState({
         bilgislem: obj.data.recordset
         
       });
     
       
       console.log(this.state.bilgislem)
     })
     .catch(async(err) => {
       console.log("err", err);
     });
   //////////////////////////////////////////////////////////////////   
   await Axios.get('http://192.168.0.83:3000/mudurluk')
         
   .then(async(obj) => {
    console.log(obj)
   
    this.setState({
      mudurlukler: obj.data.recordset
      
    });
   
    
    console.log(this.state.mudurlukler)
   })
   .catch(async(err) => {
    console.log("err", err);
   }); 
   };  

       chooseFile = () => {
      var options = {
        title: 'Fotoğraf Yükle',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
   
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          let source = response;
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            filePath: source,
            photo:source,
          });
        }
      });
    };
    handleUploadPhoto = () => {
      var photo = {
        uri: this.state.filePath.uri,
        type: this.state.filePath.type,
        name: this.state.filePath.fileName,
    };
     
    var formData = new FormData(); 
    //append created photo{} to formdata
    formData.append('image', photo);
    //use axios to POST
    Axios({
        method: 'POST',
        url: 'https://imgyukle.com/api/1/(action)',
        data: formData,
        headers: {
            'Authorization': '',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;'    
        }}) .then(function (response) { console.log(response)})
        .catch(function (error) { console.log(error.response)
    });
  };
      
         


  checkboxTest(){
    this.setState({
        checked1:!this.state.checked1
     })
  if(this.state.checked1==true)
{
this.setState({ show: false });
}
 else {
  this.setState({ show: true });
}}
checkboxTest1(){
  this.setState({
   projector1:!this.state.projector1
 })
if(this.state.projector1==true)
{
this.setState({ show1: false });
}
else {
this.setState({ show1: true });
}
}
checkboxTest2(){
    this.setState({
     teammate1:!this.state.teammate1
   })
  if(this.state.teammate1==true)
  {
  this.setState({ show2: false });
  }
  else {
  this.setState({ show2: true });
  }
  }
  checkboxTest3(){
    this.setState({
     teammate2:!this.state.teammate2
   })
  if(this.state.teammate2==true)
  {
  this.setState({ show3: false });
  }
  else {
  this.setState({ show3: true });
  }
  }
  checkboxTest4(){
    this.setState({check1:!this.state.check1 })
   if(this.state.check1==true)
   {
   this.setState({completedshow: false,});
   }
   else {
   this.setState({ completedshow: true,check3:false,check2:false,check4:false,postponedshow:false });
   }
   }
  checkboxTest5(){
    this.setState({check2:!this.state.check2})
    if(this.state.check2==true)
    {
    this.setState({  });
    }
    else {
    this.setState({ check3:false,check1:false,check4:false,postponedshow:false,completedshow: false });
    }
    }
  checkboxTest6(){
    this.setState({check3:!this.state.check3 })
            if(this.state.check3==true)
            {
            this.setState({  });
            }
            else {
            this.setState({ check2:false,check1:false,check4:false,postponedshow:false,completedshow: false});
            }
      }
  checkboxTest7(){
    this.setState({check4:!this.state.check4})
    if(this.state.check4==true)
    {
    this.setState({ postponedshow: false });
    }
    else {
    this.setState({ postponedshow: true,check3:false,check1:false,check2:false,completedshow: false });
    } 
  }
  checkboxTest8(){
    this.setState({
     projectype:!this.state.projectype
   })
  if(this.state.projectype==true)
  {
  this.setState({ show4: false });
  }
  else {
  this.setState({ show4: true });
  }
  }
  calenderhide1(){
    
    this.state.cln=this.state.cln+1;
   
    if(this.state.cln==1){
        this.setState({ calendershow: true }); 
     }
     else{
        this.setState({ calendershow: false });
        this.state.cln=0;
     }
  }
  calenderhide2(){
    
    this.state.cln1=this.state.cln1+1;
   
    if(this.state.cln1==1){
        this.setState({ calendershow1: true }); 
     }
     else{
        this.setState({ calendershow1: false });
        this.state.cln1=0;
     }
  }
  calenderhide3(){
    
    this.state.cln2=this.state.cln2+1;
   
    if(this.state.cln2==1){
        this.setState({ calendershow3: true }); 
     }
     else{
        this.setState({ calendershow3: false });
        this.state.cln2=0;
     }
  }
 
rendertype() 
{
 
 var gorevdurum = this.state.missiontype;
 if ( gorevdurum ) {
   return gorevdurum.map((data,index) => {
     return (
       <Picker.Item key={index} label={data['fault']}  value={data['fault']} />
     );
   })
 }
}

  
renderBilgislem() 
{
 
 var Bilgislem = this.state.bilgislem;
 if ( Bilgislem ) {
   return Bilgislem.map((data,index) => {
     return (
       <Picker.Item key={index} label={data['name_surname']}  value={data['name_surname']} />
     );
   })
 }
}
renderMudurluk() 
{

 var Mudurluk = this.state.mudurlukler;
 if ( Mudurluk ) {
   return Mudurluk.map((data,index) => {
     return (
       <Picker.Item key={index} label={data["KADRO_MÜDÜRLÜĞÜ"]}  value={data['KADRO_MÜDÜRLÜĞÜ']} />
     );
   })
 }
}



render(){
 
 console.disableYellowBox = true;
  return (
  <ImageBackground source={require('./img/blue.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1}}>
   <StatusBar barStyle={'dark-content'} backgroundColor={'#222'} />
      <ScrollView style={styles.container}>
          <View style={styles.header}>
             <Text style={ {fontSize:20,color:'aliceblue',fontWeight: 'bold'}}>
                 Personel Görev
            </Text>
            <Text style={ {fontSize:20,color:'aliceblue',fontWeight: 'bold'}}>
                 Analiz Raporu
            </Text>
          </View>
          <View style={styles.wall}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                     Görev Adı
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({date12: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                         placeholder='Görev Adını Giriniz.'
                         keyboardType='default'
                    />
               <View style={styles.date}>
               <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={() => this.calenderhide1()}
                  >
                <Text style={{fontWeight: 'bold',color:'white',fontSize:16}}>Başlama Tarihi</Text>
               </TouchableOpacity>
                 </View>
                     <TextInput
                         value={this.state.Selected1}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({date12: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginEnd:210,textAlign:'center'}}
                         placeholder='Görev Başlangıç Tarihi'
                         keyboardType='default'
                    />
                     <View style={styles.date1}>
                     <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={() => this.calenderhide2()}
                  >
                <Text style={{fontWeight: 'bold',color:'white',fontSize:16}}>Bitiş Tarihi</Text>
               </TouchableOpacity>
                 </View>
                     <TextInput
                         value={this.state.Selected2}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginStart:210,textAlign:'center'}}
                         placeholder='Görev Bitiş Tarihi'
                         keyboardType='default'
                    />  
                      { this.state.calendershow1 ? (
                        <Calendar
                        onDayPress={this.onDayPress1}
                         hideExtraDays
                         showWeekNumbers
                         markedDates={{[this.state.Selected2]: {selected: true,mrked:true, selectedColor: 'red'}}}
                         />
                        ) : null}
                            { this.state.calendershow ? (
                             <Calendar
                                 onDayPress={this.onDayPress}
                                hideExtraDays
                                showWeekNumbers
                                 markedDates={{[this.state.Selected1]: {selected: true,marked: true, selectedColor: 'blue'}}}
                        /> ) : null}
        
          
          <View style={{ backgroundColor:'rgba(230,230,230,0.50)',marginTop:20,marginRight:250,justifyContent:"center",alignItems:"center",marginLeft:20,borderWidth:2,borderColor:'skyblue'}}>
          <Text style={{color:'black',fontWeight:'bold',textAlign:"center",justifyContent:"center",fontSize:16,}}> 2.Müdürlük</Text>
    <CheckBox
      value={this.state.checked1}
      onValueChange={() => this.checkboxTest()}
    />
    </View>

  <View style={styles.department}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Müdürlük
                 </Text>
                 </View>
                    <Picker
                         mode='dropdown'
          
                         selectedValue={this.state.selectedManager1}
                        style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210}}
           
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedManager1: itemValue})}>
                            <Picker.Item  label="Lütfen Müdürlük Seçiniz." value="key2" />
                            {this.renderMudurluk()}
                             </Picker>
             { this.state.show ? (
                <View style={{ }}>
                    <Picker
                         mode='dropdown'
          
                         selectedValue={this.state.selectedManager2}
                        style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210,marginTop:5}}
           
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedManager2: itemValue})}>
                            <Picker.Item  label="Lütfen Müdürlük Seçiniz." value="key2" />
                            {this.renderMudurluk()}
                             </Picker>
                </View>
                 ) : null}
                      
          <View style={{ backgroundColor:'rgba(230,230,230,0.50)',marginTop:20,marginRight:250,justifyContent:"center",alignItems:"center",marginLeft:20,borderWidth:2,borderColor:'skyblue'}}>
          <Text style={{color:'black',fontWeight:'bold',textAlign:"center",justifyContent:"center",fontSize:16,}}> 2.Personel</Text>
    <CheckBox
      value={this.state.projector1}
      onValueChange={() => this.checkboxTest1()}
    />
    </View>

    <View style={styles.projector}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                İstekte Bulunan Personel
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:35, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',marginStart:210,textAlign:'center'}}
                         placeholder='Adı ve Soyadı'
                         keyboardType='default'
                    />
                         { this.state.show1 ? (
                     <View style={{ }}>
                           <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                        style={{flex:1,height:35, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',  marginStart:210,textAlign:'center',marginTop:7}}
                         placeholder='Adı ve Soyadı'
                         keyboardType='default'
                                     />
                                 </View>
                                ) : null}
                 
              
                 <View style={{backgroundColor:'rgba(230,230,230,0.50)',marginTop:20,marginRight:250,justifyContent:"center",alignItems:"center",marginLeft:20,borderWidth:2,borderColor:'skyblue'}}>
          <Text style={{color:'black',fontWeight:'bold',textAlign:"center",justifyContent:"center",fontSize:16,}}>Personel Arttır</Text>
          <View style={{flexDirection:'row'}}>
    <CheckBox
      value={this.state.teammate1}
      onValueChange={() => this.checkboxTest2()}
    />
     <CheckBox
      value={this.state.teammate2}
      onValueChange={() => this.checkboxTest3()}
    />
    </View>
    </View>

    <View style={styles.teammate1}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                Destek Personel
                 </Text>
                 </View>
                 <Picker
                         mode='dropdown'
          
                         selectedValue={this.state.selectedteammate0}
                        style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210}}
           
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedteammate0: itemValue})}>
                            <Picker.Item  label="Destek Personel Seçiniz." value="key1" />
                            {this.renderBilgislem()}
                             </Picker>
                        { this.state.show2 ? (
                         <View style={{flex:1 }}>
                                  <Picker
                                 mode='dropdown'
          
                             selectedValue={this.state.selectedteammate1}
                             style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210,marginTop:5}}
           
                             onValueChange={(itemValue, itemIndex) =>
                                 this.setState({selectedteammate1: itemValue})}>
                            <Picker.Item  label="Destek Personel Seçiniz." value="key1" />
                            {this.renderBilgislem()}
                             </Picker>
                                 </View>
                             ) : null}
                         { this.state.show3 ? (
                                <View style={{ flex:1}}>
                            <Picker
                            mode='dropdown'
          
                         selectedValue={this.state.selectedteammate2}
                        style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210,marginTop:5}}
           
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedteammate2: itemValue})}>
                            <Picker.Item  label="Destek Personel Seçiniz." value="key1" />
                            {this.renderBilgislem()}
                             </Picker>
                                </View>
                             ) : null}
              
              <View style={{ backgroundColor:'rgba(150,150,230,0.2)',marginTop:20,marginRight:250,justifyContent:"center",alignItems:"center",marginLeft:20,borderWidth:2,borderColor:'skyblue'}}>
          <Text style={{color:'black',fontWeight:'bold',textAlign:"center",justifyContent:"center",fontSize:16,}}> 2.Görev Tipi</Text>
    <CheckBox
      value={this.state.projectype}
      onValueChange={() => this.checkboxTest8()}
    />
    </View>

    <View style={styles.missiontype}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                 Görev Tipi
                 </Text>
                 </View>
                 <Picker
                         mode='dropdown'
          
                         selectedValue={this.state.selectedtype1}
                         style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210}}
           
           
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedtype1: itemValue})}>
                            <Picker.Item  label="Görev Tipini Seçiniz." value="key3" />
                              {this.rendertype()}
                             </Picker>
                         { this.state.show4 ? (
                     <Picker
                     mode='dropdown'
      
                     selectedValue={this.state.selectedtype2}
                     style={{height: 30, width: 240,color:'#333',backgroundColor:'white',marginStart:210,marginTop:5}}
           
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedtype2: itemValue})}>
                        <Picker.Item  label="Görev Tipini Seçiniz." value="key3" />
                          {this.rendertype()}
                         </Picker>
                                ) : null}

    <View style={styles.wall}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Sorumlusu
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                         placeholder='Görev Sorumlusu'
                         keyboardType='default'
                    />
                
            <View style={styles.wall}>
                 <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                    Görev Bilgisi
                 </Text>
                 </View>
                     <TextInput
                         value={this.state.isim}
                         ref={input => { this.textInput = input }}
                         multiline
                         onChangeText={(value) => this.setState({isim: value})}
                         style={{flex:1,height:70, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.95)',marginHorizontal:40,textAlign:'center'}}
                         placeholder='Görev Hakkında Bilgi Giriniz.'
                         keyboardType='default'
                    />
                    <View style={styles.projectstatus}>
                                     <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                                         Görev Durumu
                                     </Text>
                                  </View>
                                 <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',marginHorizontal:40,alignItems:"center",marginTop:3}}>
                                 <View style={{flexDirection:'column',backgroundColor:'rgba(255,255,255,0.95)',alignItems:"center",justifyContent:'center',borderColor: 'lightblue', borderWidth: 3,marginTop:-3,borderRightWidth:0,flex:1}}>
                                <Text style={ {fontSize:14,color:'midnightblue',fontWeight: 'bold',marginTop:5}}>
                            Tamamlandı
                          </Text>              
                        <CheckBox
                          value={this.state.check1}
                         onValueChange={() => this.checkboxTest4()}
                        />
                    <Text style={ {fontSize:14,color:'midnightblue',fontWeight: 'bold',marginTop:5}}>
                     Tamamlanmadı
                 </Text>        
                         <CheckBox
                             value={this.state.check2}
                            onValueChange={() => this.checkboxTest5()}
                        />
                </View>

            <View style={{flexDirection:'column',backgroundColor:'rgba(255,255,255,0.95)',borderColor: 'lightblue', borderWidth: 3,marginTop:-3,textAlign:'center',justifyContent:'center',flex:1,alignItems:"center"}}>
                            <Text style={ {fontSize:14,color:'midnightblue',fontWeight: 'bold',marginTop:5,}}>
                                 Devam Ediyor
                            </Text>              
                                <CheckBox
                                value={this.state.check3}
                               onValueChange={() => this.checkboxTest6()}
                            />
                        <Text style={ {fontSize:14,color:'midnightblue',fontWeight: 'bold',marginTop:5,}}>
                        Ertelendi
                        </Text>        
                        <CheckBox
                        value={this.state.check4}
                         onValueChange={() => this.checkboxTest7()}
                        />
                    </View>
                </View>
                { this.state.completedshow ? (
          <View style={styles.date3}>
               <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={() => this.calenderhide3()}
                  >
                <Text style={{fontWeight: 'bold',color:'white',fontSize:16}}>Görev Tamamlanma Tarihi</Text>
               </TouchableOpacity>
                 </View>
                      ) : null}
                       { this.state.completedshow ? (
                     <TextInput
                         value={this.state.Selected3}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({date12: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',textAlign:'center',marginHorizontal:40}}
                         placeholder='Görev Başlangıç Tarihi'
                         keyboardType='default'
                    />
                    ) : null}
                     { this.state.postponedshow ? (
                      <View style={styles.date3}>
               <TouchableOpacity
                   style={{flex:1,justifyContent:'center',alignItems:'center',}}
                   onPress={() => this.calenderhide3()}
                  >
                <Text style={{fontWeight: 'bold',color:'white',fontSize:16}}>Görev Ertelenme Tarihi</Text>
               </TouchableOpacity>
                 </View>
                  ) : null}
                    { this.state.postponedshow ? (
                     <TextInput
                         value={this.state.Selected3}
                         ref={input => { this.textInput = input }}
                         onChangeText={(value) => this.setState({date12: value})}
                         style={{flex:1,height:40, borderColor: 'lightblue', borderWidth: 3 ,backgroundColor:'rgba(255,255,255,0.80)',textAlign:'center',marginHorizontal:40}}
                         placeholder='Görev Başlangıç Tarihi'
                         keyboardType='default'
                    />
                    ) : null}
                     { this.state.calendershow3 ? (
                        <Calendar
                        onDayPress={this.onDayPress2}
                         hideExtraDays
                         showWeekNumbers
                         markedDates={{[this.state.Selected3]: {selected: true,mrked:true, selectedColor: 'green'}}}
                         />
                        ) : null}
               <Image
         /*  source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}*/
          />
           <View style={styles.photo}>
                                     <Text style={ {fontSize:16,color:'aliceblue',fontWeight: 'bold',}}>
                                         Fotoğraf
                                     </Text>
                                  </View>
         < View style={{alignItems:"center",marginTop:0,}}>
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 200, height: 200, alignItems:'center',borderWidth:2,borderColor:'rgba(45,100,250,0.50)',backgroundColor:'aliceblue'}}
          />
        </View>
        <View style={styles.filetransfer}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:10,backgroundColor: 'rgba(45,100,250,0.50)',height:30}}
             onPress={this.chooseFile.bind(this)}  >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>Dosya Seçiniz</Text>
             </TouchableOpacity>
         
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(45,100,250,0.50)',height:30}}
             OnPress={this.handleUploadPhoto} >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>Fotoğraf Gönder</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.saved}>
             <TouchableOpacity
             style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(45,100,250,0.50)',height:30}}
             onPress={this.chooseFile.bind(this)}  >
             <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}>Görevi Kaydet</Text>
             </TouchableOpacity>
             </View>
        </ScrollView>
    </ImageBackground>
  );
}
onDayPress2(day) {
  this.setState({
    Selected3: day.dateString
  })};
onDayPress1(day) {
    this.setState({
      Selected2: day.dateString
    });}
  onDayPress(day) {
    this.setState({
      Selected1: day.dateString
    })};
    

}


const styles = StyleSheet.create({

container:{
  flex:1,


},
header:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'aliceblue',
    marginTop:20,
    backgroundColor:'rgba(45,100,250,0.50)',
    marginHorizontal:70,
    borderRadius:10
},
wall:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:20,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue'
    

},
date:{
    flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:20,
    borderWidth:2,
    marginEnd:210,
    borderColor:'skyblue',
    alignItems:"center",
    justifyContent:"center",
    },
date1:{
    flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
     marginTop:-66,
    borderWidth:2,
    marginStart:210,
    borderColor:'skyblue',
    alignItems:"center",
    justifyContent:"center",
},
date3:{
  flex:1,
  backgroundColor:'rgba(45,100,250,0.50)',
  marginTop:10,
  borderWidth:2,
  borderColor:'skyblue',
  alignItems:"center",
  justifyContent:"center",
  marginHorizontal:40,
  },
department:{
    flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:-58,
    borderWidth:2,
    marginStart:210,
    borderColor:'skyblue',
    alignItems:"center",
    justifyContent:"center",
  },
projector:{
    flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
     marginTop:-58,
    borderWidth:2,
    marginStart:210,
    borderColor:'skyblue',
    alignItems:"center",
    justifyContent:"center",
  },
teammate1:{
    flex:1,
    backgroundColor:'rgba(45,100,250,0.50)',
     marginTop:-55,
    borderWidth:2,
    marginStart:210,
    borderColor:'skyblue',
    alignItems:"center",
    justifyContent:"center",
},
type:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:20,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue'
},
projectstatus:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(45,100,250,0.50)',
    marginTop:20,
    borderWidth:2,
    marginHorizontal:40,
    borderColor:'skyblue',
    },
    missiontype:{
      flex:1,
      backgroundColor:'rgba(45,100,250,0.50)',
       marginTop:-58,
      borderWidth:2,
      marginStart:210,
      borderColor:'skyblue',
      alignItems:"center",
      justifyContent:"center",
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
     }
 },);
    