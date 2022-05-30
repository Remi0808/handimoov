import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";




    

const goTo = () => navigation.navigate("PageLoisirs");


const onPress = () => {
  // console.warn("blah")
}
export default class NavBar extends React.Component {
  
 
    render () {

        return (
          
          

              <View>
                <View style={style.navbar}>
              
                 <Text style={style.titre}>HANDIMOOV</Text>
                </View>
         
                <View style={style.container}>

                    <View style={style.countContainer}>
                      
                      <TouchableOpacity
                        style={style.square}
                        onPress={() =>
                            this.props.navigation.navigate('PageLoisirs')}
                        >
                          <Image
                            style={style.logo}
                            source={require('../src/logoloisir.png')}
                          />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={style.square}
                        onPress={() =>
                          this.props.navigation.navigate('Modal')}
                        >
                        <Image
                            style={style.logo}
                            source={require('../src/logomedical.png')}
                          />
                      </TouchableOpacity>

                    </View>
                    
                </View>
                <View style={style.container1}>

                    <View style={style.countContainer}>
                      
                      <TouchableOpacity
                        style={style.square}
                        onPress={() =>
                            this.props.navigation.navigate('PageLoisirs')}
                        >
                          <Image
                            style={style.logo}
                            source={require('../src/logoloisir.png')}
                          />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={style.square}
                        onPress={onPress}
                        >
                        <Text>clic ici</Text>
                      </TouchableOpacity>

                    </View>
                    
                    
                </View>
                <View style={style.container2}>

                    <View style={style.countContainer}>
                      
                      <TouchableOpacity
                        style={style.square}
                        onPress={() =>
                            this.props.navigation.navigate('PageLoisirs')}
                        >
                          <Image
                            style={style.logo}
                            source={require('../src/logoloisir.png')}
                          />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={style.square}
                        onPress={onPress}
                        >
                        <Text>clic ici</Text>
                      </TouchableOpacity>

                    </View>
                    
                    
                </View>
                
                
              
              </View>
              
          
        
        )
    }






}

const style = StyleSheet.create({
    navbar:{ height: 130,
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
        marginTop: 30,
        

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
        marginTop:120,
      },
      container1: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        height:30,
        backgroundColor:'#ffffff',
        marginTop:180,
      },
      container2: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        height:30,
        backgroundColor:'#ffffff',
        marginTop:180,
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
    
})