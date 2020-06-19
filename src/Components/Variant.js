import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
class Variant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Color: '',
      Size:'',
      Quantity:0
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 40, flexDirection: 'row'}}>
          <Text style={{fontSize: 25, marginLeft: 20}}>Color</Text>

          <View
            style={{
              marginLeft: 30,
              marginTop: 5,
              borderColor: 'grey',
              borderWidth: 1,
              padding: 8,
              width: 200,
            }}>
            <RNPickerSelect
              onValueChange={value => {
                this.setState({
                  Color:value
                })
              }}
              items={[
                {label: 'Black', value: 'Black'},
                {label: 'Blue', value: 'Blue'},
                {label: 'Red', value: 'Red'},
              ]}
            />
          </View>
        </View>

        <View style={{marginTop: 40, flexDirection: 'row'}}>
          <Text style={{fontSize: 25, marginLeft: 20}}>Size</Text>

          <View
            style={{
              marginLeft: 44,
              marginTop: 5,
              borderColor: 'grey',
              borderWidth: 1,
              padding: 8,
              width: 200,
            }}>
            <RNPickerSelect
              onValueChange={value => {
                this.setState({
                  Size:value
                })
              }}
              items={[
                {label: 'Small', value: 'Small'},
                {label: 'Medium', value: 'Medium'},
                {label: 'Large', value: 'Large'},
              ]}
            />
          </View>
        </View>

        <View style={{marginTop: 40, flexDirection: 'row'}}>
          <Text style={{fontSize: 25, marginLeft: 20, marginTop: 10}}>Qty</Text>
          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: 200,
              justifyContent: 'center',
              padding: 10,
              marginLeft: 50,
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              placeholder="Quantity"
               onChangeText={txt => this.setState({Quantity: txt})}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Variant;
