import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image,} from "react-native";




const goTo = () => navigation.navigate("NavBar");






const onPress = () => {
  // console.warn("blah")
}

export default class NavBar extends React.Component {
  
  
 
    render () {

        return (
          
          

              <View>
                {/* <View style={style.navbar}>
              
                 <Text style={style.titre}>HANDIMOOV</Text>
                </View>
          */}
                <View style={style.container}>
                  

                    <View style={style.countContainer}>
                   
                      
                      <TouchableOpacity
                        
                        onPress={() =>
                            this.props.navigation.navigate('NavBar')}
                        >
                          <Image 
                            style={style.carteloisirs}
                            source={require('../src/carteloisirs.png')}
                          />
                     
                      </TouchableOpacity>

                      

                    </View>
                    
                </View>
                
              
              </View>
              
          
        
        )
    }






}

const style = StyleSheet.create({
    navbar:{ height: 120,
        backgroundColor: '#0E5153',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,

    },
    
    titre: {
        fontSize: 40 ,
        color: 'white',
        padding: 30,
        textAlign:"center",
        fontWeight: 'bold',
        

    },

  
      square: {
        backgroundColor: "#7cb48f",
        width: 150,
        height: 150,
        margin: 22,
        borderRadius: 10,
      },
      container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        height:30,
        backgroundColor:'#ffffff',
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        paddingHorizontal: 10,
      },
      countContainer: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        justifyContent:'center',
      },

      logo:{ height:150,
             width:150,
             

      },
      carteloisirs:{
        width:420,
        height:700,
        marginTop:700,
        marginLeft:-20,

      },
    
})