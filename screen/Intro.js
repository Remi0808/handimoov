import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-web-swiper";


export default class Intro extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={0}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                   
                          <View style={style.contenair}>
                      
                      <Text style={style.titre}>
                          HEBERGEMENT, {"\n"}
                          PLACES DE PARKING
                          </Text>

                          <Text style={style.texteslide1}>
                          Un <Text style={style.innerText}>accompagnement</Text> dans tous {"\n"}
                          vos  <Text style={style.innerText}>déplacements</Text>.
                          </Text>

                          <View style={style.contenair1}>
                          <Image 
                                    style={style.imageslide1}
                                    source={require('../src/imageSlide2.png')}
                          />

                          

                          <Text style={style.texteslide2}>
                          <Text style={style.innerText}>Handimoov</Text> permet aux utilisateurs{"\n"} de reservé un hebergement ou une{"\n"}
                          place de parking <Text style={style.innerText}>adapté a leur handicap</Text> . 

                          </Text>
                          </View>
                      </View>
                      
                      <View style={style.contenair}>

                          <Text style={style.titre}>
                          LOISIRS,{"\n"} 
                          RESTAURATION
                          </Text>

                          <Text style={style.texteslide3}>
                          Un <Text style={style.innerText}>Un quotidien</Text> plus agreable.

                          </Text>

                          <View style={style.contenair1}>
                          <Image 
                                    style={style.imageslide3}
                                    source={require('../src/imageSlide3.png')}
                          />

                          

                          <Text style={style.texteslide3}>
                          <Text>Sachez directement en temps et en heure si les restaurants sont </Text>
                          <Text style={style.innerText}>adaptés pour vous.</Text> . 




                          </Text>
                            


                          </View>
                      </View>
                      
                      <View style={style.contenair}>

                          <Text style={style.titre}>
                          MEDICALES, {"\n"}                    
                          OFFRES D'EMPLOI

                          </Text>

                          <Text style={style.texteslide1}>
                          <Text style={style.innerText}>Une meilleure</Text> accessibilité.  

                          </Text>

                          <View style={style.contenair1}>
                          <Image 
                                    style={style.imageslide4}
                                    source={require('../src/imageSlide4.png')}
                          />

                          </View>

                          <Text style={style.texteslide3}>
                          <Text>bla balablabalbal bab lab alba lab </Text>
                          <Text style={style.innerText}>adaptés pour vous.</Text> . 




                          </Text>
                          
                           
                        
                            


                          
                      </View>
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
                  </Swiper>
              </View>
              
          </View>
        )
    }
}

const style = StyleSheet.create({
  contenair:{ backgroundColor:'#ffffff',
  height:844,
  flex:1,

  },
  
  
  
  titre:{ fontSize:40,
      color:'#000000',
      textAlign:'center',
      fontWeight: 'bold',
      marginTop: 90,

  },
  
  imageslide1:{
      width:400,
      height:250,
      // marginLeft:-10,
      // marginTop: 30,
      marginLeft:-5,
     

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
  texteslide2:{
      fontSize: 23,
      textAlign:'center',
      fontWeight: 'bold',
      marginBottom:110,
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

titre:{ fontSize:40,
  color:'#000000',
  textAlign:'center',
  fontWeight: 'bold',
  marginTop: 90,

},

imageslide4:{
  width:400,
  height:250,
  // marginLeft:-10,
  // marginTop: 30,
  marginLeft:4,
 

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