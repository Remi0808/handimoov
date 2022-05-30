import React, {Component} from 'react';  
import {StyleSheet, Text, View, Button, Modal,Image} from 'react-native';  
  
export default class App extends Component {  
  state = {  
    isVisible: false, //state of modal default false  
  }  
  render() {  
    return (  
      <View style = {styles.container}>  
        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <Image
                            style={styles.logophoto}
                            source={require('../src/metropolis.png')}
                          />
              
              <Text style = {styles.text}>METROPOLIS</Text>  
              
              <Button title="retour a la carte" onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}/>  
          </View>  
        </Modal>  

        
        
                   
                        
                          <Image 
                            style={styles.carteloisirs}
                            source={require('../src/carteloisirs.png')}
                             
                            
                          />
                          <Button title="POPUP" onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}/>
                     
                      

      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modal: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#27B7BB",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40,  
  
   
   },  
   text: {  
    
      fontSize: 40 ,
      color: 'white',
      padding: 30,
      textAlign:"center",
      fontWeight: 'bold',
      marginTop: 30,
   },  
   logophoto: { height: 150,
    width: 310,
    marginTop: 100,
    borderRadius: 10,

   },
   carteloisirs:{
    width:420,
    height:700,
    marginTop:-100,
    marginLeft:-20,

  },
  // bouton:{
  //   marginBottom:120,
  //   borderRadius: 180,
  // },
});  