import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from 'react-native';
import {ColorPicker, TriangleColorPicker} from 'react-native-color-picker';
import {Picker} from '@react-native-community/picker';
class Variant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'S',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
        <View style={{marginTop:40,flexDirection:"row"}}>
          <Text style={{fontSize:25,marginLeft:20,marginTop:50}}>Color</Text>
          {/* <TriangleColorPicker
            onColorSelected={color => console.warn(`Color selected: ${color}`)}
            style={{height: 150, width: 150,marginTop:25,marginLeft:50}}
          /> */}

<Picker
            selectedValue={this.state.product}
            style={{height:100, width: 50,marginTop:-70,marginLeft:60}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({size: itemValue})
            }>
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="Medium" />
          </Picker>


        </View>
        {/* <View style={{width:"100%",height:4,backgroundColor:"grey",marginTop:15}}/> */}

        <View style={{marginTop:40,flexDirection:"row"}}>
          <Text style={{fontSize:25,marginLeft:20,marginTop:20}}>Size</Text>
          <Picker
            selectedValue={this.state.product}
            style={{height:100, width: 50,marginTop:-70,marginLeft:60}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({size: itemValue})
            }>
            <Picker.Item label="S" value="Small" />
            <Picker.Item label="M" value="Medium" />
          </Picker>

        </View>

        <View style={{marginTop:70,flexDirection:"row"}}>
          <Text style={{fontSize:25,marginLeft:20,marginTop:10}}>Quantity</Text>
          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
              justifyContent: 'center',
              padding:10
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              placeholder="Quantity"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>

        </View>

        {/* <View style={{marginTop:70,flexDirection:"row"}}>
          <Text style={{fontSize:25,marginLeft:20,marginTop:10,textAlign:"justify"}}>Add Variant</Text>
          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              placeholder="Quantity"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>

        </View> */}

        
        
        
        {/* <View style={{width:"100%",height:4,backgroundColor:"grey",marginTop:15}}/> */}
      
      
      </SafeAreaView>
    );
  }
}
export default Variant;


