import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>Todo List Project</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'#999999',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    height:80
  },
  title:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
})

export default Header
