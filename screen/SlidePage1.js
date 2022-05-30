import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native";
import SwiperFlatList from 'react-native-swiper-flatlist';

const goTo = () => navigation.navigate("PageLoisirs");


const onPress = () => {
  // console.warn("blah")
}

export default class SlidePage1 extends React.Component {
  
 
    render () {

        return (
            
          
          

              <View style={style.contenair}>

                  <Text style={style.titre}>
                  HANDIMOOV {"\n"}
                  C'EST QUOI ?
                  </Text>
                  
                  <Image 
                            style={style.imageslide1}
                            source={require('../src/imageSlide1.png')}
                  />
                  

                  <Text style={style.texteslide1}>
                  Tous les établissements adaptés à <Text style={style.innerText}>vos besoin !</Text>
                  </Text>

                  <Image 
                            style={style.imageslide2}
                            source={require('../src/slideimage2.png')}
                  />

                    <TouchableOpacity
                        style={style.button}
                        onPress={() =>
                            this.props.navigation.navigate('Intro')}
                        >
                            <Text style={style.texteboutton}>
                  Démarrer
                  </Text>
                          
                      </TouchableOpacity>
              
              
              </View>
              
          
        
        )
    }






}

const style = StyleSheet.create({
    contenair:{ backgroundColor:'white',
    height:844,
    

    },
    
    
    
    titre:{ fontSize:40,
        color:'black',
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 90,

    },
    
    imageslide1:{
        width:500,
        height:150,
        // marginLeft:-10,
        marginTop: 30,

    },
    texteslide1:{
        fontSize: 30,
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
    
    
    
})