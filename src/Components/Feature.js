import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';


class Feature extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
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
              placeholder="product-MRP"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>

          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginLeft: 10,
              marginTop: 15,
            }}>
            <Text style={{color: 'white'}}>+</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Variant');
          }}>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              padding:20,
              marginTop: 45,
              borderRadius: 100 / 2,
            }}>
            <Text style={{color: 'white'}}>Next Page</Text>
          </View>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
        </TouchableOpacity>
       
      </SafeAreaView>
    );
  }
}
export default Feature;
