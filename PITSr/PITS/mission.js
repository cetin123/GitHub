import React,{ Component } from 'react';
import {Animated, ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity, ImageBackground,Dimensions,FlatList} from 'react-native';
import Axios from 'axios';
import {Image} from 'react-native';

import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import { TOKEN } from './config';

    class FlatListItem extends Component {

 
        constructor(props) {
          super(props);   
          this.state = {
              activeRowKey: null
         
          };          
      }
      render() {   
          const swipeSettings = {
              autoClose: true,
              onClose: (secId, rowId, direction) => {
                  if(this.state.activeRowKey != null) {
                      this.setState({ activeRowKey: null });
                  }              
              },          
              onOpen: (secId, rowId, direction) => {
                  this.setState({ activeRowKey: this.props.item.ID });
                 
              },      
              right: [
                  { 
                      onPress: () => {   
           
              
                       
                 
                
             
        }}
    ],  
                  
              rowId: this.props.index, 
              sectionId: 1    
          };               
        
            return (
              <Swipeout {...swipeSettings}>
       <View style={{flex:1,flexDirection:'column'}}>
      
      <View style={{
      
          flex:1,
          flexDirection:'row',
          backgroundColor: this.props.index % 2 == 0 ? 'dodgerblue':'seagreen',}}>
      
       <Image
       // source={{uri: 'http://88.225.233.102/'+kargoadi+'.jpg'}}
       style={{width:10,height:100,margin:5}}>
       </Image>
      
      <View style={{flex:1,flexDirection:'column'}}>

    
     
      </View>
      <View style={{height:2,backgroundColor:'white,'}}>
      
      </View>
      </View>
      </View>
              </Swipeout>
             
              
            );
        }
      
      }
      const styles = StyleSheet.create({
              flatListItem:{
                color:'white',
                padding:10,
                fontSize:16,
                fontWeight:'bold'
              }
              
              
      });
      
      
      
      export default class mission extends Component{
       
        constructor(props) {
          super(props);
        
          this.state = ({
   
           
          });
        }
      
       
      
        refreshFlatList = (deletedKey) => {
          this.setState((prevState) => {
              return {
                  deletedRowKey: deletedKey
              };
          });
      }
        async componentDidMount() {
      
       this.setState({

         })


         var LoginData = {
         
            'cid':this.state.kargoid,
            'token': TOKEN
              }

      if(this.state.kargoid!=null)
      {
         await  Axios.post('http://88.225.233.102:3000/yorumpost', LoginData)
          .then(obj => {
            console.log(obj)
        if ( obj.data.error == false ) {
         
          this.setState({
          dizi: obj.data.data
          })
          
        } else {
          Alert.alert("Uyarı", obj.data.message);
        }
      })

         }
        }
         
      async goLogin() {
       
        
        //console.log(this.state)
        var YORUM= this.state.analiz;
        var CID=this.state.kargoid;
        var NAME=this.state.kargoadi;
        var SCNO=this.state.kargosicil;
        var MDR=this.state.kargorol;
        var present = this;
        if (!YORUM ) {
          Alert.alert("UYARI.","Boş Bırakamazsınız.Lütfen Çalışan Analiz Raporu Giriniz !");
        }
        else{
          //console.log("testres");
          //Alert.alert("Uyarı", SCNO,MDR,NAME);
          var LoginData1 = {
            
            'cid':CID,
            'yorum':YORUM,
            'name':NAME,
            'scno':SCNO,
            'müdürlük':MDR,
            'token': TOKEN
           
          }
         // Alert.alert("Uyarı", SCNO,MDR,NAME)
          await Axios.post('http://88.225.233.102:3000/yorumpostadd', LoginData1)
              .then(obj => {
                console.log(obj)
            if ( obj.data.error == false ) {
              // TODO
              var added = {
                'YORUM': YORUM,
                'TARİH': moment.now(),
                'ID': 55
              }

              this.setState({
                dizi: [added, ...this.state.dizi ], 
              })
               
             //    this.props.navigation.navigate('sayfa4',{kargoid:this.state.kargoid});
              Alert.alert("Uyarı", obj.data.message);
                
            } else {
              Alert.alert("Hata", obj.data.message);
            }
        })
        }
      }
      async goLogin1() {
        //console.log(this.state)
        Alert.alert("Uyarı", JSON.stringify(this.state.ID1));
        
      
        
        var LoginData2 = {
          'id':this.state.ID1,
         'token': TOKEN
          }
        
        if(this.state.ID1!=null)
        {
        await Axios.post('http://88.225.233.102:3000/yorumpostdelete', LoginData2)
              .then(obj => {
                console.log(obj)
            if ( obj.data.error == false ) {
              
              this.props.navigation.navigate('sayfa4',{kargoid:this.state.kargoid});
                 Alert.alert("Uyarı", obj.data.message);

               //  this.refreshFlatList(deletingRow);
                
            } else {
                Alert.alert("Hata", obj.data.message);
            }
        })
        }
      }
    
      
        render(){
        
         return (
             <ScrollView style={{flex:1,backgroundColor:'lightsteelblue'}}>
           
            <View style={{marginHorizontal:50,}}>
       
      
            
      <FlatList style={{borderColor:'white',borderWidth:3}}
                data={this.state.dizi}
                renderItem={({item,index}) => {
                
                return(
                <FlatListItem item={item}   index={index} parentFlatList={this}>
      
                  
                  
                  
                  </FlatListItem>);
                  
                
                }}
                >
            </FlatList> 
           
   
   
        
        </View>
        </ScrollView>
            );
          }
        }
      