import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native";



export default class SlidePage1 extends React.Component {
  
 
    render () {

        return (
          
          

              <View style={style.contenair}>

                  <Text style={style.titre}>
                  LOISIRS,{"\n"} 
                  RESTAURATION
                  </Text>

                  <Text style={style.texteslide1}>
                  Un <Text style={style.innerText}>Un quotidien</Text> plus agreable.
                  
                  </Text>

                 <View style={style.contenair1}>
                  <Image 
                            style={style.imageslide3}
                            source={require('../src/imageSlide3.png')}
                  />
                  
                  </View>

                  <Text style={style.texteslide3}>
                  <Text>Sachez directement en temps et en heure si les restaurants sont </Text>
                  <Text style={style.innerText}>adaptés pour vous.</Text> . 


                  

                  </Text>
                    
                  
              
              </View>
              
          
        
        )
    }






}

const style = StyleSheet.create({
    contenair:{ backgroundColor:'#ffffff',
    height:844,
    

    },
    
    
    
    titre:{ fontSize:40,
        color:'#000000',
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 90,

    },
    
    imageslide3:{
        width:400,
        height:250,
        // marginLeft:-10,
        // marginTop: 30,
        marginLeft:-12,
       

    },
    texteslide1:{
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 50,

    },
    innerText:{ color:"#27B7BB"

    },
    imageslide2:{
        width:600,
        height:150,
        marginLeft:-40,
        marginTop: 30,

    },

    button:{
        height:70,
        width: 280,
        marginTop:60,
        backgroundColor:"#27B7BB",
        marginLeft: 70,
        borderRadius: 10,
        shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
        


    },
    texteboutton:{
        fontSize: 35,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 15,
        color: 'white',
        

    },
    contenair1:{
        flex: 1,
        
        
    },
    texteslide3:{
        fontSize: 23,
        textAlign:'center',
        fontWeight: 'bold',
        marginBottom:150,
    },
    
    
    
    
})