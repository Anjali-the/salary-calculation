import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function App() {
  const [s1, sets1] = useState(3000)
  const [D1, setD1] = useState(30)
  const [a1, seta1] = useState(0)
 const [t1, sett1] = useState(3000*0.02)

 
  function total(){
    var u=D1/30;
    return u;
  }
var r;
var u;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginLeft: 15, }}> choose the salary :</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          onPress={() => {
            sets1(3000)
           
            console.log(s1)
          }}
          style={{ height: 50, width: 91, margin: 30, marginLeft: 40, backgroundColor: (s1 === 3000 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 23, marginLeft: 15, }}>3000</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() =>{
          sets1(6000)
          
          console.log(s1);
        }}
          style={{ height: 50, width: 91, margin: 30, marginLeft: 40, backgroundColor: (s1 === 6000 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 23, marginLeft: 15, }}>6000</Text>
        </TouchableOpacity></View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            sets1(8000)
            }}
          style={{ height: 50, width: 91, margin: 30, marginLeft: 40, backgroundColor: (s1 === 8000 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 23, marginLeft: 15, }}>8000</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            sets1(13000)
           }}
          style={{ backgroundColor: (s1 === 13000 ? "yellow" : "white"), height: 50, width: 91, margin: 30, marginLeft: 40, borderRadius: 6, }}>
          <Text style={{ fontSize: 23, marginLeft: 15, }}>13000</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{ fontSize: 20, marginLeft: 15, }}> Days :</Text>
      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
          onPress={() => {
            setD1(30)
            // sets4(D1/30)
            var r=s1*0.02;
            sett1(r)}}
            
          style={{ height: 50, width: 81, margin: 20, backgroundColor: (D1 === 30 ? "yellow" : "white"), borderRadius: 6, }} >
          <Text style={{ fontSize: 18, marginLeft: 10, }}>30 Days</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() =>{
            setD1(60)
            var r=s1*0.04;
            sett1(r)}}
         
         style={{height: 50, width: 81, margin: 20, backgroundColor: (D1 === 60 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 18, marginLeft: 10, }}>60 Days</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setD1(90)
            // var c=D1/30;
            // sets4(c);
            var r=s1*0.06;
            sett1(r)
        

          
          }}
          style={{ height: 50, width: 81, margin: 20, backgroundColor: (D1 === 90 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 18, marginLeft: 15, }}>90 Days</Text>
        </TouchableOpacity>
      </View>



      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            seta1(0.01)
            
          }}
          // console.log(y)
          style={{ height: 50, width: 91, margin: 30, marginLeft: 50, backgroundColor: (a1 == 0.01 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 20, marginLeft: 10, }}>instant:</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            seta1(0)
           
            // console.log(z)
          }}
          style={{ height: 50, width: 91, margin: 30, backgroundColor: (a1 === 0 ? "yellow" : "white"), borderRadius: 6, }}>
          <Text style={{ fontSize: 23, marginLeft: 15, }}>late:</Text>
        </TouchableOpacity></View>
      <Text style={{ fontSize: 29, marginLeft: 30, color: 'navy' }}>calculation :</Text>
      <View style={{ marginLeft: 20, backgroundColor: 'darkturquoise', borderRadius: 15, marginRight: 15, }}>
        <Text style={{ fontSize: 25, marginLeft: 20, }}>Total Month:{total() }</Text>
        <Text style={{ fontSize: 25, marginLeft: 20, }}>Amount :{s1}</Text>
        <Text style={{ fontSize: 25, marginLeft: 20, }}>charge :{a1}</Text>
        <Text style={{ fontSize: 25, marginLeft: 20, }}>Total Amount :{t1+s1+a1}</Text>
      </View>

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    borderRadius: 20,
    marginTop: 50,
  },
});
