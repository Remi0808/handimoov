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
                  REJOINGNEZ {"\n"}     
                  LA COMMUNAUTE
                  </Text>
                  
                  <Image 
                            style={style.imageslide5}
                            source={require('../src/imageSlide5.png')}
                  />
                  

                  <Text style={style.texteslide5}>
                  Une carte permettant de trouver <Text style={style.innerText}>Les STRUCTURES ACCESSIBLES</Text>
                  
                  </Text>

               

                    <TouchableOpacity
                        style={style.button}
                        onPress={() =>
                            this.props.navigation.navigate('NavBar')}
                        >
                            <Text style={style.texteboutton}>
                  Commencez
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
    
    imageslide5:{
        width:400,
        height:350,
        // marginLeft:-10,
        marginTop: 30,
        marginLeft:20,
    },
    texteslide5:{
        fontSize: 30,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 10,

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